<template>
  <div class="flex flex-col items-center space-y-4">
    <h1 class="text-4xl text-white underline">Lista de Presentes</h1>

    <div class="flex flex-col md:flex-row w-full p-2 rounded">
      <div class="w-full md:w-1/3 bg-white p-4 rounded shadow mb-4 md:mb-0">
      <h2 class="text-2xl font-semibold mb-4">Resumo da Compra</h2>
      <div v-if="cart.length > 0">
        <div
        v-for="item in cart"
        :key="item.id"
        class="flex justify-between mb-2"
        >
        <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded mr-2" />
        <span>{{ item.name }} ({{ item.quantity }})</span>
        <span>{{ item.price }}</span>
        </div>
        <hr class="w-full border border-gray-200" />
        <div class="flex justify-between font-bold mt-4">
        <span>Total:</span>
        <span> R$ {{ cartTotal.replace('.', ',') }}</span>
        </div>
        <div>
        <p class="text-gray-600 text-center">Chave PIX</p>
        <img src="/assets/images/qrcode.png" @click="copyPaymentLink" alt="Chave PIX" class="w-46 h-46 mx-auto" />
        <button
          @click="copyPaymentLink"
          class="mt-4 px-4 py-2 bg-green-400 text-white rounded mx-auto block"
        >
          Copiar Link de Pagamento
        </button>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-600">Nenhum item no carrinho.</p>
      </div>
      </div>
      <div class="w-full md:w-2/3 bg-white p-4 rounded shadow ml-0 md:ml-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-4 rounded shadow"
        >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-cover rounded"
        />
        <h2 class="mt-2 text-xl font-semibold">{{ product.name }}</h2>
        <p class="mt-2 text-md font-bold">{{ product.price }}</p>
        <div class="flex items-center justify-center mt-2">
          <button
          @click="decreaseQuantity(product.id)"
          class="px-2 py-1 bg-gray-200 rounded"
          >
          -
          </button>
          <span class="mx-2">{{ product.quantity || 0 }}</span>
          <button
          @click="increaseQuantity(product.id)"
          class="px-2 py-1 bg-gray-200 rounded"
          >
          +
          </button>
        </div>
        </div>
      </div>
      </div>
    </div>

    <div class="flex space-x-4">
      <button
        @click="navigateTo('/')"
        class="mt-4 px-4 py-2 bg-purple-400 text-white rounded"
      >
        Voltar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const copyPaymentLink = () => {
  navigator.clipboard.writeText('00020101021126490014br.gov.bcb.pix0111103550089200212Cha da Venus5204000053039865802BR5924MATEUS CABRAL DOS SANTOS6009SAO PAULO622905251JNHXKYHEHHHMH5SZA63J75QS6304B82A');
  alert('Link de pagamento copiado para a área de transferência!');
};

const products = ref([
{
    id: 8,
    name: 'Kit de Higiene',
    price: 'R$ 10,00',
    image: 'https://m.media-amazon.com/images/I/51hrmug-VuL._AC_SL1200_.jpg',
    quantity: 0,
  },
  
  {
    id: 1,
    name: 'Pano de Boca',
    price: 'R$ 20,00',
    image: 'https://m.media-amazon.com/images/I/71yOmJIojUL._AC_SL1500_.jpg',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Body Manga Curta',
    price: 'R$ 40,00',
    image: 'https://m.media-amazon.com/images/I/71iSpjDkjwL._AC_SX679_.jpg',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Macacão',
    price: 'R$ 50,00',
    image: 'https://m.media-amazon.com/images/I/51QFq5NWDvL._AC_SX522_.jpg',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Toalha de Banho',
    price: 'R$ 60,00',
    image: 'https://m.media-amazon.com/images/I/51t0NbGpWmL._AC_SL1200_.jpg',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Fralda RN',
    price: 'R$ 80,00',
    image: 'https://m.media-amazon.com/images/I/61Obkq-J7EL._AC_SL1000_.jpg',
    quantity: 0,
  },
  {
    id: 6,
    name: 'Fralda P',
    price: 'R$ 100,00',
    image: 'https://m.media-amazon.com/images/I/61kvRgT3ORL._AC_SL1000_.jpg',
    quantity: 0,
  },
  {
    id: 7,
    name: 'Fralda M',
    price: 'R$ 150,00',
    image: 'https://m.media-amazon.com/images/I/61AC-uszfHL._AC_SL1000_.jpg', // Certifique-se de que a imagem está na pasta 'public/assets/imagens'
    quantity: 0,
  },

]);

const increaseQuantity = (productId: number) => {
  const product = products.value.find((p) => p.id === productId);
  if (product) {
    product.quantity++;
  }
};

const decreaseQuantity = (productId: number) => {
  const product = products.value.find((p) => p.id === productId);
  if (product && product.quantity > 0) {
    product.quantity--;
  }
};

const cart = computed(() => {
  return products.value.filter((p) => p.quantity > 0);
});

const cartTotal = computed(() => {
  return cart.value.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace('R$', '')) * item.quantity;
  }, 0).toFixed(2);
});

</script>

<style>
</style>
