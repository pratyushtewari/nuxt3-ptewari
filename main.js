import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
// import Carousel from 'vue-carousel';

Vue.config.ignoredElements = "'grid', 'c'";
import App from './App.vue';
import VueProgressBar from '@aacassandra/vue3-progressbar';

const app = Vue.createApp({ App });

app.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
});

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
};

app.use(VueTypedJs).use(VueProgressBar, options).mount('#app');
