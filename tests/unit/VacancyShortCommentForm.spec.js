import { shallowMount } from "@vue/test-utils";
import VacancyShortCommentForm from "@/components/VacancyShort/VacancyShortCommentForm.vue";

describe("VacancyShortCommentForm", () => {
  it("init data based on passed comment prop", () => {
    const comment = {
      id: 1,
      comment: "Comment"
    };
    const form = shallowMount(VacancyShortCommentForm, {
      propsData: {
        comment
      }
    });

    expect(form.vm.commentTextFocused).toEqual(true);
    expect(form.vm.commentText).toEqual("Comment");
  });

  it("should display controls if the input is focused", () => {
    const form = shallowMount(VacancyShortCommentForm);

    expect(
      form.findAll(".vacancy-short-comment-form__controls").length
    ).toEqual(0);

    form.find(".vacancy-short-comment-form__input").trigger("focus");

    expect(
      form.findAll(".vacancy-short-comment-form__controls").length
    ).toEqual(1);
  });

  it("should invoke onSave and onCancel callbacks", () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();

    const form = shallowMount(VacancyShortCommentForm, {
      propsData: {
        onSave,
        onCancel
      }
    });

    form.find(".vacancy-short-comment-form__input").trigger("focus");
    form.find(".vacancy-short-comment-form__input").setValue("New comment");

    form.vm.save();

    expect(onSave).toBeCalledWith("New comment", undefined);

    form.vm.cancel();

    expect(onCancel).toBeCalled();
  });

  it("should clean commentTextFocused and commentText on save or cancel", () => {
    const form = shallowMount(VacancyShortCommentForm);

    form.find(".vacancy-short-comment-form__input").setValue("New comment");

    form.vm.save();

    expect(form.vm.commentText).toBe("");
    expect(form.vm.commentTextFocused).toBe(false);

    form.find(".vacancy-short-comment-form__input").setValue("New comment");

    form.vm.cancel();

    expect(form.vm.commentText).toBe("");
    expect(form.vm.commentTextFocused).toBe(false);
  });
});
