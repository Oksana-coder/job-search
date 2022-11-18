import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
} from "@/store/constants";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrgs = new Set();
    state.jobs.forEach((job) => uniqueOrgs.add(job.organization));
    return uniqueOrgs;
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrgs.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedOrgs.includes(job.organization)
    );
  },
};

export default getters;
