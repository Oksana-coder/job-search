<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFilteredJobs } from "@/store/composables";
import useConfirmRoute from "@/composables/useConfirmRoute";

// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";

export default defineComponent({
  name: "SubNav",
  setup() {
    const FILTERED_JOBS = useFilteredJobs();
    const onJobResultsPage = useConfirmRoute("JobResults");
    return { onJobResultsPage, FILTERED_JOBS };
  },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },
  // },
});
</script>
