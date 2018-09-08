import { shallowMount } from "@vue/test-utils";
import VacancyShort from "@/components/VacancyShort/VacancyShort.vue";
import VacancyShortCommentForm from "@/components/VacancyShort/VacancyShortCommentForm.vue";
import VacancyShortComments from "@/components/VacancyShort/VacancyShortComments.vue";

describe("VacancyShort", () => {
  it("should renders correctly and pass correct props to nested components", () => {
    const vacancyShort = shallowMount(VacancyShort);

    expect(vacancyShort.find(".vacancy-short__current-step").text()).toEqual(
      "Подумать"
    );
    expect(vacancyShort.find(".vacancy-short__position-name").text()).toEqual(
      "Продавец"
    );
    expect(
      vacancyShort.find(".vacancy-short__change-position-control").text()
    ).toEqual("Сменить этап подбора");
    expect(vacancyShort.find(VacancyShortCommentForm).vm.onSave).toBeDefined();
    expect(vacancyShort.find(VacancyShortComments).vm.comments.length).toEqual(2);
  });
});
