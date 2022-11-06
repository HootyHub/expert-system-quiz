<script setup>
  import Button from './components/Button.vue';
  import ButtonAnswer from './components/ButtonAnswer.vue';
  import Heading from './components/Heading.vue';
</script>
<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <section v-if="false">
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
        <Heading displayText="Python"/>
        Debug text
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
            <Button displayText="Przeprowadź quiz od nowa"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
