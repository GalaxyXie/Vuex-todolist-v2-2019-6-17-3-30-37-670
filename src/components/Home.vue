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
		
		<li class="first"  @click="turntoMypage">
			<div class="d-firstNav s-firstNav clearfix">
				<i class="fa fa-bars"></i>
				<span>我的</span>
				<i class="fa fa-caret-right fr "></i>
			</div>
		</li>
		<li class="first"  @click="turnToIndex">
			<div class="d-firstNav s-firstNav">
				<i class="fa fa-bars"></i>	                    
				<span >TodoList列表</span>
				<i class="fa fa-caret-right fr" ></i>
			</div>
		</li>
	</ul>
</div>
  <router-view/>
</body>
   
    </div>
</template>
<script>
import index from "./index";

export default {
    
   components: {
      "index": index,
  },

     computed: {
        username () {     
         return this.$route.params.username
     }
    },
    methods:{
        returnMain(){
                this.$router.push({ name: 'main', }) ;
        },
         turnToIndex(){
            this.$router.push({ name: 'index', }) ;   
        },
        turntoMypage(){
             this.$router.push({ name: 'mypage', }) ;
        }
    },
    beforeRouteLeave (to, from , next) { 
        const answer = window.confirm('Do you really want to leave? ')
        if (answer) {
            next()
        } else {
            next(false)
        }
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
