import axios from 'axios'
import Vue from "vue"
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const actions={

// Make a request for a user with a given ID
add({commit},item){
  axios.post('http://localhost:3001/todos', item)
  .then(function (response) {
    commit('add',item);
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
},
// Make a request for a user with a given ID
getItem({commit}){
    axios.get('http://localhost:3001/todos')
     .then(function(response) { 
         
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    commit('getItems',response.data);
  });
  }

}
export default actions