import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Some header",
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "Some mutation",
      ...props,
    },
  });

  it("renders unique list of values for filtering jobs", async () => {
    const props = {
      uniqueValues: new Set(["ValueA", "ValueB"]),
    };
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["ValueA", "ValueB"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Part-time"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const partTimeInput = wrapper.find("[data-test='Part-time']");
      await partTimeInput.setValue(true);

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Part-time"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const props = {
        uniqueValues: new Set(["Part-time"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const partTimeInput = wrapper.find("[data-test='Part-time']");
      await partTimeInput.setValue(true);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
