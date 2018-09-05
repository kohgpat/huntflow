<template>
  <div class="vacancy-short-comment-delete-confirm-modal">
    <ConfirmModal>
      <h3
        slot="title"
        class="vacancy-short-comment-delete-confirm-modal__title">
        Удаление комментария
      </h3>

      <div
        slot="body"
        class="vacancy-short-comment-delete-confirm-modal__controls">
        <Button
          variant="danger"
          @click.native="removeComment(comment)"
          class="vacancy-short-comment-delete-confirm-modal__control">
          Удалить
        </Button>

        <Button
          @click.native="stopRemoveComment(comment)"
          class="vacancy-short-comment-delete-confirm-modal__control">
          Отмена
        </Button>
      </div>
    </ConfirmModal>
  </div>
</template>

<script>
import ConfirmModal from "./ConfirmModal.vue";
import Button from "./Button.vue";

export default {
  name: "VacancyShortCommentDeleteConfirmModal",
  props: ["comment", "removeComment", "stopRemoveComment"],
  components: {
    ConfirmModal,
    Button
  }
};
</script>

<style scoped>
.vacancy-short-comment-delete-confirm-modal__title {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #000;
}

.vacancy-short-comment-delete-confirm-modal__controls {
  display: flex;
  align-items: center;
}

.vacancy-short-comment-delete-confirm-modal__control:not(:last-child) {
  margin-right: 10px;
}
</style>