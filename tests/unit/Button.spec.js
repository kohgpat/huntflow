import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button", () => {
  it("should match the snapshot", () => {
    const defaultButton = shallowMount(Button);
    const primaryButton = shallowMount(Button, {
      propsData: { variant: "primary" }
    });
    const successButton = shallowMount(Button, {
      propsData: { variant: "success" }
    });
    const dangerButton = shallowMount(Button, {
      propsData: { variant: "danger" }
    });

    expect(defaultButton).toMatchSnapshot();
    expect(successButton).toMatchSnapshot();
    expect(primaryButton).toMatchSnapshot();
    expect(dangerButton).toMatchSnapshot();
  });
});
