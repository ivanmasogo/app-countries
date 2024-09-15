<template lang="pug">
router-link(:to="{name: 'details', params: { code: countryDetails.cca3.toLowerCase() }}")
  .card(:class="{'dark-mode-elements': getMode === 'dark'}")
    .card__container
      .card__container__flag
          img(:src="countryDetails.flag")
      .card__container__info
        .card__container__info__title
          p {{countryDetails.name}}
        .card__container__info__description.homepage-items
          p 
            span.bold(v-if="countryDetails.population") Population: 
            |{{countryDetails.population}}
          p 
            span.bold(v-if="countryDetails.region") Region: 
            |{{countryDetails.region}}
          p 
            span.bold(v-if="countryDetails.capital") Capital: 
            |{{ countryDetails.capital }}
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue';
import { ICountryDetailed } from '../../../../../domain/models/country';
import { mapGetters } from 'vuex';

interface ICountryDetails {
  countryDetails: ICountryDetailed;
}

export default Vue.extend({
  name: 'CountryCard',
  
  props: {
    details: {
      type: Object as PropType<ICountryDetailed>,
      required: true
    }
  },
  data(): ICountryDetails {
    return {
      countryDetails: this.details
    }
  },
  computed: {
    ...mapGetters(['getMode'])
  },
});

</script>

<style scoped lang="scss">

.card {
  //width: 100%;
  width: 260px;
  aspect-ratio: 1/1.3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  &:hover{
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }
  
  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    &__flag {
      height: 55%;
      background-color: black;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;      
      }
    }

    &__info {
      padding: 16px; 
      height: 45%;

      &__title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      &__description {
        margin: 4px 0;

        .bold{
          font-weight: 800;
        }
      }
    }
  }
}

</style>