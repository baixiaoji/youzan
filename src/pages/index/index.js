import "css/common.css"
import "./index.css"


import Vue from 'vue'
import axios from "axios"
import url from "js/api.js"
import foot from "components/foot.vue"
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll)
new Vue({
    el:"#app",
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
    },
    created(){
        this.getLists()
    },
    methods:{
        getLists(){
            if(this.allLoaded) return //全部加载完就不加载
            this.loading = true
            axios.post(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then(res=>{
                let curLists = res.data.lists
                // 判断当前条数是不是一致，不是便是尽头
                if(curLists.length < this.pageSize){
                    this.allLoaded = true
                }
                //当前是否是第一次加载数据
                if(this.lists){
                    this.lists = this.lists.concat(curLists)
                }else{
                    this.lists = curLists
                }
                this.loading = false
            })
        }
    },
    components:{
        foot
    }
})