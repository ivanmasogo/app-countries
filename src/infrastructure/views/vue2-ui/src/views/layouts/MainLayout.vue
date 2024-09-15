<template lang="pug">
div
  header
    NavBar
  main.my-5
    router-view 
</template>

<script lang="ts">
import NavBar from '../../components/NavBar.vue';

export default {
  name: 'MainLayout',
  components: {
    NavBar
  }
};

</script>
  