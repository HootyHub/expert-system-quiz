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
        var index = Math.floor(Math.random() * genericQuestions.length);
        currentQuestion.value = genericQuestions[index];
        genericQuestions.splice(index, 1); 
        loading.value = false;
    }, 500);
  }

  function loadCategories(){
    categories.value = data.categories.map(item => {
        for (var key in item) {
            item[key].score = 100;
        }
        return item;
    });
  }

  function beginQuiz(){
    loadCategories();
    getQuestion();
  }

  function score(answer){
    if(answer.result){
        alert("dupa");
        answer.result.positive.array.forEach(element => {
            alert(element);
        });
    }
    if(answer.result.negative){

    }
    if(answer.result.neutral){

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
        <Heading :displayText="currentQuestion.question"/>
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
