<template>
  <div class="dropdown" :class="getDropdownClasses">
    <portal to="overlay" v-if="items && items.length && visible">
      <div class="dropdown-overlay" v-if="visible" @click="close()"></div>
    </portal>

    <header
      class="dropdown__header"
      @click="toggleDropdown()">
      <i class="dropdown__caret" aria-hidden="true"></i>
    </header>

    <div :class="getDropdownContentClasses" v-if="items && items.length">
      <ul class="dropdown__list">
        <li class="dropdown__item" v-for="item in items" v-bind:key="item.name">
          <button type="button" class="dropdown__button" @click="item.handler" v-if="item.button">{{item.name}}</button>
          <span class="dropdown__text" v-if="!item.button">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["items"],
  data: () => ({
    visible: false
  }),
  computed: {
    getDropdownContentClasses() {
      return this.visible
        ? "dropdown__content dropdown__content--visible"
        : "dropdown__content";
    },
    getDropdownClasses() {
      return this.visible ? "dropdown dropdown--visible" : "dropdown";
    }
  },
  methods: {
    toggleDropdown() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.dropdown {
  position: relative;
}

.dropdown--visible {
  z-index: 2;
}

.dropdown__header {
  cursor: pointer;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 50px;
  position: relative;
  text-overflow: ellipsis;
}

.dropdown__caret {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 4px;
  background-image: url(../assets/icons/caret--down.svg);
  background-size: cover;
  background-position: center;
}

.dropdown__content {
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.3s;
  visibility: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  position: absolute;
}

.dropdown__content--visible {
  height: auto;
  opacity: 1;
  visibility: visible;
}

.dropdown__list {
  list-style: none;
  padding: 0;
  width: 200px;
}

.dropdown__item {
  padding: 14px 20px 15px;
  width: 100%;
  height: 50px;
}

.dropdown__item:not(:last-child) {
  border-bottom: 1px solid #EBEBEB;
}

.dropdown__button {
  padding: 0;
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.dropdown__button,
.dropdown__text {
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 0;
}
</style>