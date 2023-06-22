<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const{correctanswers,questionlength} = defineProps(['correctanswers', 'questionlength'])

</script>

<template>
    <div class="results">
        <p>your results</p>
        <h1>
               {{correctanswers}}/ {{ questionlength}} 
        </h1>

    </div>

    <router-link to="/"> go back </router-link>
</template>
<style scoped>

.results{
    text-align: center;
    padding: 100px o;
}
p{
    font-size: 25px;
}
h1{
    font-size: 80px;
}
</style>