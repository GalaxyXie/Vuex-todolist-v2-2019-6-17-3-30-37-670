import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemsAll:[],
        itemsShow:[],
        condition:1,
    },
   mutations:{
       filterItem(state){
        state.itemsShow=state.itemsAll.filter((item) => {
                if (state.condition == 1) {
                  return item
                } else if (state.condition == 2) {
                  return !item.isChecked
                } else if (state.condition == 3) {
                  return item.isChecked
                }
              })
       },
       add(state,item){
        state.itemsAll.push(item );   
       }
   }
  })
  export default store;