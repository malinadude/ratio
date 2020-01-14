<template>
  <div id="app">
    <div class="bookmarks">
      <div class="header">
        <h1 class="title">Закладки</h1>
        <button class="add" name="add" @click="$store.commit('changeMenuState', { type: 'bookmarksAdd', menuItemIndex: 0, element: $event.target.getBoundingClientRect()})">
          <svg viewBox="0 0 24 24" style="display: block; width: 100%; height: 100%;">
            <g>
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </g>
          </svg>
        </button>
      </div>

      <router-view/>
      <router-view name="bookmarksMenu" v-show="menuState"/>
      <router-view name="bookmarksModal" v-show="modalState"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    menuState() {
      return this.$store.state.menu.state;
    },
    modalState() {
      return this.$store.state.modalState;
    },
  },
};
</script>

<style>
  #app {
    font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
  }

  * {
    box-sizing: border-box;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .header {
    background-color: #3367d6;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 0 24px 0 18px;
  }

  .header .title {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: .25px;
    line-height: normal;
    margin-left: 6px;
  }

  button {
    padding: 0;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: middle;
    fill: #fff;
    stroke: none;
    width: 20px;
    height: 20px;
  }

  button svg {
    background-color: #3367d6;
  }
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
