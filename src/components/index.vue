<template>
  <div class="index">
    <div class="container">
      <v-header/>
       <div>
        <input class="input-text" type="text" v-model="checkString" />
        <div id="button" @click="addItem">Add</div>
      </div>
      <br />
      <v-content />

        <v-footer/>

    </div>
  </div>
</template>

<script>
import Content from "./content.vue"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
export default {
  name: "index",
  components: {
      "v-content": Content,
      "v-header": Header,
      "v-footer": Footer,
  },
  data() {
    return {
      checkString: "",
      
    };
  },
  methods: {
    addItem(){
      let condition=this.$store.state.condition
      let item={checkString:this.checkString,isChecked:false,condition};
      this.$store.commit('add',item);
      // alert(this.$store.itemsAll[0].stringcontent);
      this.$store.commit('filterItem');
    },
   
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/todo.css");

</style>
