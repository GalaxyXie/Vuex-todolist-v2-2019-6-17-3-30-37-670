<template>
    <div>
        <div>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p> 
      </div>
     
    </div>
</template>
<script>

export default {
  name: "header",
  data() {
    return {
      checkString: "",
      items: [],
      itemsCopy:[],
      condition: 1
    };
  },
  method:{
   
  }
}
</script>