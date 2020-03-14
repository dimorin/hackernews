<template>
    <div>
        <h1>component design pattern</h1>
        <section>
            <h2>common</h2>
            <common-test-items :items="items" @renew="renew"></common-test-items>  
        </section>
        <section>
            <h2>slot</h2>
            <ul>
                <common-test-items-slot>아이템1</common-test-items-slot>
                <common-test-items-slot>아이템2</common-test-items-slot>
                <common-test-items-slot>
                    <div style="color:tomato;">아이템4</div>
                    <!-- <div slot="title"></div> -->
                </common-test-items-slot>
            </ul>
        </section>
        <section>
            <h2>controlled component</h2>
            <common-test-checkbox v-model="checked"></common-test-checkbox>
        </section>
        <section>
            <h2>renderless(표현을 하지 않는 컴포넌트, 데이터를 제공만 하는 컴포넌트)</h2>
            <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
                <div slot-scope="{ response, loading }">
                    <div v-if="!loading">{{ response }}</div>
                    <div v-if="loading">Loading...</div>
                </div>                
            </fetch-data>
        </section>        
    </div>
</template>

<script>
import CommonTestItems from '@/components/CommonTestItems.vue'
import CommonTestItemsSlot from '@/components/CommonTestItemsSlot.vue'
import CommonTestCheckbox from '@/components/CommonTestCheckbox.vue'
import FetchData from '@/components/FetchData.vue'
export default {
    components:{
        CommonTestItems,
        CommonTestItemsSlot,
        CommonTestCheckbox,
        FetchData
    },
    data(){
        return{
            items:[10,20,30],
            checked:false,
        }
    },
    methods:{
        renew(){
            this.items = [20,30,49]
        }
    }
}
</script>

<style scoped>
    section{border:1px solid #dddddd;margin:5px;padding:5px;}
</style>