<template>
    <div>
        <div>
        <h2>hello,Welcome to here</h2>
        <input type="text" placeholder="please enter name" v-model="username"/>
       <button @click="turnPage">
            开始使用
       </button>
        
      </div>
     
    </div>
</template>
<script>

export default {
  name: "Main",
  data() {
    return {
      username: "",
      
    };
  },
  methods: {
    turnPage(){
      this.$router.push({ name: 'home', params: { username:this.username }}) ;// -> /user/123
    }
  },

}
</script>