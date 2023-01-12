import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { Job } from "@/api/types";

import { createJob } from "../../store/utils";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "AirBnB" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("AirBnB");
  });

  it("renders job locations", () => {
    const job = createJob({ locations: ["Berlin", "Orlando"] });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Berlin");
    expect(wrapper.text()).toMatch("Orlando");
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to the individual job's page", () => {
    const job = createJob({ id: 15 });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
