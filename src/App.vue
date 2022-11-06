<script setup>

const question = {
  name: "Czy lubisz koty?",
  options: ["Tak", "Nie"],
}

</script>
<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-tr from-rose-200 via-cyan-200 to-fuchsia-200"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <div class="">
        <div
          class="rounded-2xl font-semibold bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 text-lg md:text-2xl p-5 flex items-center justify-center md:p-6 mb-3"
        >
          {{ question.name }}
        </div>
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
            <button
                v-for="option in question.options"
              class="w-full rounded-2xl bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 p-4 transition md:text-2xl md:p-6"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
