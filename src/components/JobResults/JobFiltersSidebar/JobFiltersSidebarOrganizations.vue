<template>
  <accordion-element header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
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
import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_ORGS, UNIQUE_ORGANIZATIONS } from "@/store/constants";
import AccordionElement from "@/components/Shared/AccordionElement.vue";

export default {
  name: "JobFiltersSidebarOrganisations",
  components: {
    AccordionElement,
  },
  data() {
    return {
      selectedOrgs: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]), // does the same as lines 34-36
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGS(this.selectedOrgs);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
