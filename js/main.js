import Vue from 'vue'
import app from './comp.vue'
import comp2 from './comp2.vue'

import '../css/index.css'
import '../css/test.css'

const data = require('./data');
console.log(data.data);

const exa = new Vue({
    el:'#exa',
    data:{
        message:'shaojiahui'
    },
    components: {comp2}
})

const sha =new Vue({
    el:'#app',
    components:{app},
})