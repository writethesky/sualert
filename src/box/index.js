/*!
 * aaaasualert
 * @license MIT
 */
 /*! aaaasualert */
import box from './box.vue';

var sualert = {
    install: function(Vue){

        Vue.component('sualert', box);
    }
}
// window.sualert = sualert;
export default sualert;