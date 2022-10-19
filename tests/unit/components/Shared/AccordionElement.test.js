import { mount } from "@vue/test-utils";
import AccordionElement from "@/components/Shared/AccordionElement.vue";

describe("AccordionElement", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      default: "<h3>My nested child</h3>",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<h3>My nested child</h3>",
    };
    const config = { slots };
    const wrapper = mount(AccordionElement, createConfig(config));
    expect(wrapper.text()).not.toMatch("My nested child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My nested child");
  });

  describe("when we do not provide custom child content", () => {
    it("renders default content", async () => {
      const slots = {};
      const config = { slots };
      const wrapper = mount(AccordionElement, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("You forgot to populate me!");
    });
  });
});
