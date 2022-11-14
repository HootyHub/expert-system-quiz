<script setup>
  import ButtonAnswer from '../components/ButtonAnswer.vue';
  import DescriptionBlock from '../components/DescriptionBlock.vue';
  import Heading from '../components/Heading.vue';
  import Logo from '../components/Logo.vue';

  const props = defineProps({
    });

  const result = "python";
</script>
<template>
    <Logo :logoName="result"/>
    <Heading :displayText="result"/>
    <DescriptionBlock :displayText="result + '_description'"/>
    <div class="min-h-full flex flex-col justify-center">
        <a href="/#/quiz" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
            <ButtonAnswer displayText="Restart"/>
        </a>
    </div>
</template>
