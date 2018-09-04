<template>
  <form class="vacancy-short-comment-form">
    <input
      type="text"
      name="comment"
      v-model="comment"
      @focus="commentFocused = true"
      @blur="commentFocused = false"
      placeholder="Написать комментарий"
      class="vacancy-short-comment-form__input"
    />

    <div class="vacancy-short-comment-form__controls" v-if="commentFocused || comment.length">
      <Button
        :disabled="!comment.length"
        variant="primary"
        class="vacancy-short-comment-form__control"
      >
        Сохранить
      </Button>

      <Button
        type="button"
        class="vacancy-short-comment-form__control"
        @click.native="cancel"
      >
        Отмена
      </Button>
    </div>
  </form>
</template>

<script>
import Button from "./Button.vue"

export default {
  name: 'VacancyShortCommentForm',
  components: {
    Button
  },
  data: () => ({
    commentFocused: false,
    comment: ""
  }),
  methods: {
    cancel() {
      this.comment = "";
      this.commentFocused = false;
    }
  },
  // computed: {
  //   isSaveDisabled() {
  //     return !this.comment.length;
  //   }
  // }
}
</script>

<style scoped>
  .vacancy-short-comment-form {
    display: flex;
    flex-direction: column;
    padding: 13px 0;
    border: 0;
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
  }

  .vacancy-short-comment-form__input {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    background-color: transparent;
    border: 0;
    color: #131316;
    width: 100%;
  }

  .vacancy-short-comment-form__input::placeholder {
    color: #8F999C;
  }

  .vacancy-short-comment-form__controls {
    margin-top: 9px;
  }

  .vacancy-short-comment-form__control:not(:last-child) {
    margin-right: 10px;
  }
</style>