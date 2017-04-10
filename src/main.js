import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


import notification from './classes/Notification.js';
import oneTime from './classes/One.js';


notification.log("Webpack Log!");
oneTime();
notification.notify("Webpack notify");
const app = new Vue({
    el: '#app',
    render: h => h(App)
})




