<script setup>
import { useRoute } from 'vue-router';
import { ref, watch,computed } from 'vue';
import q from "../assets/data/quizes.json"
import results from "../components/results.vue"
import QuizHeader from '../components/QuizHeader.vue';
import Question from '../components/Question.vue';
const params= useRoute().params

const quest= q.find(p => p.id===parseInt(params.id))
const currentQuestionIndex = ref(0);

// const questionStatus = ref(`${currentQuestionIndex.value}/${quest.questions.length}`)  

// watch(()=> {currentQuestionIndex.value,()=>{
//     questionStatus.value = `${currentQuestionIndex.value}/${quest.questions.length}`
// }
// })

const questionStatus = computed(()=>{
    return `${currentQuestionIndex.value}/${quest.questions.length}`
})
const barPercentage = computed( ()=> {
    return `${(currentQuestionIndex.value/quest.questions.length)*100}%`
})
const numberOfCorrectAnswers = ref(0)
const showResults = ref(false)

const onOptionSelected= (isCorrect)=>{
        if(isCorrect){
            numberOfCorrectAnswers.value++
        }
        if(quest.questions.length-1 == currentQuestionIndex.value){
            showResults.value=true
        }
        currentQuestionIndex.value++ 
    }


</script>

<template>
    <div>
        <QuizHeader
        :questionStatus = " questionStatus"
        :barPercent="barPercentage"
        />
       <div class="">
       <Question 
       v-if="!showResults"
       :question="quest.questions[currentQuestionIndex]"
       @selectOpionEmit="onOptionSelected"
       /> 
       <results 
       :correctanswers="numberOfCorrectAnswers"
       :questionlength = "quest.questions.length"
       v-else
       />
       </div>
    </div>
</template>

<style scoped>




</style>