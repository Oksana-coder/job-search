import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]);
      expect(state).toEqual({ jobs: ["Job 1", "Job 2"] });
    });
  });

  describe("ADD_SELECTED_ORGS", () => {
    it("updates organizations that the user has chosen to filter jibs by", () => {
      const state = { selectedOrgs: [] };
      mutations.ADD_SELECTED_ORGS(state, ["Org1", "Org2"]);
      expect(state).toEqual({ selectedOrgs: ["Org1", "Org2"] });
    });
  });
});
