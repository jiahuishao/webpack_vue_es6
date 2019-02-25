import Vue from 'vue'
import app from './comp.vue'

const data = require('./data');
console.log(data.data);

const exa = new Vue({
    el:'#exa',
    data:{
        message:'shaojiahui'
    }
})

const sha =new Vue({
    el:'#app',
    components:{app},
})