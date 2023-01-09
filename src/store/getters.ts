import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  // FILTERED_JOBS_BY_ORGANIZATIONS,
  // FILTERED_JOBS_BY_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrgs = new Set<string>();
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
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
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
  [INCLUDE_JOB_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrgs.length === 0) return true;
    return state.selectedOrgs.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  },
};

export default getters;
