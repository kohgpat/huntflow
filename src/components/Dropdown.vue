<template>
  <div class="dropdown" :class="getDropdownClasses">
    <portal to="overlay" v-if="visible">
      <div class="dropdown-overlay" v-if="visible" @click="close()"></div>
    </portal>

    <header
      class="dropdown__header"
      @click="toggleDropdown()">
      <i class="dropdown__caret" aria-hidden="true"></i>
    </header>

    <div :class="getDropdownContentClasses">
      <ul class="dropdown__list">
        <li class="dropdown__item">One</li>
        <li class="dropdown__item">Two</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data: () => ({
    visible: false
  }),
  computed: {
    getDropdownContentClasses() {
      return this.visible ? "dropdown__content dropdown__content--visible" : "dropdown__content";
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
  },
}
</script>

<style scoped>
  .dropdown-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
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
    height: 10px;
    width: 10px;
    background-color: red;
  }

  .dropdown__content {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 15px 10px;
    transition: opacity .3s;
    visibility: hidden;
    background-color: #fff;
    position: absolute;
  }

  .dropdown__content--visible {
    height: auto;
    opacity: 1;
    visibility: visible;
  }
</style>