<script setup lang="ts">
import Footer from '@/components/layout/FooterComponent.vue';
import Header from '@/components/layout/HeaderComponent.vue';
</script>

<template>
  <Header></Header>
  <main>
    <TheWelcome />
    <h1>Portafolio</h1>


  </main>
  <Footer></Footer>
</template>

<script lang="ts">

export default {
  name: 'HomeView',

}
</script>