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

  it("should display items in dropdown", () => {
    const editHandler = jest.fn();
    const deleteHandler = jest.fn();

    const items = [
      {
        name: "Edit",
        button: true,
        handler: () => {
          editHandler();
        }
      },
      {
        name: "Delete",
        button: true,
        handler: () => {
          deleteHandler();
        }
      }
    ];

    const dropdown = shallowMount(Dropdown, {
      propsData: {
        items
      }
    });
    expect(dropdown.findAll(".dropdown__item").length).toEqual(2);

    dropdown
      .findAll(".dropdown__item")
      .at(0)
      .find("button")
      .trigger("click");
    dropdown
      .findAll(".dropdown__item")
      .at(1)
      .find("button")
      .trigger("click");

    expect(editHandler).toBeCalled();
    expect(deleteHandler).toBeCalled();
  });
});
