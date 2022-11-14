<script setup>
  import ButtonAnswer from './components/ButtonAnswer.vue';
  import DescriptionBlock from './components/DescriptionBlock.vue';
  import Heading from './components/Heading.vue';
  import Logo from './components/Logo.vue';
  import data from './assets/data.yml'

  const props = defineProps({
    });

  const result = "";
  const currentQuestion = data.generic_questions[0];

  function handleAnswer(answer){
    alert(answer.value);
  }
</script>
<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <section v-if="!result">
        <Heading :displayText="currentQuestion.question"/>
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <template v-for="answer in currentQuestion.answers">
              <ButtonAnswer :displayText="answer.value" @click="handleAnswer(answer)"/>
            </template>
          </div>
        </div>
      </section>
      <section v-else>
        <Logo logoName="result"/>
        <Heading displayText="Python"/>
        <DescriptionBlock displayText="Lorem ipsum"/>
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Restart"/>
          </div>
        </div>
        {{ data }}
      </section>
    </div>
  </div>
</template>
