<template>
  <div class="search-form-control">
    <input class="form-control" v-model="keyword" type="text" name="search">
    <button @click.prevent="checkName" name="button" type="submit" class="btn btn-flat">
      <i class="bi bi-search">Search</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyword: ""
    }
  },
  methods: {
    checkName() {
      this.$emit("name-checked", {
        name: this.keyword,
      })
    }
  }
}
</script>
