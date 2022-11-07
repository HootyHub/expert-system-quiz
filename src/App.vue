<script setup>
  import ButtonAnswer from './components/ButtonAnswer.vue';
  import DescriptionBlock from './components/DescriptionBlock.vue';
  import Heading from './components/Heading.vue';
  import Logo from './components/Logo.vue';

  const props = defineProps({
    });

  const result = "python";
</script>
<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <section v-if="!result">
        <Heading displayText="Czy lubisz koty?"/>
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Tak"/>
            <ButtonAnswer displayText="Nie"/>
            <ButtonAnswer displayText="Nie wiem"/>
          </div>
        </div>
      </section>
      <section v-else>
        <Logo logoName="python"/>
        <Heading displayText="Python"/>
        <DescriptionBlock displayText="Lorem ipsum"/>
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Restart"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
