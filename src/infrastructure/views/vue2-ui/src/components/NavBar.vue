<template lang="pug">
.navbar
  .col-9.mx-auto
    .navbar__container.d-flex.flex-row.justify-content-between.align-items-center.my-2.my-lg-4
      router-link(:to="{name: 'home'}").navbar__container__question.my-auto Where in the world?
      .navbar__container__button.d-flex.flex-row.gap-2.gap-lg-3.align-items-center(@click="changeMode")
        font-awesome-icon(:icon=" getMode && getMode === 'light' ? ['far','moon'] : ['far','sun']").icon
        P {{  getMode && getMode === 'light' ? 'Dark' : 'Light'}} Mode
</template>
  
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'NavBar',

  computed: {
    ...mapGetters(['getMode'])
  },

  methods: {
    ...mapActions(['toggleMode']),
    changeMode() {
      const newMode = this.getMode === 'light' ? 'dark' : 'light';
      this.toggleMode(newMode);
    }
  }
});
</script>

<style scoped lang="scss">

.navbar{

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  &__container{
    min-height: 50px;

    &__question {
      font-size: 16px;
      font-weight: 800;
    }

    &__button {
      font-size: 14px;
      user-select: none;
      cursor: pointer;
      .icon {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width:$breakpoint-lg) {
    &__container{
      &__question {
        font-size: 22px;
      }

      &__button {
        font-size: 18px;
        
        .icon {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
    