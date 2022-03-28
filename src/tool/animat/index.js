import Vue from 'vue';
import com from './index.vue';

// 创建构造器，子类
const Animat = Vue.extend(com);

export default ({
  imgTop,
  imgLeft,
  imgWidth,
  imgHeight,
  endTop,
  endLeft,
  src,
}) => {
  const app = new Animat({
    el: document.createElement('div'),
    data() {
      return {
        show: true,
        src,
        imgTop,
        imgLeft,
        imgWidth,
        imgHeight,
        endTop,
        endLeft,
        opacity: 1,
      };
    },
  });
  document.body.appendChild(app.$el);
  setTimeout(() => {
    app.imgLeft = endLeft;
    app.imgTop = endTop;
    app.imgWidth = 50;
    app.imgHeight = 50;
    app.opacity = 0;
  }, 3);
  setTimeout(() => {
    app.show = false;
  }, 1000);
};
