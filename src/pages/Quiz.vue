<script setup>
  import ButtonAnswer from '@/components/ButtonAnswer.vue';
  import Heading from '@/components/Heading.vue';
  import data from '@/assets/data.yml'

  const props = defineProps({
    });

  const result = "";
  const currentQuestion = data.generic_questions[0];

  function handleAnswer(answer){
    alert(answer.value);
  }
</script>
<template>
    <template v-if="currentQuestion">
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
