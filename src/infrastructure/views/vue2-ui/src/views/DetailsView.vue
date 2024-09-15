<template lang="pug">
.details
  .col-9.mx-auto
    .details__container
        .details__container__actions.mb-5
          BackButton.mb-4.mb-0
        .details__container__info.d-flex.flex-column.flex-lg-row
          .details__container__info__flag.col-lg-6
            .col-12.col-lg-9.mb-5.mb-lg-0
              img(:src="details?.flag")
          .details__container__info__details
            .row
              .col-12.mb-4
                p.details__container__info__details__title {{ details?.name}}
            .row
              .col-lg-6
                p(v-if="details?.nativeName").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Native Name: 
                  | {{ details.nativeName}}
                p(v-if="details?.population").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Population: 
                  | {{ details.population}}
                p(v-if="details?.region").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Region: 
                  | {{ details.region}}
                p(v-if="details?.subregion").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Sub Region: 
                  | {{ details.subregion}}
                p(v-if="details?.capital").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Capital: 
                  | {{ details.capital}}
              .col-lg-6.mt-4.mt-lg-0
                p(v-if="details?.tld").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Top Level Domain: 
                  | {{ details.tld }}
                p(v-if="details?.currencies").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Currencies: 
                  | {{ details.currencies }} 
                p(v-if="details?.languages").mb-2.details__container__info__details__item.detail-page-items
                  span.bold Languages: 
                  | {{ details.languages}}
            .row.mt-4(v-if="details?.borders?.length > 0")
              p.bold.details__container__info__details__border-title.mb-2 Border Countries:
              .d-flex.flex-row.flex-wrap.gap-2.justify-content-center.justify-content-lg-center
                BorderCountries(
                  v-for="(item, index) in details.borders"
                  :key="`${item}-${index}`"
                  :name="item"
                )
  
</template>

<script lang="ts">
import Vue from "vue";
import BackButton from "../components/BackButton.vue";
import BorderCountries from "../components/BorderCountries.vue";
import { ICountryDetailed } from "../../../../../domain/models/country";
import { countryService } from "../../../../../domain/services/countryService";
import { countryRepositoryAxios } from "../../../../instances/countryRepositoryAxios";

interface IDetails {
  details: ICountryDetailed | null;
}

export default Vue.extend({
  name: "DetailsView",
  components: {
    BackButton,
    BorderCountries,
  },
  data(): IDetails {
    return {
      details: null,
    };
  },
  async mounted() {
    await this.fetchCountryDetails();
  },
  methods: {
    async fetchCountryDetails() {
      try {
        const countryDetails = await countryService(
          countryRepositoryAxios
        ).getCountryDetails(this.$route.params.code);
        this.details = countryDetails;
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.details {
  &__container {

    &__info {
      &__flag {
        img {
          width: 100%;
          height: auto;
        }
      }

      &__details {
        &__title {
          font-weight: 800;
          font-size: 30px;
        }

        
        &__border-title {
          font-size: 19px;
        }

        .bold {
          font-weight: 800;
        }
      }
    }
  }
}
</style>
