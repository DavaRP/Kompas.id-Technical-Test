<template>
  <div class="container mx-auto">
    <div class="memos grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      <MemosItem v-for="(data, index) in memos" :key="index" :data="data" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MemosItem from "./MemosItem.vue";
export default {
  computed: {
    ...mapGetters({
      memos: "memos",
    }),
  },
  components: {
    MemosItem,
  },
};
</script>

<style></style>
