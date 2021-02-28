<template>
  <div class="details">
    <div class="row">
      <div class="map col-12 col-md-3 col-lg-3">
      </div>

      <div class="col-12 col-md-3 col-lg-3">
        <h2>{{ country.translations.fr }}</h2>
        <h3 v-if="country.nativeName !== country.translations.fr">{{ country.nativeName }}</h3>
        <img :src="country.flag" :alt="country.translations.fr">
        <p>Capitale: {{ country.capital }}</p>
        <p>Population: {{ country.population }}</p>
        <p>Superficie: {{ country.area }} km²</p>
        <p>Monnaie: {{ country.currencies[0].name }} <span v-if="country.currencies[0].symbol">/</span> {{ country.currencies[0].symbol }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CountryDetails",
  data() {
    return {
      country: null,
      router: this.$route.params.countryCode,
    }
  },
  mounted() {
    this.checkName()
  },
  methods: {
    checkName() {
      axios
      .get(`https://restcountries.eu/rest/v2/alpha/${this.router}`)
      .then(res => {
        console.log(res.data);
        this.country = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
};
</script>

<style lang="scss">
  .row {
    align-items: center;
    height: 90vh;
  }

  .map {
    margin: auto 0;
    svg {
      max-height: 80vh;
    }
  }

  .details {
    text-align: left;
    margin: auto 0;
    img {
    width: 56px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    margin: 20px 0;
    }
  }

  .details h2 {
    font-size: 32px;
  }

  .details h3 {
    font-size: 24px;
  }
</style>
