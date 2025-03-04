<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style setup>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  font-family: 'Theseasons', sans-serif;
  background: linear-gradient(to bottom, #8b5cf6, white);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  padding-left: 1.5em;
}

li::before {
  content: "★";
  color: #e4b417;
  display: inline-block;
  position: absolute;
  left: 0;
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
