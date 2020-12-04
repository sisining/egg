<template>
    <div id="app">
<!--        <Create></Create>-->
<!--        <Home :allData="allData"></Home>-->
        <router-view/>
    </div>
</template>

<script>
    import Create from "./views/Create";
    import {getDate} from "./network";
    import Home from './views/Home'
    export default {
        name: 'App',
        components: {
            Create,
            Home
        },
        data(){
            return{
                allData:[]
            }
        },
        created() {
            this.getDate()
        },
        methods: {
            getDate() {
                getDate().then(res => {
                    console.log(res)
                    this.allData=res[0]
                    console.log('56788')
                })
            },
        }
    }
</script>

<style>

</style>
