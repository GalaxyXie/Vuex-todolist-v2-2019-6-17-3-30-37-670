<template>
  <div class="index">
    <div class="container">
      <Header/>
       <div>
        <input class="input-text" type="text" v-model="checkString" />
        <div id="button" @click="addItem">Add</div>
      </div>
      <br />
      <Content :items="items" />

        <Footer/>

    </div>
  </div>
</template>

<script>
import Content from "./content"
import Header from "./header"
import Footer from "./footer"
export default {
  name: "index",
  components: {
      Content,
      Header,
      Footer,
  },
  data() {
    return {
      checkString: "",
      items: [],
      itemsCopy:[],
      condition: 1
    };
  },
  methods: {
    addItem(){
      this.$store.commit('add',this.checkString,this.isChecked,this.isEdit);

      alert(this.$store.state.itemsAll[0].checkString);
      this.$store.commit('filterItem');
    },
    showAll() {
      this.condition = 1;
      this.items=this.itemsCopy;
    },
    showChecked(){
      this.condition = 2;
      this.items=null;
      this.items=this.itemsCopy.filter(item=>item.isChecked==false);
      this.checkString= "";
    },
    showNotChecked(){
      this.condition = 3;
      this.items=null;
      this.items=this.itemsCopy.filter(item=>item.isChecked==true);
      this.checkString= "";
    },
    editable(index){
       alert(index);
      this.items[index].isEdit = true;
    },
    input(index){
      this.items[index].isEdit=false; 
    } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/todo.css");

</style>
