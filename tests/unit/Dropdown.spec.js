import { shallowMount } from "@vue/test-utils";
import Dropdown from "@/components/Dropdown";

describe("Dropdown", () => {
  it("should match the snapshot", () => {
    const dropdown = shallowMount(Dropdown);
    const hiddenDropdown = shallowMount(Dropdown, {
      propsData: {
        hidden: true
      }
    });
    expect(dropdown).toMatchSnapshot();
    expect(hiddenDropdown).toMatchSnapshot();
  });
});
