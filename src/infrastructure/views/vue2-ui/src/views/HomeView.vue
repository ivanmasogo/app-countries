<template lang="pug">
.home
  .col-9.mx-auto
    .home__container
      .home__container__actions.d-flex.flex-row.justify-content-between.mb-5.flex-wrap
        SearchButton.mb-4.mb-0(v-model="search")
        RegionSelect(v-model="region")

      .home__container__list.d-flex.justify-content-center.justify-content-xl-start.gap-4.flex-wrap
        CountryCard(v-for="item in getFilteredCountries(region,search)" :key="item.cca3" :details="item")

</template>

<script lang="ts">
import Vue from 'vue';
import SearchButton from '../components/SearchButton.vue';
import RegionSelect from '../components/RegionSelect.vue';
import CountryCard from '../components/CountryCard.vue';
import { mapActions, mapGetters} from 'vuex';

export default Vue.extend({
  name: 'HomeView',
  components: {
    SearchButton,
    RegionSelect,
    CountryCard
  },
  data(){
    return {
      region:'',
      search: ''
    }
  },
  methods: {
    ...mapActions(['fetchCountries']),
  },
  computed:{
    ...mapGetters(['getFilteredCountries'])
  },
  created() {
    this.fetchCountries();
  }

});
</script>

