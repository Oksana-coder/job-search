<template>
  <accordion-element header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label :for="jobType" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion-element>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import AccordionElement from "@/components/Shared/AccordionElement.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    AccordionElement,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };
    return { selectedJobTypes, uniqueJobTypes, selectJobType };
  },
  // data() {
  //   return {
  //     selectedJobTypes: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_JOB_TYPES]), // does the same as two lines below
  //   // UNIQUE_ORGANIZATIONS() {
  //   //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
  //   // },
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  //   selectJobType() {
  //     this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
};
</script>
