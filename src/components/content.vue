<template>
  <div>
    <ol >
      <li v-for="(item,index) in $store.state.items" v-bind:key="item.key" v-bind:class="{ checked: item.isChecked }" >
        <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" />
        <input type="text" v-if="item.isEdit">
        <span @dblclick="editable(index)" v-else @change='input(index)'>{{item.stringcontent}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Content",
  methods:{
    editable(index){
      this.$emit("editable", index);   
    },
  }
}
</script>
