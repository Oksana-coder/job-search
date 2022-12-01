<template>
  <accordion-element header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrgs"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectOrganization"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
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

import { useUniqueOrganizations } from "@/store/composables";

import { ADD_SELECTED_ORGS } from "@/store/constants";

import AccordionElement from "@/components/Shared/AccordionElement.vue";

export default {
  name: "JobFiltersSidebarOrganisations",
  components: {
    AccordionElement,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrgs = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGS, selectedOrgs.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrgs, uniqueOrganizations, selectOrganization };
  },
  // data() {
  //   return {
  //     selectedOrgs: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_ORGANIZATIONS]), // does the same as two lines below
  //   // UNIQUE_ORGANIZATIONS() {
  //   //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
  //   // },
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGS]),
  //   selectOrganization() {
  //     this.ADD_SELECTED_ORGS(this.selectedOrgs);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
};
</script>
