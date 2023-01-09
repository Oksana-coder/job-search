import { Job } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrgs: string[];
  selectedJobTypes: string[];
}
