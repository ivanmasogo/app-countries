import Vue from 'vue';
import Vuex from 'vuex';
import { ICountryBasic } from '../../../../../domain/models/country';
import { countryService } from '../../../../../domain/services/countryService';
import { countryRepositoryAxios } from '../../../../instances/countryRepositoryAxios';

Vue.use(Vuex);

type Mode = 'light' | 'dark';
interface State {
  countries: ICountryBasic[];
  mode: Mode
}

const state: State = {
  countries: [],
  mode: 'light'
};

const getters = {
  getCountries: (state: State) => state.countries,
  getFilteredCountries: (state: State) => (region = '', search = '') => {
    let filteredCountries = state.countries;
  
    if (region !== '') {
      filteredCountries = filteredCountries.filter(country => country.region === region);
    }
      if (search !== '') {
      const searchLower = search.toLowerCase();
      filteredCountries = filteredCountries.filter(country =>
        country.name.toLowerCase().includes(searchLower)
      );
    }
  
    return filteredCountries;
  },
  getMode: (state: State) => state.mode,

};

const mutations = {
  SET_COUNTRIES(state: State, countries: ICountryBasic[]) {
    state.countries = countries;
  },
  TOGGLE_MODE(state: State, newMode: Mode) {
    state.mode = newMode;
    if(newMode ==='light') {
      document.body.classList.remove('dark-mode');

    }else{
      document.body.classList.add('dark-mode');
    }
  }
};

interface ActionContext {
  commit: (mutation: string, payload?: any) => void;
  dispatch: (action: string, payload?: any) => Promise<any>;
}

const actions = {
  async fetchCountries({ commit }: { commit: ActionContext['commit'] }) {
    try{
      const countryList = await countryService(countryRepositoryAxios).getCountries();
      commit('SET_COUNTRIES', countryList);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  },
  toggleMode({ commit }: { commit: ActionContext['commit'] }, mode: Mode) {
    commit('TOGGLE_MODE', mode);
  }

};

export default new Vuex.Store<State>({
  state,
  getters,
  mutations,
  actions,
});

