'use strict';
import {Edge} from 'butterfly-dag';
import $ from 'jquery';

class BaseEdge extends Edge {
  draw(obj) {
    let path = super.draw(obj);
    if (this.options.color) {
      $(path).addClass(this.options.color);
    }
    return path;
  }
  drawArrow(isShow) {
    let dom = super.drawArrow(isShow);
    if (this.options.color) {
      $(dom).addClass(this.options.color);
    }
    return dom;
  }
  calcPath(sourcePoint, targetPoint) {
    let sourcePos = [];
    let targetPos = [];

    // 定位锚点位置,b,t,r,l
    this.sourceNode.endpoints.forEach(element => {
      sourcePos.push({
        name: element.id,
        position: [element._posLeft, element._posTop]
      });
    });
    this.targetNode.endpoints.forEach(element => {
      targetPos.push({
        name: element.id,
        position: [element._posLeft, element._posTop]
      });
    });
    function MinDis(targetPos, sourcePos) {
      let distance = [];
      // TtB
      distance.push(Math.pow(targetPos[1].position[1] - sourcePos[0].position[1], 2) + Math.pow(targetPos[1].position[0] - sourcePos[0].position[0], 2));
      // BtT
      distance.push(Math.pow(targetPos[0].position[1] - sourcePos[1].position[1], 2) + Math.pow(targetPos[0].position[0] - sourcePos[1].position[0], 2));
      // LtR
      distance.push(Math.pow(targetPos[2].position[1] - sourcePos[3].position[1], 2) + Math.pow(targetPos[2].position[0] - sourcePos[3].position[0], 2));
      // RtL
      distance.push(Math.pow(targetPos[3].position[1] - sourcePos[2].position[1], 2) + Math.pow(targetPos[3].position[0] - sourcePos[2].position[0], 2));
      let mindis = distance[0];
      let minIndex = 0;
      for (let i = 0; i < distance.length; i++) {
        if (distance[i] < mindis) {
          minIndex = i;
          mindis = distance[i];
        }
      }
      if (minIndex === 1) {
        return `M ${sourcePos[1].position[0] + 3} ${sourcePos[1].position[1]} L ${targetPos[0].position[0] + 3} ${targetPos[0].position[1]}`;
      } else if (minIndex === 0) {
        return `M ${sourcePos[0].position[0] + 3} ${sourcePos[0].position[1]} L ${targetPos[1].position[0] + 3} ${targetPos[1].position[1]}`;
      } else if (minIndex === 2) {
        return `M ${sourcePos[3].position[0] + 3} ${sourcePos[3].position[1]} L ${targetPos[2].position[0] + 3} ${targetPos[2].position[1]}`;
      } else {
        return `M ${sourcePos[2].position[0] + 3} ${sourcePos[2].position[1]} L ${targetPos[3].position[0] + 3} ${targetPos[3].position[1]}`;
      }
    }
    let path = MinDis(targetPos, sourcePos);

    return path;
  }
}

export default BaseEdge;
