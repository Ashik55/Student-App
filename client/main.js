import { Meteor } from 'meteor/meteor'
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueMeteorTracker from 'vue-meteor-tracker'
import router from './routes'
import AppComponent from '/imports/ui/App.vue';


Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Vuetify);


  const vuetify = new Vuetify();


  new Vue({
    router,
    vuetify,
    render: (h) => h(AppComponent),
  }).$mount('#app');
});