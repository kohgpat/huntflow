import { shallowMount } from "@vue/test-utils";
import VacancyShortCommentDropdown from "@/components/VacancyShort/VacancyShortCommentDropdown.vue";
import Dropdown from "@/components/Dropdown.vue";

describe("VacancyShortCommentDropdown", () => {
  it("should pass correct props to Dropdown component", () => {
    const hidden = false;

    const vacancyShortCommentDropdown = shallowMount(
      VacancyShortCommentDropdown,
      {
        propsData: {
          hidden
        }
      }
    );

    const dropdown = vacancyShortCommentDropdown.find(Dropdown);

    expect(dropdown.vm.items.length).toBe(2);
    expect(dropdown.vm.items[0].name).toBe("Редактировать");
    expect(dropdown.vm.hidden).toBe(false);
  });
});
