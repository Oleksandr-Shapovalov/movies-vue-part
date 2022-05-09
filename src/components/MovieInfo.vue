<template>
  <!-- eslint-disable -->
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-info-header-title">Movie view</h6>
      <BIconX class="movie-info-header-icon" @click="closeModal" />
    </header>
    <div class="movie-info-content">
      <BRow>
        <BCol sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <b-form-rating
            class="movie-rating"
            v-model="movie.imdbRating"
            readonly
            show-value
            precision="1"
            stars="10"
            show-value-max
            no-border
          />
          <p class="movie-description">
            {{ movie.Plot }}
          </p>
          <div class="mt-3 mt-4 badges">
            <div class="mr-2 badge">{{ movie.Year }}</div>
            <div class="mr-2 badge">{{ movie.Runtime }}</div>
            <div class="mr-2 badge">{{ movie.Genre }}</div>
            <div class="mr-2 badge">{{ movie.Language }}</div>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movie.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movie.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </BCol>
      </BRow>
    </div>
  </div>
  <!-- eslint-disable -->
</template>
<script>
export default {
  name: "MovieInfo",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  data: () => ({
    defaultPosterBG: `linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)`,
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBG,
      };
    },
    posterBG() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBG;
    },
  },
};
</script>
<style lang="scss" scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
  color: rgb(223, 206, 206);
  &-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
  }
  &-icon {
    font-size: 2rem;
    cursor: pointer;
  }
}
.movie-info-content {
  padding: 1rem;
  background-color: #fff;
  .movie-poster-wrap {
    position: relative;
    padding-bottom: 150%;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.2s ease;
    .movie-poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
  }
  .movie-title {
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: 300;
  }
  .movie-rating {
    padding: 0;
    &::v-deep .b-rating-star,
    &::v-deep .b-rating-value {
      justify-content: flex-start;
      flex-grow: 0 !important;
      font-size: 1.3rem;
      font-weight: 300;
      padding: 0;
    }
    &::v-deep .b-rating-star + .b-rating-star {
      margin-left: 4px;
    }
    &::v-deep .b-rating-value {
      margin-left: 10px;
    }
    &::v-deep .b-rating-star .b-rating-icon {
      color: #ffc107;
    }
    &:focus {
      box-shadow: none;
    }
  }
  .movie-description {
    font-size: 1.25rem;
    font-weight: 300;
  }
  .badges {
    .badge {
      background: rgb(15, 153, 15);
      color: aliceblue;
      font-size: 14px;
      font-weight: 600;
      border-radius: 500px;
      padding: 0 0.75rem;
      line-height: 1.5;
      flex-wrap: wrap;
    }
    .badge + .badge {
      margin-left: 15px;
    }
  }
  .table {
    font-size: 1rem;
  }
}
</style>
