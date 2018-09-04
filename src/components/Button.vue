<template>
  <button v-bind:class="getClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  },
  computed: {
    getClass: () => ({
      "button": true,
      "button--default": true
    })
  }
}
</script>

<style scoped>
  .button {
    padding: 9px 15px 8px;
    font-weight: 700;
    font-size: 11px;
    line-height: 100%;
    text-transform: uppercase;
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 3px;
    color: #000;
  }

  .button--default {
    background-color: #7AC016;
    border: 1px solid #7AC016;
    color: #fff;
  }
</style>