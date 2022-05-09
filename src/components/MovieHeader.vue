<template>
  <header class="header">
    <BNavbar type="dark" variant="dark" class="navbar">
      <BContainer>
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <b-nav-form>
          <b-form-input
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="searchValue"
            debounce="500"
          ></b-form-input>
        </b-nav-form>
      </BContainer>
    </BNavbar>
  </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "MovieHeader",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "onSearchValueChange",
  },
  methods: {
    ...mapActions("movies", [
      "searchMovies",
      "fetchMovies",
      "toggleSearchState",
    ]),
    onSearchValueChange(value) {
      if (value) {
        this.searchMovies(value);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  margin-bottom: 30px;
}
.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.search-input {
  color: #ebe6e6;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in;
  &:focus {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 0, 0, 0.6);
  }
}

li {
  list-style: none;
}
</style>
