import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
import Page3 from './pages/page3.js';
import Page4 from './pages/page4.js';
import Page5 from './pages/page5.js';
import Page6 from './pages/page6.js';
import Page7 from './pages/page7.js';
import Page8 from './pages/page8.js';

const NAV_CONSTNATS = {
  PAGE1: {
    name: 'Page1',
    component: Page1,
    title: '请点击1次黄色圈圈'
  },
  PAGE2: {
    name: 'Page2',
    component: Page2,
    title: '请再点击1次中间的黄色圈圈'
  },
  PAGE3: {
    name: 'Page3',
    component: Page3,
    title: '请点击最左边的黄色圈圈'
  },
  PAGE4: {
    name: 'Page4',
    component: Page4,
    title: '请点击最右边的黄色圈圈'
  },
  PAGE5: {
    name: 'Page5',
    component: Page5,
    title: '请点击中间的黄色圈圈5次'
  },
  PAGE6: {
    name: 'Page6',
    component: Page6,
    title: '请点击左侧的红色圈圈5次'
  },
  PAGE7: {
    name: 'Page7',
    component: Page7,
    title: '请点击右侧的蓝色圈圈5次'
  },
  PAGE8: {
    name: 'Page8',
    component: Page8,
    title: '请晃一晃'
  }
}
export default NAV_CONSTNATS;