import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HeadlineComponent from "@/components/JobSearch/HeadlineComponent.vue";

describe("HeadlineComponent", () => {
  // beforeEach(() => {
  //   jest.useFakeTimers("legacy");
  // });

  // afterEach(() => {
  //   jest.useRealTimers();
  // });

  it("displays introductory action verb", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(HeadlineComponent);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(HeadlineComponent);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(HeadlineComponent);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(HeadlineComponent);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
