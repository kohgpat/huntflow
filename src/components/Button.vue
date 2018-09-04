<template>
  <button v-bind:class="getClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: String
  },
  computed: {
    getClass() {
      return {
        "button": true,
        "button--primary": this.variant === "primary",
        "button--success": this.variant === "success"
      }
    }
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
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #38343F;
  }

  .button:disabled {
    cursor: not-allowed;
    background-color: #D6D6D6;
    border: 1px solid #D6D6D6;
    color: #fff;
  }

  .button--success {
    background-color: #7AC016;
    border: 1px solid #7AC016;
    color: #fff;
  }

  .button--primary {
    background-color: #22BBD2;
    border: 1px solid #22BBD2;
    color: #fff;
  }
</style>