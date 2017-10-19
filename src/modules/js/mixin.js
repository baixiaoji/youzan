let mixin = {
    filters:{
        currency(price){
            return Number.prototype.toFixed.call(price,2)
        }
    }
}
export default mixin