import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    selectedOrgs: [],
    selectedJobTypes: [],
    selectedDegrees: [],
  };
};

export default state;
