<template>
    <div>
        <!-- <input type="checkbox" name="" id="" :value="value" @click="toggleCheckBox"> -->
        <input type="checkbox" name="" id="" :value="value" @click="$emit('input',!value)">
    </div>
</template>

<script>
export default {
   /* v-model 은 아래의 두 가지로 조작된다.
   @input 이벤트
   :value 값 */
   props:['value'],
   /* methods:{
       toggleCheckBox(){
           this.$emit('input',!this.value);
       }
   } */
}
</script>

<style>

</style>
