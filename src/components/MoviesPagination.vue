<template>
  <!-- eslint-disable -->
  <div class="movies-pagination d-flex">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
  <!-- eslint-disable -->
</template>
<script>
export default {
  name: "MoviesPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: { type: Number, default: 1 },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("pageChanged", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.movies-pagination {
  justify-content: center;
  margin-top: auto;
  &::v-deep .pagination .page-item.active .page-link {
    border-color: #fafafa;
    background: #fafafa;
    color: rgb(5, 3, 27);
  }
  &::v-deep .pagination .page-item.disabled .page-link {
    color: rgb(137, 136, 145);
    border-color: rgb(137, 136, 145);
  }
  &::v-deep .pagination .page-item .page-link {
    transition: all 0.15s ease-in;
    background: transparent;
    font-size: 16px;
    color: #fafafa;
    box-shadow: none;
  }
}
</style>
