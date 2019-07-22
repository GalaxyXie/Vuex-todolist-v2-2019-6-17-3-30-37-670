<template>
  <div>
    <ol >
      <li v-for="item in  itemsShow" v-bind:key="item.key" v-bind:class="{ checked: item.isChecked }" >
        <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" />
        <input type="text" >
        <span >{{item.stringcontent}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Content",
  computed:{
    itemsShow(){
      return this.$store.state.itemsShow
    }
  }

}
</script>
