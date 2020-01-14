<template>
  <transition name="modal">
    <div class="menu">
      <div class="form" :style="{ left: menuPosition.x + 'px', top: menuPosition.y + 'px' }">
        <div class="wrapper">
          <div class="items" v-show="menuType == 'bookmarksAdd'">
            <div class="item" @click="$store.commit('changeModalState')">Добавить</div>
          </div>
          <div class="items" v-show="menuType == 'bookmarksItem'">
            <div class="item">Копировать URL</div>
            <div class="item" @click="$store.commit('changeModalState')">Изменить</div>
            <div class="item">Удалить</div>
          </div>
        </div>
      </div>

      <div class="overlay" @click="$store.commit('changeMenuState', { menuItemIndex: null})"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bookmarksMenu',
  data() {
    return {
      // showModal: false,
    };
  },
  computed: {
    menuPosition() {
      return {
        x: this.$store.state.menu.positionX - 210,
        y: this.$store.state.menu.positionY,
      };
    },
    menuType() {
      return this.$store.state.menu.type;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {
    left: 0;
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
  .form {
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
  .item {
    display: flex;
    padding: 0 24px;
    height: 32px;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
  }
  .item:hover {
    background-color: #e9eaee;
  }
</style>
