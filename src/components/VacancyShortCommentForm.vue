<template>
  <form :class="getFormClasses" @submit.prevent="save">
    <input
      type="text"
      name="commentText"
      v-model="commentText"
      @focus="commentTextFocused = true"
      @blur="commentTextFocused = false"
      placeholder="Написать комментарий"
      class="vacancy-short-comment-form__input"
    />

    <div class="vacancy-short-comment-form__controls" v-if="commentTextFocused || commentText.length">
      <Button
        :disabled="!commentText.length"
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
import Button from "./Button.vue";

export default {
  name: "VacancyShortCommentForm",
  components: {
    Button
  },
  props: ["comment", "onSave", "onCancel"],
  data() {
    return {
      commentTextFocused: false,
      commentText: this.comment ? this.comment.comment : ""
    };
  },
  computed: {
    getFormClasses() {
      return this.comment
        ? "vacancy-short-comment-form vacancy-short-comment-form--edit"
        : "vacancy-short-comment-form";
    }
  },
  methods: {
    save() {
      if (this.onSave) {
        this.onSave(this.commentText, this.comment);
      }

      this.commentText = "";
      this.commentTextFocused = false;
    },
    cancel() {
      if (this.onCancel) {
        this.onCancel(this.comment);
      }

      this.commentText = "";
      this.commentTextFocused = false;
    }
  }
};
</script>

<style scoped>
.vacancy-short-comment-form {
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  border: 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.vacancy-short-comment-form--edit {
  border: 0;
  padding: 0;
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
  color: #8f999c;
}

.vacancy-short-comment-form__controls {
  margin-top: 9px;
}

.vacancy-short-comment-form__control:not(:last-child) {
  margin-right: 10px;
}
</style>