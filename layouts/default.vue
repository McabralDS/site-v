  <script setup lang="ts">
    // import '~/assets/theseasons-bd.otf'
  
  </script>

<template>
<div class="w-screen h-screen flex  justify-center  bg-gradient-to-b from-white to-violet-400 p-4">
  <span>
    <h1 class="text-indigo-800 text-6xl">Chá da Venus</h1>
  </span>
  <Slot/>

  

</div>
</template>


<style scoped>

h1 {
  font-family: 'Theseasons';
  /* color: #ffe7a9; */
}



</style>