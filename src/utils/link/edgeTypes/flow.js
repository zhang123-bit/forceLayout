'use strict';

import _ from 'lodash';
import {_calcOrientation} from './_utils.js';

function _drawFlowSegment(segments, offset) {
  let current = null;
  let next = null;
  let cornerRadius = 0; // 拐角角度，按道理可以配置
  let lw = 1; // strokeWidth，线条的粗细
  let _segLength = (s) => {
    return Math.sqrt(Math.pow(s[0] - s[2], 2) + Math.pow(s[1] - s[3], 2));
  };
  let result = [];
  let _drawStraight = (d) => {
    return ['M', d.x1 + offset.x, d.y1 + offset.y, 'L', d.x2 + offset.x, d.y2 + offset.y];
  };
  let _drawArc = (d) => {

    // 有重复，可抽象，计算象限
    let _quadrant = (p1, p2) => {
      if (p2[0] > p1[0]) {
        return (p2[1] > p1[1]) ? 2 : 1;
      } else if (p2[0] === p1[0]) {
        return p2[1] > p1[1] ? 2 : 1;
      } else {
        return (p2[1] > p1[1]) ? 3 : 4;
      }
    };
    // 计算两点之间的直线的梯度
    let _gradient = (p1, p2) => {
      if (p2[0] === p1[0]) {
        return p2[1] > p1[0] ? Infinity : -Infinity;
      } else if (p2[1] === p1[1]) {
        return p2[0] > p1[0] ? 0 : -0;
      } else {
        return (p2[1] - p1[1]) / (p2[0] - p1[0]);
      }
    };
    // Calculates the angle between the two points
    let _theta = (p1, p2) => {
      let m = _gradient(p1, p2);
      let t = Math.atan(m);
      let s = _quadrant(p1, p2);
      if ((s === 4 || s === 3)) {
        t += Math.PI;
      }
      if (t < 0) {
        t += (2 * Math.PI);
      }
      return t;
    };

    let _calcAngle = function (x, y) {
      return _theta([d.cx, d.cy], [x, y]);
    };

    let startAngle = _calcAngle(x1, y1);
    let endAngle = _calcAngle(x2, y2);
    let TWO_PI = 2 * Math.PI;
    if (endAngle < 0) {
      endAngle += TWO_PI;
    }
    if (startAngle < 0) {
      startAngle += TWO_PI;
    }
    // we now have startAngle and endAngle as positive numbers, meaning the
    // absolute difference (|d|) between them is the sweep (s) of this arc, unless the
    // arc is 'anticlockwise' in which case 's' is given by 2PI - |d|.
    let ea = endAngle < startAngle ? endAngle + TWO_PI : endAngle;
    let sweep = Math.abs(ea - startAngle);
    let anticlockwise = d.ac;

    if (anticlockwise) {
      sweep = TWO_PI - sweep;
    }

    return ['M', d.x1 + offset.x, d.y1 + offset.y, 'A', d.r, d.r, '0', ',', d.x2 + offset.x, d.y2 + offset.y];
  };

  // let offsetX = sourcePoint.pos[0] < targetPoint.pos[0] ? sourcePoint.pos[0] : targetPoint.pos[0];
  // let offsetY = sourcePoint.pos[1] < targetPoint.pos[1] ? sourcePoint.pos[1] : targetPoint.pos[1];

  for (let i = 0; i < segments.length - 1; i++) {
    current = current || _.cloneDeep(segments[i]);
    next = _.cloneDeep(segments[i + 1]);
    if (cornerRadius > 0 && current[4] !== next[4]) {
      let radiusToUse = Math.min(cornerRadius, _segLength(current), _segLength(next));
      // right angle. adjust current segment's end point, and next segment's start point.
      current[2] -= current[5] * radiusToUse;
      current[3] -= current[6] * radiusToUse;
      next[0] += next[5] * radiusToUse;
      next[1] += next[6] * radiusToUse;
      let ac = (current[6] === next[5] && next[5] === 1) ||
            ((current[6] === next[5] && next[5] === 0) && current[5] !== next[6]) ||
            (current[6] === next[5] && next[5] === -1);
      let sgny = next[1] > current[3] ? 1 : -1;
      let sgnx = next[0] > current[2] ? 1 : -1;
      let sgnEqual = sgny === sgnx;
      let cx = (sgnEqual && ac || (!sgnEqual && !ac)) ? next[0] : current[2];
      let cy = (sgnEqual && ac || (!sgnEqual && !ac)) ? current[3] : next[1];

      let _line1 = _drawStraight({
        x1: current[0],
        y1: current[1],
        x2: current[2],
        y2: current[3]
      });
      let _line2 = _drawArc({
        r: radiusToUse,
        x1: current[2],
        y1: current[3],
        x2: next[0],
        y2: next[1],
        cx: cx,
        cy: cy,
        ac: ac
      });
      result = result.concat(_line1);
      result = result.concat(_line2);
    } else {
      // dx + dy are used to adjust for line width.
      let dx = (current[2] === current[0]) ? 0 : (current[2] > current[0]) ? (lw / 2) : -(lw / 2);
      let dy = (current[3] === current[1]) ? 0 : (current[3] > current[1]) ? (lw / 2) : -(lw / 2);
      let _line = _drawStraight({
        x1: current[0] - dx,
        y1: current[1] - dy,
        x2: current[2] + dx,
        y2: current[3] + dy
      });
      result = result.concat(_line);
    }
    current = next;
  }
  if (next !== null) {
    let _line = _drawStraight({
      x1: next[0],
      y1: next[1],
      x2: next[2],
      y2: next[3]
    });
    result = result.concat(_line);
  }
  return result.join(' ');
}

