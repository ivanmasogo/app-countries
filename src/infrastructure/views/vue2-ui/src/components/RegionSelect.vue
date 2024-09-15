<template lang="pug">
.select-container
  select(
    v-model="internalRegion" 
    id="selectInput"
    :class="{'dark-mode-elements': getMode === 'dark'}"
  ) 
    option(value="" disabled hidden) Filter by region
    option(v-for="option in options" :key="option.value" :value="option.value")
      | {{ option.text }}

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RegionSelect',
  props: {
    region: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      options: [          
        { value: 'Africa', text: 'Africa' },
        { value: 'Americas', text: 'America' },
        { value: 'Asia', text: 'Asia' },
        { value: 'Europe', text: 'Europe' },
        { value: 'Oceania', text: 'Oceania' }
      ],
      internalRegion: this.region 
    };
  },
  computed: {
    ...mapGetters(['getMode'])
  },
  watch: {
    region(newValue) {
      this.internalRegion = newValue;
    },
    internalRegion(newValue) {
      this.$emit('input', newValue);
    }
  }
};

</script>

<style scoped lang="scss">
.select-container {
    width: 200px;
    height: 50px;
    select{
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border-radius: 8px;
    width: 100%;
    height: 100%;
    padding-left: 5px;
      &:focus{
        border: none;
        outline: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 

      }
  
    }
}
</style>

      