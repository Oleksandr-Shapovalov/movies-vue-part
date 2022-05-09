<template>
  <div id="app">
    <NotificationMovies />
    <LoaderMovie />
    <PosterBG :poster="posterBg" />
    <MovieHeader />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import NotificationMovies from "@/components/NotificationMovies";
import MoviesList from "@/components/MoviesList";
import PosterBG from "@/components/PosterBG";
import LoaderMovie from "@/components/LoaderMovie";
import MoviesPagination from "@/components/MoviesPagination";
import MovieHeader from "@/components/MovieHeader";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBG,
    MoviesPagination,
    LoaderMovie,
    MovieHeader,
    NotificationMovies,
  },
  data: () => ({
    posterBg: "",
  }),
  mounted() {
    //this.fetchMovies();
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.changeCurrentPage(page);
    },
  },
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "moviesPerPage",
      "currentPage",
      "moviesLength",
    ]),
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

.modal-content {
  .modal-body {
    background-color: #ac7fb873;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .modal-footer {
    background-color: #ac7fb873;
    border: none;
    .btn-secondary {
      box-shadow: none;
      border: none;
      background-color: #4b3552b0;
    }
    .btn-primary {
      box-shadow: none;
      border: none;
      background-color: #4d0a5f94;
    }
  }
}

.toast:not(.show) {
  display: block !important;
}
.toast-header {
  justify-content: space-between;
}
.close {
  line-height: 0;
  background: transparent;
  border: 0;
  font-size: 2rem;
  color: rgb(187, 177, 177);
}
</style>
