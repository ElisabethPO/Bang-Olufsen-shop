import './vendor/focus-visible.min.js';
import './components/main-slider';
import './components/catalog-slider';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import './components/card-select';
import './components/stepper';
import './components/card-slider';
import './components/card-bottom-tabs';
import './components/products';
import './components/cart';
import './components/cabinet';
import './components/contact-us';
import './components/product';
import './components/catalog';
import './components/admin-panel';
import './components/order';
import vars from '../js/_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';
import SimpleBar from 'simplebar';


new SimpleBar(document.querySelector('.card-description__left'), {
  autoHide: false,
});

if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector('.to-top')) {
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.site-container'));
  });
}
