import "css/common.css"
import "./search.css"

import Vue from "vue"
import axios from "axios"
import url from "js/api.js"
import qs from "qs"
import Velocity from "velocity-animate"
import mixin from "js/mixin.js"
let { id, name } = qs.parse(location.search.substr(1))

new Vue({
    el: ".container",
    data: {
        searchLists: null,
        keyword: name,
        isShow: false,
    },
    created() {
        this.getSearchList()
    },
    methods: {
        getSearchList() {
            axios.post(url.searchList, { id }).then(res => {
                console.log(res)
                this.searchLists = res.data.lists
            })
        },
        move(){
            if (document.scrollingElement.scrollTop > 100) {
                this.isShow = true
            } else {
                this.isShow = false
            }
            console.log(this.isShow)
        },
        gotop(){
            Velocity(document.scrollingElement, "scroll", { duration: 150 })
            this.isShow = false
        }
    },
    mixins:[mixin]
})