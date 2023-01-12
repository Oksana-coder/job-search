import { computed } from "vue";
import { useRoute } from "vue-router";

const useComfirmRoute = (routeName: string) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};

export default useComfirmRoute;
