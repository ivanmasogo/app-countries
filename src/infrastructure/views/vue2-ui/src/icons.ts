import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importa faArrowLeft

library.add(faMoon, faSun, faMagnifyingGlass, faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);
