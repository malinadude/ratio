<template>
  <div id="app">
    <div class="bookmarks">
      <div class="header">
        <h1 class="title">Закладки</h1>
        <button
          class="add"
          name="add"
          @click="$store.commit('changeMenuState', { type: 'bookmarksAdd', element: $event.target.getBoundingClientRect()}), $store.commit('changeActiveBookmark', null)"
        >
          <svg viewBox="0 0 24 24" style="display: block; width: 100%; height: 100%;">
            <g>
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </g>
          </svg>
        </button>
      </div>

      <bookmarksListing></bookmarksListing>
      <bookmarksMenu
        v-show="menuState"
      ></bookmarksMenu>

      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import bookmarksListing from '@/components/bookmarks/bookmarksListing';
import bookmarksMenu from '@/components/bookmarks/bookmarksMenu';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['menuState']),
  },
  components: {
    bookmarksListing,
    bookmarksMenu,
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

  a {
    text-decoration: none;
    color: #000;
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
    outline: none;
    cursor: pointer;
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
    font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
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
