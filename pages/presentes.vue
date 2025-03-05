<template>
   <div class="flex flex-col items-center space-y-4">

    <h1 class="text-4xl text-white underline">Lista de Presentes</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow">
        <img :src="product.image" alt="product.name" class="w-full h-48 object-cover rounded">
        <h2 class="mt-2 text-xl font-semibold">{{ product.name }}</h2>
        <p class="mt-1 text-gray-600">{{ product.description }}</p>
        <p class="mt-2 text-lg font-bold">{{ product.price }}</p>
        <div class="flex items-center mt-2">
          <button @click="decreaseQuantity(product.id)" class="px-2 py-1 bg-gray-200 rounded">-</button>
          <span class="mx-2">{{ product.quantity || 0 }}</span>
          <button @click="increaseQuantity(product.id)" class="px-2 py-1 bg-gray-200 rounded">+</button>
        </div>
      </div>
    </div>



    <div class="flex space-x-4">
      <button @click="openCart()" class="mt-4 px-4 py-2 bg-green-400 text-white rounded">Ver Carrinho</button>
      <button @click="navigateTo('/')" class="mt-4 px-4 py-2 bg-purple-400 text-white rounded">Voltar</button>
    </div>

  </div>


  

</template>

<script lang="ts" setup>

const showCart = ref(false);

const products = ref([
  {
    id: 1,
    name: 'Presente 1',
    description: 'Descrição do presente 1',
    price: 'R$ 100,00',
    image: 'https://placehold.co/300',
    quantity: 0
  },
  {
    id: 2,
    name: 'Presente 2',
    description: 'Descrição do presente 2',
    price: 'R$ 200,00',
    image: 'https://placehold.co/300',
    quantity: 0
  },
  {
    id: 3,
    name: 'Presente 3',
    description: 'Descrição do presente 3',
    price: 'R$ 300,00',
    image: 'https://placehold.co/300x300',
    quantity: 0
  }
])

const increaseQuantity = (productId: number) => {

  const product = products.value.find(p => p.id === productId);
  if (product) {
    product.quantity++;
  }
}

const decreaseQuantity = (productId: number) => {

  const product = products.value.find(p => p.id === productId);
  if(product && product.quantity > 0) {
    product.quantity--;
  }
}

const openCart = () => {
  const cart = products.value.filter(p => p.quantity > 0);
  console.log(cart);
}

</script>

<style>

</style>