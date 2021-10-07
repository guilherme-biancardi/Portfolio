<template>
  <nav class="menu">
    <div class="inside">
      <hr class="line" />
      <ul class="menu-list">
        <li
          class="menu-item"
          v-for="(link, i) in links"
          :key="i"
          :class="{ 'item-selected': linkSelected == i }"
        >
          <p>{{ link.text }}</p>
          <router-link class="circle" @click="linkSelected = i" :to="link.path"></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "Sobre Mim",
        path: 'about-me'
      },
      {
        text: "Tecnologias",
        path: 'my-technologies'
      },
    ],
    linkSelected: 0,
  }),
};
</script>

<style scoped>
.menu {
  position: fixed;
  right: 40px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 40px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: right;
  column-gap: 12px;
  transition: all 0.3s ease;
}

.menu-item p {
  font-size: 0.85em;
  transition: all 0.3s ease;
}

.menu-item .circle {
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: var(--light-medium);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.line {
  position: absolute;
  right: 8px;
  top: 0;
  width: 2px;
  height: 100vh;
  border: none;
  background-color: var(--dark-medium);
  z-index: -1;
}

.item-selected {
  margin-right: -1px;
}

.item-selected p {
  font-size: 0.95em;
  color: var(--red);
}

.item-selected .circle {
  width: 20px;
  height: 20px;
  background-color: var(--red);
}
</style>