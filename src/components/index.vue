<template>
  <div class="index">
    <div class="container">
      <div>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p> 
      </div>
      <div>
        <input class="input-text" type="text" v-model="checkString" />
        <div id="button" @click="add">Add</div>
      </div>
      <br />
      <Content  @editable="editable" />
      <div>
        <ul id="filters">
          <li>
            <a  data-filter="all"  @click="showAll">ALL</a>
          </li> 
          <li>
            <a data-filter="active"  @click="showChecked">Active</a>
          </li>
          <li>
            <a data-filter="complete" @click="showNotChecked">Complete</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./content";
export default {
  name: "index",
  components: {
      Content,
  },
  data() {
    return {
      checkString: "",
      itemsCopy:[],
      condition: 1
    };
  },
  methods: {
    add() {   
      this.itemsCopy.push({stringcontent:this.checkString,isChecked:false,isEdit:false});
      this.$store.state.items = this.itemsCopy.filter((item) => {
        if (this.condition === 1) {
          return item
        } else if (this.condition === 2) {
          return !item.isChecked
        } else if (this.condition === 3) {
          return item.isChecked
        }
      })
      //this.items.push({stringcontent:this.checkString,isChecked:false,isEdit:false});
      this.checkString= "";
    },
    showAll() {
      this.condition = 1;
      this.$store.state.items=this.itemsCopy;
    },
    showChecked(){
      this.condition = 2;
      this.$store.state.items=null;
      this.$store.state.items=this.itemsCopy.filter(item=>item.isChecked==false);
      this.checkString= "";
    },
    showNotChecked(){
      this.condition = 3;
      this.$store.state.items=null;
      this.$store.state.items=this.itemsCopy.filter(item=>item.isChecked==true);
      this.checkString= "";
    },
    editable(index){
      //alert("hi");
      //this.$set(this.items[index],isEdit,true);
     this.$store.state.items[index].isEdit=true; 
    },
    input(index){
      this.$store.state.items[index].isEdit=false; 
    } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/todo.css");

</style>
