<template>
  <div class="page-container">
    <h1 class="text-4xl text-white text-center font-bold mb-12">Informações</h1>
    <div class="container mx-auto py-12 px-4 mt-12">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">

        <div v-for="info in infos" :key="info.nome" class="bg-white p-6 rounded-lg shadow-md border-4 border-amber-300">
          <h2 class="text-2xl font-bold mb-4">{{ info.nome }}</h2>
          <div v-if="info.link">
            <Icon name="mdi:map-marker" class="mr-2 text-red-500" />
            <a :href="info.link" target="_blank" class="text-blue-500 hover:underline">{{ info.descricao }}</a>
          </div>
          <div v-else-if="Array.isArray(info.descricao)">
            <ul>
              <li v-for="item in info.descricao" :key="item" class="text-gray-700">{{ item }}</li>
            </ul>
          </div>
          <p v-else class="text-gray-700">{{ info.descricao }}</p>
        </div>

      </div>

      <div class="flex justify-center mt-12">
        <button 
          @click="() => navigateTo('/')" 
          class="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors flex items-center"
        >
          <Icon name="mdi:arrow-left" class="mr-2" />
          Voltar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const infos = [
  {
    nome: 'Local',
    descricao: 'Rua Dr. Pedro Zimmermann, 5026, Salão de Festas Torre A - Itoupava Central, Blumenau - SC',
    link: 'https://www.google.com/maps/place/Cetil+Park+Residence/data=!4m2!3m1!1s0x0:0x11bae8a3422c2013?sa=X&ved=1t:2428&ictx=111'
  },
  {
    nome: 'Data',
    descricao: 'Sábado, 22 de Março de 2025',
  },
  {
    nome: 'Horário',
    descricao: 'Das 12h às 16h',
  },
  {
    nome: 'Cardápio',
    descricao: ['Rodízio de Mini Hamburguers', 'Batata Frita', 'Docinhos', 'Cerveja', 'Soft Drinks'],
  },
  
]
</script>

<style>

</style>