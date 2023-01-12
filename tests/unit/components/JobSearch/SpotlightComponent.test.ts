import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");
import SpotlightComponent from "@/components/JobSearch/SpotlightComponent.vue";

const axiosGetMock = axios.get as jest.Mock;

describe("SpotlightComponent", () => {
  const mockSpotlightComponentResponse = (data = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...data,
        },
      ],
    });
  };

  it("provides img attribute to parent component", async () => {
    const data = { img: "Some image" };
    mockSpotlightComponentResponse({ data });
    const wrapper = mount(SpotlightComponent, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some image");
  });

  it("provides title attribute to parent component", async () => {
    const data = { title: "Some title" };
    mockSpotlightComponentResponse({ data });
    const wrapper = mount(SpotlightComponent, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some title");
  });

  it("provides description attribute to parent component", async () => {
    const data = { description: "Some description" };
    mockSpotlightComponentResponse({ data });
    const wrapper = mount(SpotlightComponent, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some description");
  });
});
