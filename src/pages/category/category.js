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
        }
    },
    filters:{
        addZero(num){
            return Number.prototype.toFixed.call(num,2)
        }
    },
    components:{
        Foot,
    }
})