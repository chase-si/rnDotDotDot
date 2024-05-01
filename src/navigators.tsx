import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
import Page3 from './pages/page3.js';
import Page4 from './pages/page4.js';
import Page5 from './pages/page5.js';
import Page6 from './pages/page6.js';
import Page7 from './pages/page7.js';
import Page8 from './pages/page8.js';
import Page9 from './pages/page9.js';

export const NAV_COMPONENTS_MAP : { [key: string] : any} = {
  'Page1': Page1,
  'Page2': Page2,
  'Page3': Page3,
  'Page4': Page4,
  'Page5': Page5,
  'Page6': Page6,
  'Page7': Page7,
  'Page8': Page8,
  'Page9': Page9,
}

export const NAV_CONSTANTS = {
  PAGE1: {
    name: 'Page1',
    title: '请点击1次黄色圈圈'
  },
  PAGE2: {
    name: 'Page2',
    title: '请再点击1次中间的黄色圈圈'
  },
  PAGE3: {
    name: 'Page3',
    title: '请点击最左边的黄色圈圈'
  },
  PAGE4: {
    name: 'Page4',
    title: '请点击最右边的黄色圈圈'
  },
  PAGE5: {
    name: 'Page5',
    title: '请点击中间的黄色圈圈5次'
  },
  PAGE6: {
    name: 'Page6',
    title: '请点击左侧的红色圈圈5次'
  },
  PAGE7: {
    name: 'Page7',
    title: '请点击右侧的蓝色圈圈5次'
  },
  PAGE8: {
    name: 'Page8',
    title: '请晃一晃'
  },
  PAGE9: {
    name: 'Page9',
    title: '把屏幕竖起来'
  }
}
