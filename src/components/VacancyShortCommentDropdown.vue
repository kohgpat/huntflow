<template>
  <div class="vacancy-short-comment__dropdown">
    <Dropdown :items="items" />
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "VacancyShortCommentDropdown",
  props: ["comment", "editComment", "removeComment"],
  data() {
    return {
      items: [
        {
          name: "Редактировать",
          handler: () => {
            this.editComment(this.comment);
          }
        },
        {
          name: "Удалить",
          handler: () => {
            this.removeComment(this.comment);
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