<template lang="pug">
  .search-bar
    font-awesome-icon(:icon="['fas','magnifying-glass']").icon
    input(
      v-model="internalSearch",
      type="text"
      placeholder="Search for a country..."
      :class="{'dark-mode-elements': getMode === 'dark'}"
    )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchButton',
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      internalSearch: this.search 
    }
  },
  computed: {
    ...mapGetters(['getMode'])
  },
  watch: {
    search(newValue) {
      this.internalSearch = newValue;
    },
    internalSearch(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  width: 500px;
  height: 50px;
  .icon{
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #aaa;
    font-size: 16px; 
  }

  input{
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 12px 20px 12px 40px;

    &:focus{
      border: none;
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 

    }
  }
}


</style>