<template>
  <div class="search-form-control mx-lg-5">
    <input class="form-control" v-model="keyword" type="text" name="search">
    <button @click.prevent="checkName" name="button" type="submit" class="btn btn-flat">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
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

<style>
.search-form-control {
  position: relative;
  margin: 30px auto;
}

.search-form-control .btn {
  position: absolute;
  top: 1px;
  bottom: 1px;
  right: 1px;
}

.search-form-control .form-control {
  height: 2,5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border: 1px solid #E7E7E7;
}

.search-form-control .form-control:focus {
  outline: none !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
</style>
