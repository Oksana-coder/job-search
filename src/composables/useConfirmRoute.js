import { computed } from "vue";
import { useRoute } from "vue-router";

const useComfirmRoute = (routeName) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};

export default useComfirmRoute;
