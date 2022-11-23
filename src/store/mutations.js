import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGS](state, organizations) {
    state.selectedOrgs = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
