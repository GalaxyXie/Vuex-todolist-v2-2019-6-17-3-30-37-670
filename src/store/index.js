import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemsAll:[],
        itemsShow:[],
        condition:1,
    },
   mutation:{
       filterItem(state){
        state.itemsShow=state.itemsAll.filter((item) => {
                if (state.condition === 1) {
                  return item
                } else if (state.condition === 2) {
                  return !item.isChecked
                } else if (state.condition === 3) {
                  return item.isChecked
                }
              })
       },
       add(state,stringcontent,isChecked,isEdit){
        state.$store.state.itemsAll.push({stringcontent:stringcontent,isChecked:isChecked,isEdit:isEdit,condition:state.condition});
       
       }
   }
  })
  export default store;