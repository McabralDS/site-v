<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style setup>

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Theseasons';
  background: linear-gradient(to bottom, #8b5cf6, white );
  background-repeat: no-repeat;
}

li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li::before {
    content: "★";
    color: #e4b417;
    display: inline-block;
    width: 1em;
    /* margin-left: -1em; */
}

/* Estilizando a barra de rolagem */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #9f7cf1;
}

::-webkit-scrollbar-thumb {
  background-color: #8b5cf6;
  border-radius: 10px;
  border: 2px solid transparent;
}

</style> 
