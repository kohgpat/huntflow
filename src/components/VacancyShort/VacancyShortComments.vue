<template>
  <ul class="vacancy-short-comments-list">
    <li
      v-for="comment in comments"
      v-bind:key="comment.id"
      class="vacancy-short-comments-list__item">
      <div class="vacancy-short-comment" v-if="!comment.isEditing">
        <div class="vacancy-short-comment__comment">
          {{comment.comment}}
        </div>

        <div class="vacancy-short-comment__meta">
          <div class="vacancy-short-comment-author">
            <div class="vacancy-short-comment-author__avatar" />
            
            <span class="vacancy-short-comment-author__name">
              {{comment.author.name}}
            </span>
          </div>

          <span class="vacancy-short-comment-created_at">
            , {{comment.created_at}}
          </span>

          <VacancyShortCommentDropdown
            :hidden="comment.isDeleting"
            :comment="comment"
            :editComment="editComment"
            :startRemoveComment="startRemoveComment"
          />

          <VacancyShortCommentDeleteConfirmModal
            v-if="comment.isDeleting"
            :comment="comment"
            :removeComment="removeComment"
            :stopRemoveComment="stopRemoveComment"
          />
        </div>
      </div>

      <VacancyShortCommentForm
        v-if="comment.isEditing"
        :comment="comment"
        :onSave="updateComment"
        :onCancel="stopEditComment"
      />
    </li>
  </ul>
</template>

<script>
import VacancyShortCommentDropdown from "./VacancyShortCommentDropdown.vue";
import VacancyShortCommentForm from "./VacancyShortCommentForm.vue";
import VacancyShortCommentDeleteConfirmModal from "./VacancyShortCommentDeleteConfirmModal.vue";

export default {
  name: "VacancyShortComments",
  props: [
    "comments",
    "editComment",
    "stopEditComment",
    "updateComment",
    "startRemoveComment",
    "stopRemoveComment",
    "removeComment"
  ],
  components: {
    VacancyShortCommentDropdown,
    VacancyShortCommentForm,
    VacancyShortCommentDeleteConfirmModal
  }
};
</script>

<style scoped>
.vacancy-short-comments-list {
  list-style: none;
  padding: 0;
  margin: 15px 0 0;
}

.vacancy-short-comments-list__item:not(:last-child) {
  margin-bottom: 16px;
}

.vacancy-short-comment__comment {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #151319;
}

.vacancy-short-comment__meta {
  display: flex;
  align-items: center;
}

.vacancy-short-comment-author {
  display: flex;
  align-items: center;
}

.vacancy-short-comment-author__avatar {
  width: 18px;
  height: 18px;
  background-image: url(../../assets/icons/avatar.svg);
  background-size: cover;
  background-position: center;
  margin-right: 5px;
}

.vacancy-short-comment-author__name {
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  color: #8f999c;
  text-transform: uppercase;
}

.vacancy-short-comment-created_at {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: #8f999c;
  text-transform: uppercase;
}
</style>