<template>
  <div class="info col-12 col-md-3 col-lg-3">
    <h2>{{ name }}</h2>
    <h3 v-if="nativeName !== name">{{ nativeName }}</h3>
    <img :src="flag" :alt="name">
    <p>Capitale: {{ capital }}</p>
    <p>Population: {{ population }}</p>
    <p>Superficie: {{ area }} km²</p>
    <p>Monnaie: {{ currenciesName }} / {{ currenciesSymbol }}</p>
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',
  props: {
    name: String,
    nativeName: String,
    flag: String,
    capital: String,
    population: Number,
    area: Number,
    currenciesName: String,
    currenciesSymbol: String,
  }
}
</script>

<style lang="scss">
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
