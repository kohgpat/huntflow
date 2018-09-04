<template>
  <ul class="vacancy-short-comments">
    <li v-for="comment in comments" class="vacancy-short-comment">
      <div class="vacancy-short-comment__comment">
        {{comment.comment}}
      </div>

      <div class="vacancy-short-comment__meta">
        <div class="vacancy-short-comment-author">
          <div class="vacancy-short-comment-author__avatar" />
          <span class="vacancy-short-comment-author__name">{{comment.author.name}}</span>
        </div>
        <span class="vacancy-short-comment-created_at">, {{comment.created_at}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VacancyShort',
  props: ["comments"],
  components: {}
}
</script>

<style scoped>
  .vacancy-short-comments {
    list-style: none;
    padding: 0;
    margin: 15px 0 0;
  }

  .vacancy-short-comment:not(:last-child) {
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
    background-image: url(../assets/icons/avatar@2x.png);
    background-size: cover;
    background-position: center;
    margin-right: 5px;
  }

  .vacancy-short-comment-author__name {
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    color: #8F999C;
    text-transform: uppercase;
  }

  .vacancy-short-comment-created_at {
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    color: #8F999C;
    text-transform: uppercase;
  }
</style>