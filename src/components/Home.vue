<template>
    <div>
        <div class="header">
        <input type="button" @click="returnMain" value="back"/>
        <span class="username">hi,{{$route.params.username}}</span>
      </div>
      
<body>
<div class="s-side">
	<ul>
		<!--这部分是导航栏信息。-->
		<li class="s-firstItem first">
			<a href="#">
				<i class="fa fa-home"></i>
				<span>首页</span>
			</a>
		</li>
		
		<li class="first">
			<div class="d-firstNav s-firstNav clearfix">
				<i class="fa fa-bars"></i>
				<span>我的</span>
				<i class="fa fa-caret-right fr "></i>
			</div>
		</li>
		<li class="first">
			<div class="d-firstNav s-firstNav">
				<i class="fa fa-bars"></i>	                    
				<span>TodoList列表</span>
				<i class="fa fa-caret-right fr" ></i>
			</div>
		</li>
	</ul>
</div>
  <index/>
</body>
   
    </div>
</template>
<script>
import index from "./index";
import Content from "./Content"
import Top from "./Top"
import Bottom from "./Bottom"
export default {
    
   components: {
      "index": index,
       
     "v-content": Content,
      "v-header": Top,
      "v-footer": Bottom,
  
  },

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
        },
         turnToIndex(){
            this.$router.push({ path: 'index', }) ;// -> /user/123 	    
        }
    },
    mounted() {
        console.log(this.$route)
    }
    

}
</script>
<style scoped>
 @import url("../css/todo.css"); 
 @import url("../css/index.css"); 
.username{
    right: 0;
    top: 0;
    float: right;
}
button{
    text-align: center;
}
.header{
    background-color: lightcoral;
    height: 30px;
}
.s-side{
    margin-top:30px; 
}

</style>