function drawFlow(sourcePoint, targetPoint, orientationLimit) {
  if (!sourcePoint.orientation) {
    sourcePoint.orientation = _calcOrientation(targetPoint.pos[0], targetPoint.pos[1], sourcePoint.pos[0], sourcePoint.pos[1], orientationLimit);
  }

  if (!targetPoint.orientation) {
    targetPoint.orientation = _calcOrientation(sourcePoint.pos[0], sourcePoint.pos[1], targetPoint.pos[0], targetPoint.pos[1], orientationLimit);
  }

  let stub = 30; // 每部分折线的最小长度
  let midpoint = 0.5; // 折线中点
  let w = Math.abs(sourcePoint.pos[0] - targetPoint.pos[0]);
  let h = Math.abs(sourcePoint.pos[1] - targetPoint.pos[1]);
  let sx = targetPoint.pos[0] < sourcePoint.pos[0] ? w : 0;
  let sy = targetPoint.pos[1] < sourcePoint.pos[1] ? h : 0;
  let tx = targetPoint.pos[0] < sourcePoint.pos[0] ? 0 : w;
  let ty = targetPoint.pos[1] < sourcePoint.pos[1] ? 0 : h;
  let offsetX = sourcePoint.pos[0] < targetPoint.pos[0] ? sourcePoint.pos[0] : targetPoint.pos[0];
  let offsetY = sourcePoint.pos[1] < targetPoint.pos[1] ? sourcePoint.pos[1] : targetPoint.pos[1];
  // 小心有可能so[0]和to[0]同时为0；或者是so[1]和to[1]同时为0
  let so = sourcePoint.orientation;
  let to = targetPoint.orientation;
  // 拿来判断是对面，垂直还是正交
  let oProduct = ((so[0] * to[0]) + (so[1] * to[1]));

  let sourceAxis = so[0] === 0 ? 'y' : 'x';

  let startStubX = sx + (so[0] * stub);
  let startStubY = sy + (so[1] * stub);
  let endStubX = tx + (to[0] * stub);
  let endStubY = ty + (to[1] * stub);

  let isXGreaterThanStubTimes2 = Math.abs(sx - tx) > (stub + stub);
  let isYGreaterThanStubTimes2 = Math.abs(sy - ty) > (stub + stub);

  // 判断方向
  let anchorOrientation = null;
  if (oProduct === -1) {
    anchorOrientation = 'opposite';
  } else if (oProduct === 0) {
    anchorOrientation = 'perpendicular';
  } else if (oProduct === 1) {
    anchorOrientation = 'orthogonal';
  }

  // 计算折线的方法
  let _commonStubCalculator = () => {
    return [startStubX, startStubY, endStubX, endStubY];
  };
  let stubCalculators = {
    perpendicular: _commonStubCalculator,
    orthogonal: _commonStubCalculator,
    opposite: (axis) => {
      let idx = axis === 'x' ? 0 : 1;
      let areInProximity = {
        x: () => {
          return ( (so[idx] === 1 && (
            ( (startStubX > endStubX) && (tx > startStubX) ) ||
            ( (sx > endStubX) && (tx > sx))))) ||
            ( (so[idx] === -1 && (
              ( (startStubX < endStubX) && (tx < startStubX) ) ||
              ( (sx < endStubX) && (tx < sx)))));
        },
        y: () => {
          return ( (so[idx] === 1 && (
            ( (startStubY > endStubY) && (ty > startStubY) ) ||
            ( (sy > endStubY) && (ty > sy))))) ||

            ( (so[idx] === -1 && (
                ( (startStubY < endStubY) && (ty < startStubY) ) ||
                ( (sy < endStubY) && (ty < sy)))));
        }
      };
      
      // 判断是否需要折线
      if (areInProximity[axis]()) { // 这判断可以设置总是有折线
        return {
          x: [(sx + tx) / 2, startStubY, (sx + tx) / 2, endStubY],
          y: [startStubX, (sy + ty) / 2, endStubX, (sy + ty) / 2]
        }[axis];
      } else {
        return [startStubX, startStubY, endStubX, endStubY];
      }
    }
  };

  // 加工线条处理的方法
  let lastx = null;
  let lasty = null;
  let segments = [];
  let _sgn = (n) => {
    return n < 0 ? -1 : n === 0 ? 0 : 1;
  };
  let _addSegment = (x, y) => {
    if (lastx === x && lasty === y) {
      return;
    }
    let lx = lastx == null ? sx : lastx;
    let ly = lasty == null ? sy : lasty;
    let o = lx === x ? 'v': 'h';
    let sgnx = _sgn(x - lx);
    let sgny = _sgn(y - ly);

    lastx = x;
    lasty = y;

    segments.push([lx, ly, x, y, o, sgnx, sgny]);
  };

  // 开始实现
  let stubs = stubCalculators[anchorOrientation](sourceAxis);
  let idx = sourceAxis === 'x' ? 0 : 1;
  let oidx = sourceAxis === 'x' ? 0 : 1;
  let ss = stubs[idx];
  let oss = stubs[oidx];
  let es = stubs[idx + 2];
  let oes = stubs[oidx + 2];

  _addSegment(stubs[0], stubs[1]);

  let midx = startStubX + (endStubX - startStubX) * midpoint;
  let midy = startStubY + (endStubY - startStubY) * midpoint;

  let orientations = { x: [ 0, 1 ], y: [ 1, 0 ] };
  let _lineCalculators = {
    perpendicular: (axis) => {
      let sis = {
        x: [
          [[1, 2, 3, 4], null, [2, 1, 4, 3]],
          null,
          [[4, 3, 2, 1], null, [3, 4, 1, 2]]
        ],
        y: [
          [[3, 2, 1, 4], null, [2, 3, 4, 1]],
          null,
          [[4, 1, 2, 3], null, [1, 4, 3, 2]]
        ]
      };
      let stubs = {
        x: [[startStubX, endStubX], null, [endStubX, startStubX]],
        y: [[startStubY, endStubY], null, [endStubY, startStubY]]
      };
      let midLines = {
        x: [[midx, startStubY], [midx, endStubY]],
        y: [[startStubX, midy], [endStubX, midy]]
      };
      let linesToEnd = {
        x: [[endStubX, startStubY]],
        y: [[startStubX, endStubY]]
      };
      let startToEnd = {
        x: [[startStubX, endStubY], [endStubX, endStubY]],
        y: [[endStubX, startStubY], [endStubX, endStubY]]
      };
      let startToMidToEnd = {
        x: [[startStubX, midy], [endStubX, midy], [endStubX, endStubY]],
        y: [[midx, startStubY], [midx, endStubY], [endStubX, endStubY]]
      };
      let otherStubs = {
        x: [startStubY, endStubY],
        y: [startStubX, endStubX]
      };
      let soIdx = orientations[axis][0];
      let toIdx = orientations[axis][1];
      let _so = so[soIdx] + 1;
      let _to = to[toIdx] + 1;
      let otherFlipped = (to[toIdx] === -1 && (otherStubs[axis][1] < otherStubs[axis][0])) || (to[toIdx] === 1 && (otherStubs[axis][1] > otherStubs[axis][0]));
      let stub1 = stubs[axis][_so][0];
      let stub2 = stubs[axis][_so][1];
      let segmentIndexes = sis[axis][_so][_to];

      // 计算一下节点象限
      let _quadrant = (p1, p2) => {
        if (p2.pos[0] > p1.pos[0]) {
          return (p2.pos[1] > p1.pos[1]) ? 2 : 1;
        } else if (p2.pos[0] == p1.pos[0]) {
          return p2.pos[1] > p1.pos[1] ? 2 : 1;
        } else {
          return (p2.pos[1] > p1.pos[1]) ? 3 : 4;
        }
      };
      var segment = _quadrant(sourcePoint, targetPoint);
      if (segment === segmentIndexes[3] || (segment === segmentIndexes[2] && otherFlipped)) {
        return midLines[axis];
      } else if (segment === segmentIndexes[2] && stub2 < stub1) {
        return linesToEnd[axis];
      } else if ((segment === segmentIndexes[2] && stub2 >= stub1) || (segment === segmentIndexes[1] && !otherFlipped)) {
        return startToMidToEnd[axis];
      } else if (segment === segmentIndexes[0] || (segment === segmentIndexes[1] && otherFlipped)) {
        return startToEnd[axis];
      }
    },
    orthogonal: (axis, startStub, otherStartStub, endStub, otherEndStub) => {
      let extent = {
        x: so[0] === -1 ? Math.min(startStub, endStub) : Math.max(startStub, endStub),
        y: so[1] === -1 ? Math.min(startStub, endStub) : Math.max(startStub, endStub)
      }[axis];

      return {
        x: [
          [extent, otherStartStub],
          [extent, otherEndStub],
          [endStub, otherEndStub]
        ],
        y: [
          [otherStartStub, extent],
          [otherEndStub, extent],
          [otherEndStub, endStub]
        ]
      }[axis];
    },
    opposite: (axis, ss, oss, es) => {
      let otherAxis = {x: 'y', y: 'x'}[axis];
      let dim = {x: 'height', y: 'width'}[axis];
      let comparator = axis === 'x' ? isXGreaterThanStubTimes2 : isYGreaterThanStubTimes2;

      // 考虑下自连的情况, 现在很不严禁
      if (sourcePoint.pos[0] === targetPoint.pos[0] && sourcePoint.pos[1] === targetPoint.pos[1]) {
        //
      } else if (!comparator || (so[idx] === 1 && ss > es) || (so[idx] === -1 && ss < es)) {
        return {
          x: [
            [ss, midy],
            [es, midy]
          ],
          y: [
            [midx, ss],
            [midx, es]
          ]
        }[axis];
      } else if ((so[idx] === 1 && ss < es) || (so[idx] === -1 && ss > es)) {
        return {
          x: [
            [midx, sy],
            [midx, ty]
          ],
          y: [
            [sx, midy],
            [tx, midy]
          ]
        }[axis];
      }
    }
  };

  // 计算剩余线条
  var p = _lineCalculators[anchorOrientation](sourceAxis, ss, oss, es, oes);
  if (p) {
    for (let i = 0; i < p.length; p++) {
      _addSegment(p[i][0], p[i][1]);
    }
  }

  // line to end stub
  _addSegment(stubs[2], stubs[3]);

  // end stub to end (common)
  _addSegment(tx, ty);

  // 实际操作svg
  return _drawFlowSegment(segments, {
    x: offsetX,
    y: offsetY
  });
}

export default drawFlow;
