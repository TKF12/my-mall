// 设置可以修改参数里面的数据
/* eslint no-param-reassign: ["error", { "props": false }] */
function scroll(start, end, dom, map) {
  let dis = 0;
  // 加速度
  let speed = 5;
  if (end < 0) {
    speed *= -1;
  }
  const t = setInterval(() => {
    dis += speed;
    // 每次起始位置加 5
    dom[map] = start + dis;
    // 当前位置大于 目标位置清除定时器
    if (Math.abs(dis) >= Math.abs(end)) {
      dom[map] = start + end;
      clearInterval(t);
    }
  }, 2);
}

export default {
  scroll,
};
