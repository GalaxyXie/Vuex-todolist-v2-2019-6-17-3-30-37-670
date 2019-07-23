const mutations={
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
    },
    getItems(state,items){
        state.itemsAll.push(...items);
        state.itemsShow.push(...items);
    },
   
}
export default mutations