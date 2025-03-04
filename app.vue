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

</style> 
