<template lang="pug">
  button(@click="goBack" :class="{'dark-mode-elements': getMode === 'dark'}")
    font-awesome-icon(:icon="['fas', 'arrow-left']").icon
    p Back
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  computed: {
    ...mapGetters(['getMode'])
  },
});
</script>

<style scoped lang="scss">
button {
  position: relative;
  width: 200px;
  height: 50px;
  background-color: $white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }

  .icon{
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translateY(-50%);
    font-size: 16px; 
  }
}
</style>