<template>
    <div>
        <button @click="loginUser1">login</button>
        <h1>List</h1>
        <ul>
            <li v-for="item in items" :key="item.key">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            items:[],
        }
    },
    methods:{
        loginUser(){
            axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if(response.data.id === 1){
                    axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(response => {
                        this.items = response.data;
                    })
                }
            })
        },
        async loginUser1(){
            try{
                var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                if(response.data.id === 1){
                    var list = await axios.get('https://jsonplaceholder.typicode.com/todos');                    
                    this.items = list.data;                    
                }
            }catch(error){
                //console.log(error);
            }            
        }
    }
}
</script>

<style>

</style>
