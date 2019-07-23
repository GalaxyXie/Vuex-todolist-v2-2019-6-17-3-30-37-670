<template>
  <div>
    <ol>
      <li
        v-for="item in  itemsShow"
        v-bind:key="item.key"
        v-bind:class="{ checked: item.isChecked }"
      >
        <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" />
        <span
          @dblclick="editable=true"
          :contenteditable="editable"
          @keydown="updatable"
          ref="info"
        >{{item.checkString}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Content",
  computed: {
    itemsShow() {
      return this.$store.state.itemsShow;
      
    }
  },
  data() {
    return {
      editable: false
    };
  },
  methods: {
    updatable() {
      if (event.keyCode == 13) {
        this.editable = false;
        this.item.checkString = this.$refs.info.innerHTML;
      }
    },
  }
};
</script>
