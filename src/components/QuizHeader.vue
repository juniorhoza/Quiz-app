<script setup>

import { defineProps } from 'vue';

const {questionStatus,barPercent} = defineProps(['questionStatus','barPercent'])
</script>

<template>
    <div>
        <header>
        <h4>question {{questionStatus}}</h4>
        <div class="bar">
            <div class="completion" :style="{
                width:barPercent
            }">

            </div>
        </div>
        
       </header>
    </div>
</template>
<style scoped>

header{
    margin-top: 20px;

}
header h4{
    font-size: 30px;
}

header .bar{
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}
header .completion{
    height: 100%;
    width: 0%;
    background-color: bisque;
}
</style>