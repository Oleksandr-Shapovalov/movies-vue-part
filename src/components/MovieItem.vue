<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBG"></div>
    <div
      class="movie-item-info-wrap d-flex flex-column justify-content-between"
    >
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col pr-2">
          <BButton
            size="md"
            block
            class="block"
            variant="outline-light"
            @click="showInfoModalEvent"
            >Info</BButton
          >
        </div>
        <div class="col pl-2">
          <BButton
            size="md"
            block
            class="block"
            variant="outline-light"
            @click="emitRemoveIvent"
            >Remove</BButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBG() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveIvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>
<style lang="scss" scoped>
.block {
  display: block;
  width: 100%;
}
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  height: 400px;
  &:hover {
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
    transform: scale(1.02);
    .movie-item-info-wrap {
      opacity: 1;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  &-poster {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  &-info-wrap {
    position: relative;
    z-index: 3;
    padding: 20px 10px;
    height: 100%;
    opacity: 0;
    transition: all 0.2s ease;
    .movie-title {
      font-size: 24px;
      color: #fff;
    }
    .movie-year {
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>
