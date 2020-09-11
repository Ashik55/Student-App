import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AddStudent from './components/AddStudent.vue'
import AddSubject from './components/AddSubject.vue'

const routes = [
  {
    path: "/add-student",
    name: "Add Student",
    component: AddStudent
  },
  {
    path: "/add-subject",
    name: 'Add Subject',
    component: AddSubject
  }
]

const router = new VueRouter({
  routes
})

export default router