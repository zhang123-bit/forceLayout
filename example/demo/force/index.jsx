import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from 'butterfly-dag';
import mockData from './data';
import 'butterfly-dag/dist/index.css';
import './index.less';
class ForceTree extends Component {
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: false,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      layout: {
        type: 'forceLayout',
        options: {
          preventOverlap: true,
          nodeSize: 100,
          preventOverlapPadding: 100,
          link: {
            // 线条的距离
            distance: 200,
            // 线条的粗细
            strength: 1
          },
        },
      },
      theme: {
        edge: {
          shapeType: 'Manhattan',
          defaultAnimate: true
        }
      },
      zoomGap: 0.001,
      autoResizeRootSize: true,
    });
    this.canvas.draw(mockData, () => {
      this.canvas.setGridMode(true, {
        isAdsorb: false,         // 是否自动吸附,默认关闭
        theme: {
          // 网格间隙
          background: 'rgba(0, 0, 0, 0.9)',     // 网格背景颜色
          circleRadiu: 1.5,        // 圆点半径
          circleColor: 'rgba(255, 255, 255, 0.8)'    // 圆点颜色
        }
      });
    });
  }
  render() {
    return (
      <div className='force-tree-page'>
        <div className="force-tree-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ForceTree />, document.getElementById('root'));
