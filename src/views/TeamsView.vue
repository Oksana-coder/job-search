<template>
  <header-container>
    <template #title>
      <h1 class="m-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here. Why don't you come join us?
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
