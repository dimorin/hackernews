<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
//import bus from '@/utils/bus.js' 
import ListMixin from '@/mixins/ListMixin.js'
export default{
  components:{
    ListItem
  },
  /* mounted(){
    bus.$emit('end:spinner');
  } */
  mixins: [ListMixin],
  /* created(){
    bus.$emit('start:spinner');
    setTimeout(() =>{
      this.$store.dispatch('FETCH_ASKS')
      .then(() => {
        console.log('fetched ask data');
        bus.$emit('end:spinner');
      })
      .catch()   
    },3000)  
  },   */
}
</script>




