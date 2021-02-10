<template>
  <div class="info col-12 col-md-3 col-lg-3">
    <h2>{{ data.name }}</h2>
    <h2 v-if="!data.name">Choisis un pays sur la carte !</h2>
    <h3 v-if="data.nativeName !== data.name">{{ data.nativeName }}</h3>
    <img :src="data.flag" :alt="data.name">
    <p>Capitale: {{ data.capital }}</p>
    <p>Population: {{ data.population }}</p>
    <p>Superficie: {{ data.area }} km²</p>
    <p>Monnaie: {{ data.currenciesName }} <span v-if="data.currenciesSymbol">/</span> {{ data.currenciesSymbol }}</p>
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',
  props: {
    data: Object,
  }
}
</script>

<style>
  .info {
    text-align: left;
    margin: auto 0;
    img {
    width: 56px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    margin: 20px 0;
    }
  }

  .info h2 {
    font-size: 32px;
  }

  .info h3 {
    font-size: 24px;
  }
</style>
