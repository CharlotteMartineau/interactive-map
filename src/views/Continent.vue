<template>
  <div class="continent container">
    <div class="row">

      <div class="map col-12 col-md-9 col-lg-9">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1104.08 729.84">
          <title> {{ currentRouteName }} </title>
            <g v-for="country in countries" :key="country.id" :id="country.id" @click="getCountry($event)" v-html="country.svg"></g>
          </svg>
      </div>

      <CountryInfo :data="countryInfo"/>

    </div>
  </div>
</template>

<script>
import CountryInfo from "../components/CountryInfo"
import countryData from "../utils/data/country"
import countryAction from "../utils/actions/country"

export default {
  name: "Continent",
  components: {
    CountryInfo
  },
  data() {
    return {
      countryInfo: {}
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    countries() {
      return countryData[this.currentRouteName];
    }
  },
  methods: {
    async getCountry(event) {
      this.countryInfo = await countryAction.getInfo(event)
    }
  }
};
</script>

<style>
  g {
    opacity: 1;
  }

  g:hover {
    opacity: 0.8;
  }

  .row {
    align-items: center;
    height: 90vh;
  }

  .map {
  margin: auto 0;
  }

  .cls-1{fill:#f28952;}
  .cls-2{fill:#ffb74e;}
  .cls-3{fill:#41a799;}
  .cls-4{fill:#e57373;}
  .cls-5{fill:#82c683;}
  .cls-6{fill:#7986cc;}
  .cls-7{fill:#dce777;}
  .cls-8{fill:#fa8650;}
  .cls-9{fill:#42a49a;}
  .cls-10{fill:#f46f71;}
  .cls-11{fill:#f59051;}
  .cls-12{fill:#3ea99a;}
  .cls-13{fill:#e67373;}
  .cls-14{fill:#dce776;}
  .cls-15{fill:#4fc2f8;}
  .cls-16{fill:#7984d4;}
  .cls-17{fill:#dde775;}
  .cls-18{fill:#dce775;}
  .cls-19{fill:#85c580;}
</style>
