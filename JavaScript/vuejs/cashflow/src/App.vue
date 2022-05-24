<template>
<!-- Con el coomponente suspense podemos cargar de manera asíncrona el componente home y mientras
esta transición se da, se muestra el componente splash screen -->
  <suspense>
    <template #default>
      <home></home>
    </template>
    <template #fallback>
      <splash-screen></splash-screen>
    </template>
  </suspense>
</template>

<script setup>
import SplashScreen from './components/SplashScreen.vue';
import { defineAsyncComponent } from 'vue';

const home = defineAsyncComponent(()=>
  new Promise((resolve)=>{
    setTimeout(() => {
        resolve(import('@/components/Home.vue'))
      },
      2500);
  }));
</script>
<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
</style>