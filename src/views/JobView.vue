<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",
  // COMPOSITION API:
  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;

    return { currentJobId };
  },

  // OPTIONS API:
  // computed: {
  //   currentJobId() {
  //     console.log(this.$route);
  //     return this.$route.params.id;
  //   },
  // },
});
</script>
