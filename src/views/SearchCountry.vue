<template>
  <div class="searchCountry container">

    <Search @name-checked="checkName"/>

    <div class="country" v-for="country in countries" :key="country.alpha3Code">
      <router-link :to="{ name: 'country', params: { name: country.translations.fr }}"><p>{{ country.translations.fr }}</p></router-link>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Search from "../components/Search"

export default {
  name: "searchCountry",
  components: {
    Search
  },
  data() {
    return {
      countries: []
    }
  },
  methods: {
    checkName(payload) {
      axios
      .get(`https://restcountries.eu/rest/v2/name/${payload.name}`)
      .then(res => {
        console.log(res.data);
        this.countries = res.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
};
</script>
