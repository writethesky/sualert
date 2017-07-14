
import Vue from 'vue/dist/vue.js';
import sualert from './box/index.js';

Vue.use(sualert);


var vm = new Vue({
  el: '#app',
  data: {},
    methods: {
        ok(items){
            console.log(items);
        }
    }
});


console.log(vm.$refs.two.show());