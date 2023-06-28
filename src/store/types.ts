import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  degrees: Degree[];
  selectedOrgs: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
