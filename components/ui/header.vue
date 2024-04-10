<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>{{ title }}</span>
    </router-link>
    <div class="layout-topbar-menu">
      <slot />
    </div>
  </div>
</template>

<script lang="tsx" setup>
const props = defineProps({
  title: String
})
</script>

<style lang="scss">
.layout-topbar {
  position: fixed;
  height: 5rem;
  z-index: 997;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 2rem;
  background-color: var(--surface-card);
  transition: left 0.2s;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .02), 0px 0px 2px rgba(0, 0, 0, .05), 0px 1px 4px rgba(0, 0, 0, .08);

  .layout-topbar-logo {
    display: flex;
    align-items: center;
    color: var(--surface-900);
    font-size: 1.5rem;
    font-weight: 500;
    width: 300px;
    border-radius: 12px;
    text-decoration: none;

    &:focus {
      outline: 0 none;
      outline-offset: 0;
      transition: box-shadow .2s;
      box-shadow: var(--focus-ring);
    }
  }

  .layout-topbar-menu {
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
  }
}
</style>