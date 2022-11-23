import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  // FILTERED_JOBS_BY_ORGANIZATIONS,
  // FILTERED_JOBS_BY_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
} from "@/store/constants";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrgs = new Set();
    state.jobs.forEach((job) => uniqueOrgs.add(job.organization));
    return uniqueOrgs;
  },
  // [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
  //   if (state.selectedOrgs.length === 0) {
  //     return state.jobs;
  //   }

  //   return state.jobs.filter((job) =>
  //     state.selectedOrgs.includes(job.organization)
  //   );
  // },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  // [FILTERED_JOBS_BY_JOB_TYPES](state) {
  //   if (state.selectedJobTypes.length === 0) {
  //     return state.jobs;
  //   }

  //   return state.jobs.filter((job) =>
  //     state.selectedJobTypes.includes(job.jobType)
  //   );
  // },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrgs.length === 0) return true;
    return state.selectedOrgs.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  },
};

export default getters;
