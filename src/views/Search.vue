<template>
  <div id="search">

    <Search @name-checked="checkName"/>

    <div class="country" v-for="country in countries" :key="country.alpha3Code">
      <p>{{ country.translations.fr }}</p>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Search from "../components/Search"

export default {
  name: "search",
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

<style>
.search-form-control {
  position: relative;
  width: 250px;
}

.search-form-control .btn {
  position: absolute;
  top: 1px;
  bottom: 1px;
  right: 1px;
}

.search-form-control .form-control {
  height: 2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border: 1px solid #E7E7E7;
}

.search-form-control .form-control:focus {
  outline: none !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
</style>
