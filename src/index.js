
import Vue from 'vue/dist/vue.js';
import sualert from './box/index.js';

Vue.use(sualert);


var vm = new Vue({
  el: '#app',
  data: {},
    methods: {
        ok(items){
            console.log(items);
        },
        changed(index, items){
            items[index].value = 8;
            Vue.set(items, index, items[index]);
        }
    }
});


vm.$refs.two.show();