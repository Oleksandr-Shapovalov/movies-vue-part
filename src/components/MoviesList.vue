<template>
  <BContainer>
    <h3 class="List-title">{{ listTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </BRow>
    <BModal
      body-class="movie-modal-body"
      :id="movieInfoModalId"
      size="xl"
      hide-footer
      hide-header
    >
      <MovieInfo :movie="selectedMovie" @closeModal="onCloseModal" />
    </BModal>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";
import MovieInfo from "./MovieInfo.vue";
export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfo,
  },
  data: () => ({
    movieInfoModalId: "movie-info",
    selectedMovieID: "",
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["isSerach"]),
    listTitle() {
      return this.isSerach ? "Search results" : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(`Delete ${title}?`);
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify(
          {
            msg: "Movie deleted successful",
            title: "Success",
            variant: "success",
          },
          { root: true }
        );
      }
    },
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onShowMovieInfo(id) {
      this.$bvModal.show(this.movieInfoModalId);
      this.selectedMovieID = id;
      console.log(id);
    },
    onCloseModal() {
      this.selectedMovieID = null;
      this.$bvModal.hide(this.movieInfoModalId);
    },
  },
};
</script>

<style lang="scss" scoped>
.List-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fafafa;
}
</style>
<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>
