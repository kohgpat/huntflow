<template>
  <button v-bind:class="getClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: String
  },
  computed: {
    getClass() {
      return {
        button: true,
        "button--primary": this.variant === "primary",
        "button--success": this.variant === "success"
      };
    }
  }
};
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
  color: #38343f;
}

.button:disabled {
  cursor: not-allowed;
  background-color: #d6d6d6;
  border: 1px solid #d6d6d6;
  color: #fff;
}

.button--success {
  background-color: #7ac016;
  border: 1px solid #7ac016;
  color: #fff;
}

.button--primary {
  background-color: #22bbd2;
  border: 1px solid #22bbd2;
  color: #fff;
}
</style>