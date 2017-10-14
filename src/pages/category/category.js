import "css/common.css"
import "./category.css"

import Vue from "vue"
import axios from "axios"
import api from "js/api.js"
import Foot from "components/Foot.vue"

new Vue({
    el:"#app",
    data:{
        topLists:null,
    },
    created(){
        this.getTopList()
    },
    methods:{
        getTopList(){
            axios.get(api.topList).then(res=>{
                this.topLists = res.data.lists
            })
        }
    },
    components:{
        Foot,
    }
})