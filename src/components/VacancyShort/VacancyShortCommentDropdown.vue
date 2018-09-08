<template>
  <div class="vacancy-short-comment-dropdown">
    <Dropdown :items="items" :hidden="hidden" />
  </div>
</template>

<script>
import Dropdown from "../Dropdown.vue";

export default {
  name: "VacancyShortCommentDropdown",
  props: ["comment", "startEditComment", "startRemoveComment", "hidden"],
  data() {
    return {
      items: [
        {
          name: "Редактировать",
          button: true,
          handler: () => {
            this.startEditComment(this.comment);
          }
        },
        {
          name: "Удалить",
          button: true,
          handler: () => {
            this.startRemoveComment(this.comment);
          }
        }
      ]
    };
  },
  components: {
    Dropdown
  }
};
</script>

<style scoped>
</style>