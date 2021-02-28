<template>
  <div class="country container">
    <CountryDetails></CountryDetails>
  </div>
</template>

<script>
import CountryDetails from "../components/CountryDetails";

export default {
  name: 'country',
  components: {
    CountryDetails
  },
}
</script>
