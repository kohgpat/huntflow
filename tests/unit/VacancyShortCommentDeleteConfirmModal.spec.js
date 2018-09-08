import { mount } from "@vue/test-utils";
import VacancyShortCommentDeleteConfirmModal from "@/components/VacancyShort/VacancyShortCommentDeleteConfirmModal.vue";

describe("VacancyShortCommentDeleteConfirmModal", () => {
  it("should ivoke removeComment and stopRemoveComment props", () => {
    const comment = {};
    const removeComment = jest.fn();
    const stopRemoveComment = jest.fn();

    const vacancyShortCommentDeleteConfirmModal = mount(
      VacancyShortCommentDeleteConfirmModal,
      {
        propsData: {
          comment,
          removeComment,
          stopRemoveComment
        }
      }
    );

    vacancyShortCommentDeleteConfirmModal
      .findAll(".vacancy-short-comment-delete-confirm-modal__control")
      .at(0)
      .trigger("click");

    expect(removeComment).toBeCalled();

    vacancyShortCommentDeleteConfirmModal
      .findAll(".vacancy-short-comment-delete-confirm-modal__control")
      .at(1)
      .trigger("click");

      expect(stopRemoveComment).toBeCalled();
  });
});
