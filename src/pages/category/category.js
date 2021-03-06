import "css/common.css"
import "./category.css"

import Vue from "vue"
import axios from "axios"
import api from "js/api.js"
import Foot from "components/Foot.vue"
import mixin from "js/mixin.js"
new Vue({
    el:"#app",
    data:{
        topLists:null,
        topIndex:0, 
        subData:null,
        rankData:null
    },
    created(){
        this.getTopList()
        this.getSubLists(0)
    },
    methods:{
        getTopList(){
            // gain the side of top selection
            axios.get(api.topList).then(res=>{
                this.topLists = res.data.lists
            })
        },
        getSubLists(index,id){
            // gain the content of this top selection need 
            console.log(index,id)
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(api.subList,{id}).then(res=>{
                    this.subData = res.data.data
                    
                })
            }
        },
        getRank(){
            axios.post(api.rank).then(res=>{
                this.rankData = res.data.data
            })
        },
        toSearch(list){
            location.href = `search.html?id=${list.id}&name=${list.name}`
        }
    },
    mixins:[mixin],
    components:{
        Foot,
    }
})