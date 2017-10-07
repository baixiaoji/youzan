import "css/common.css"
import "./index.css"


import Vue from 'vue'
import axios from "axios"
import url from "js/api.js"
new Vue({
    el:"#app",
    data:{
        lists:null,
        pageNum:1,
        pageSize:6
    },
    created(){
        this.getLists()
    },
    methods:{
        getLists(){
            axios.post(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then(res=>{
                this.lists = res.data.lists
            })
        }
    }
})