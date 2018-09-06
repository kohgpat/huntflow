<template>
  <div class="modal"
    role="dialog"
    aria-labelledby="confirmation-modal">
    <div class="modal__container">
      <div class="modal__content">
        <header class="modal__header">
          <slot name="title">
            <h4 class="modal__title">Подтвердите ваше действие</h4>
          </slot>
        </header>
        
        <div class="modal__body">
          <slot name="body">
            <Button class="modal__control" @click="$emit('close')">Закрыть</Button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "ConfirmModal",
  components: {
    Button
  }
};
</script>

<style scoped>
.modal {
  position: relative;
}

.modal__container {
  z-index: 1;
}

.modal__content {
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  width: 350px;
}

.modal__header,
.modal__body {
  display: flex;
  align-items: center;
  height: 50px;
}

.modal__header {
  border-bottom: 1px solid #ebebeb;
  padding: 14px 20px;
}

.modal__body {
  padding: 14px 20px;
}
</style>