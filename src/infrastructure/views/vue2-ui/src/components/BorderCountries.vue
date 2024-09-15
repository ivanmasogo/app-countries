<template lang="pug">
  button(:class="{'dark-mode-elements': getMode === 'dark'}") {{ name}}
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'BorderCountries',
  props: {
    name: {
      type: String,
      required: true,
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
  width: 180px;
  height: 50px;
  background-color: $white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    cursor: default;
  }

}
</style>