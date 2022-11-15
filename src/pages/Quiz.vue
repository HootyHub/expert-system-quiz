<script setup>
  import { onMounted, ref } from "vue";
  import ButtonAnswer from '@/components/ButtonAnswer.vue';
  import Heading from '@/components/Heading.vue';
  import data from '@/assets/data.yml'

  const props = defineProps({
    });

  const loading = ref(true);
  const currentQuestion = ref(null);

  const genericQuestions = data.generic_questions;
  const categories = ref(null);

  function getQuestion(){
    loading.value = true;
    setTimeout(function() {
      if(genericQuestions.length > 0 ){
        var index = Math.floor(Math.random() * genericQuestions.length);
        currentQuestion.value = genericQuestions[index];
        genericQuestions.splice(index, 1); 
        loading.value = false;
      }
      else{
        var bestCategory = Object.keys(categories.value).reduce(function(a, b){ return categories.value[a].score > categories.value[b].score ? a : b });
        if(categories.value[bestCategory].questions.length <= 0){
          alert("Best: " + bestCategory);
          return;
        }
        var index = Math.floor(Math.random() * categories.value[bestCategory].questions.length);
        currentQuestion.value = categories.value[bestCategory].questions[index];
        for (var key in currentQuestion.value.answers) {
          // Simplify me :(
          if(currentQuestion.value.answers[key].result === "positive"){
            currentQuestion.value.answers[key].result = {};
            currentQuestion.value.answers[key].result.positive = [bestCategory];
          }
          if(currentQuestion.value.answers[key].result === "negative"){
            currentQuestion.value.answers[key].result = {};
            currentQuestion.value.answers[key].result.negative = [bestCategory];
          }
          if(currentQuestion.value.answers[key].result === "neutral"){
            currentQuestion.value.answers[key].result = {};
            currentQuestion.value.answers[key].result.neutral = [bestCategory];
          }
        }
        categories.value[bestCategory].questions.splice(index, 1); 
        loading.value = false;
      }
    }, 500);
  }

  function loadCategories(){
    categories.value = data.categories;
    for (var key in categories.value) {
        categories.value[key].score = 100;
    }
  }

  function beginQuiz(){
    loadCategories();
    getQuestion();
  }

  function score(answer){
    if(answer.result.positive){
        for (var key in answer.result.positive) {
            categories.value[answer.result.positive[key]].score += 1;
        }
    }
    if(answer.result.negative){
        for (var key in answer.result.negative) {
            categories.value[answer.result.negative[key]].score -= 2;
        }
    }
    if(answer.result.neutral){
        for (var key in answer.result.neutral) {
            categories.value[answer.result.neutral[key]].score += 0;
        }
    }
  }

  function handleAnswer(answer){
    getQuestion();
    score(answer);
  }

  onMounted(() => {
    beginQuiz();
});
</script>
<template>
    <template v-if="!loading && currentQuestion">
        <Heading :displayText="currentQuestion.query"/>
          <div class="min-h-full flex flex-col justify-center">
            <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
              <template v-for="answer in currentQuestion.answers">
                <ButtonAnswer :displayText="answer.value" @click="handleAnswer(answer)"/>
              </template>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center justify-center">
            <div class="spinner-border animate-spin inline-block w-20 h-20 border-8 rounded-full text-red-300" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </template> 
</template>
