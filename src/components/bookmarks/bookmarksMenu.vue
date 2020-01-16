<template>
  <transition name="modal">
    <div class="menu">
      <div
        class="form"
        :style="{left: menuPosition.x + 'px', top: menuPosition.y + 'px'}"
      >
        <div class="wrapper">
          <div
            class="items"
            v-show="menuType == 'bookmarksAdd'"
          >
            <router-link
              class="item"
              :to="{name: 'bookmarksModal'}"
            >
              Добавить
            </router-link>
          </div>
          <div
            class="items"
            v-show="menuType == 'bookmarksItem'"
          >
            <div
              class="item"
              v-clipboard="() => activeBookmark != null ? activeBookmark.url : ''"
              @click="$store.commit('changeMenuState')"
            >
              Копировать URL
            </div>
            <router-link
              class="item"
              :to="{name: 'bookmarksModal'}"
            >
              Изменить
            </router-link>
            <div
              class="item"
              @click="$store.commit('deleteBookmark')"
            >
              Удалить
            </div>
          </div>
        </div>
      </div>

      <div class="overlay" @click="$store.commit('changeMenuState', {menuItemIndex: null})"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'bookmarksMenu',
  computed: {
    ...mapGetters(['activeBookmark', 'menuPosition', 'menuType']),
  },
};
</script>

<style scoped>
  .menu {
    left: 0;
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
  .menu .form {
    position: absolute;
    width: 230px;
    height: max-content;
    margin: 0 auto;
    padding: 8px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    z-index: 2;
  }
  .menu .item {
    display: flex;
    padding: 0 24px;
    height: 32px;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
  }
  .menu .item:hover {
    background-color: #e9eaee;
  }
</style>
