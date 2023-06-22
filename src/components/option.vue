<script setup>
import { defineProps,defineEmits } from 'vue';

const {option} = defineProps (['option'])
const emit= defineEmits(['selectOpionEmit'])


const EmitSelectedOption = (isCorrect)=> {
    emit('selectOpionEmit',isCorrect)
}
</script>

<template>
    <div>
        <div class="option" @click="EmitSelectedOption(option.isCorrect)">
                <p class="option-label">{{ option.label }} </p>
                <div class="option-value">{{option.text}}</div>
            </div>
    </div>
</template>
<style scoped>

.option{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}
.option-label{
    background-color: bisque;
    width: 60px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.option-value{
    background: rgb(224, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;

}
</style>