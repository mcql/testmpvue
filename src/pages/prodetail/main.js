import Vue from 'vue'
import App from './index'

var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
Vue.prototype.$http=fly

const app = new Vue(App)
app.$mount()

