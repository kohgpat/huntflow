<template>
  <div class="vacancy-short">
    <header class="vacancy-short-header">
      <div class="vacancy-short-header__side vacancy-short-header__side--left">
        <h1 class="vacancy-short__current-step">
          Подумать
        </h1>

        <h3 class="vacancy-short__position-name">
          Продавец
        </h3>
      </div>

      <div class="vacancy-short-header__side vacancy-short-header__side--right">
        <Button
          class="vacancy-short__change-position-control" variant="success">
          Сменить этап подбора
        </Button>
      </div>
    </header>

    <div class="vacancy-short-content">
      <VacancyShortCommentForm :onSave="addComment" />

      <VacancyShortComments
        :comments="comments"
        :editComment="editComment"
        :stopEditComment="stopEditComment"
        :updateComment="updateComment"
        :startRemoveComment="startRemoveComment"
        :stopRemoveComment="stopRemoveComment"
        :removeComment="removeComment" />
    </div>
  </div>
</template>

<script>
import nanoid from "nanoid";
import Button from "./Button.vue";
import VacancyShortComments from "./VacancyShortComments.vue";
import VacancyShortCommentForm from "./VacancyShortCommentForm.vue";

export default {
  name: "VacancyShort",
  data: () => ({
    currentUser: {
      id: 1,
      name: "Василий Щерица"
    },
    comments: [
      {
        id: 1,
        comment: "Подумать",
        author: {
          id: 1,
          name: "Василий Щерица"
        },
        created_at: "12 июля"
      },
      {
        id: 2,
        comment: "Взят в работу",
        author: {
          id: 2,
          name: "Ольга Солошенко"
        },
        created_at: "11 июля"
      }
    ]
  }),
  methods: {
    addComment(commentText) {
      const comment = {
        id: nanoid(),
        comment: commentText,
        author: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        created_at: "12 июля"
      };

      this.comments = [comment, ...this.comments];
    },
    editComment(comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        {
          ...comment,
          isEditing: true
        },
        ...this.comments.slice(commentIdx + 1)
      ];
    },
    stopEditComment(comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        {
          ...comment,
          isEditing: false
        },
        ...this.comments.slice(commentIdx + 1)
      ];
    },
    updateComment(commentText, comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        {
          ...comment,
          comment: commentText,
          isEditing: false
        },
        ...this.comments.slice(commentIdx + 1)
      ];
    },
    startRemoveComment(comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        {
          ...comment,
          isEditing: false,
          isDeleting: true
        },
        ...this.comments.slice(commentIdx + 1)
      ];
    },
    stopRemoveComment(comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        {
          ...comment,
          isDeleting: false
        },
        ...this.comments.slice(commentIdx + 1)
      ];
    },
    removeComment(comment) {
      const commentIdx = this.comments.findIndex(c => c.id === comment.id);

      this.comments = [
        ...this.comments.slice(0, commentIdx),
        ...this.comments.slice(commentIdx + 1)
      ];
    }
  },
  components: {
    Button,
    VacancyShortComments,
    VacancyShortCommentForm
  }
};
</script>

<style scoped>
.vacancy-short {
  background-color: #fdffec;
  border-left: 4px solid #7ac016;
  border-radius: 3px;
  padding: 15px 30px 20px 34px;
  width: 504px;
}

.vacancy-short-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 9px;
}

.vacancy-short-header__side {
  display: flex;
  flex: 1;
}

.vacancy-short-header__side--left {
  flex-direction: column;
}

.vacancy-short-header__side--right {
  justify-content: flex-end;
}

.vacancy-short__current-step {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 6px;
  color: #7ac016;
}

.vacancy-short__position-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 0;
  color: #7ac016;
}
</style>