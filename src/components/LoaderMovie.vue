<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <b-spinner
      style="width: 5rem; height: 5rem"
      type="grow"
      variant="light"
    ></b-spinner>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LoaderMovie",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>
<style lang="scss" scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
</style>
