<template>
    <div>
        <div>
        <input type="button" @click="returnMain" value="back"/>
            
        <span>hi,{{$route.params.username}}</span>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p> 
      </div>
     
    </div>
</template>
<script>

export default {
     computed: {
        username () {     
         return this.$route.params.username
     }
    },
    methods:{
        returnMain(){
             var msg = "back?";
            if (confirm(msg)==true){
                this.$router.push({ name: 'main', }) ;// -> /user/123
			    return true;  
		    }else{
			    return false;
		    }
        }
    },
    mounted() {
        console.log(this.$route)
    }

}
</script>