import { mount, shallowMount } from "@vue/test-utils";
import VacancyShortComments from "@/components/VacancyShort/VacancyShortComments.vue";
import VacancyShortCommentDropdown from "@/components/VacancyShort/VacancyShortCommentDropdown.vue";

describe("VacancyShortComments", () => {
  it("should render comments", () => {
    const comments = [
      {
        id: 1,
        comment: "Подумать",
        author: {
          id: 1,
          name: "Василий Щерица"
        }
      },
      {
        id: 2,
        comment: "Взят в работу",
        author: {
          id: 2,
          name: "Ольга Солошенко"
        }
      }
    ];
    const vacancyShortComments = shallowMount(VacancyShortComments, {
      propsData: {
        comments
      }
    });

    expect(vacancyShortComments.text()).toContain("Подумать");
    expect(vacancyShortComments.text()).toContain("Взят в работу");
  });

  it("should display dropdown with actions for each comment", () => {
    let comments = [
      {
        id: 1,
        comment: "Подумать",
        author: {
          id: 1,
          name: "Василий Щерица"
        }
      },
      {
        id: 2,
        comment: "Взят в работу",
        author: {
          id: 2,
          name: "Ольга Солошенко"
        }
      }
    ];

    const vacancyShortComments = mount(VacancyShortComments, {
      propsData: {
        comments
      }
    });

    expect(
      vacancyShortComments.findAll(VacancyShortCommentDropdown).length
    ).toEqual(2);
  });

  it("should be able to start comment ediiting", () => {
    let comments = [
      {
        id: 1,
        comment: "Подумать",
        author: {
          id: 1,
          name: "Василий Щерица"
        }
      },
      {
        id: 2,
        comment: "Взят в работу",
        author: {
          id: 2,
          name: "Ольга Солошенко"
        }
      }
    ];
    const editComment = jest.fn();

    const vacancyShortComments = mount(VacancyShortComments, {
      propsData: {
        comments,
        editComment
      }
    });

    vacancyShortComments
      .findAll(VacancyShortCommentDropdown)
      .at(0)
      .findAll("button")
      .at(0)
      .trigger("click");

    expect(editComment).toBeCalled();
  });

  it("should be able to start comment deleting", () => {
    let comments = [
      {
        id: 1,
        comment: "Подумать",
        author: {
          id: 1,
          name: "Василий Щерица"
        }
      },
      {
        id: 2,
        comment: "Взят в работу",
        author: {
          id: 2,
          name: "Ольга Солошенко"
        }
      }
    ];
    const startRemoveComment = jest.fn();

    const vacancyShortComments = mount(VacancyShortComments, {
      propsData: {
        comments,
        startRemoveComment
      }
    });

    vacancyShortComments
      .findAll(VacancyShortCommentDropdown)
      .at(0)
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(startRemoveComment).toBeCalled();
  });
});
