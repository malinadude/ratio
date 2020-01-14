<template>
  <div class="bookmarks__listing">
    <div class="wrapper">
      <div
        class="item"
        :class="{'active': menuItemState == 0}"
      >
        <div class="icon">
          <img src="" alt="">
        </div>
        <div class="title">Доктор Хаус 1-8 сезон смотреть в Full HD 1080 / Blu-Ray все серии хорошем качестве бесплатно онлайн</div>
        <a href="#" class="url" target="_blank">vk.com</a>
        <button
          class="change"
          @click="$store.commit('changeMenuState', { type: 'bookmarksItem', menuItemIndex: 0, element: $event.target.getBoundingClientRect()})"
        >
          <svg viewBox="0 0 24 24" style="display: block; width: 100%; height: 100%;">
            <g>
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div
        class="item"
        :class="{'active': menuItemState == 1}"
      >
        <div class="icon">
          <img src="" alt="">
        </div>
        <div class="title">Вконтакте</div>
        <a href="#" class="url" target="_blank">vk.com</a>
        <button
          class="change"
          @click="$store.commit('changeMenuState', { type: 'bookmarksItem', menuItemIndex: 1, element: $event.target.getBoundingClientRect()})"
        >
          <svg viewBox="0 0 24 24" style="display: block; width: 100%; height: 100%;">
            <g>
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div
        class="item"
        :class="{'active': menuItemState == 2}"
      >
        <div class="icon">
          <img src="" alt="">
        </div>
        <div class="title">Вконтакте</div>
        <a href="#" class="url" target="_blank">vk.com</a>
        <button
          class="change"
          @click="$store.commit('changeMenuState', { type: 'bookmarksItem', menuItemIndex: 2, element: $event.target.getBoundingClientRect()})"
        >
          <svg viewBox="0 0 24 24" style="display: block; width: 100%; height: 100%;">
            <g>
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookmarks',
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    menuItemState() {
      return this.$store.state.menu.menuItemIndex;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bookmarks__listing {
    display: flex;
    flex-direction: column;
    max-width: 960px;
    box-shadow: rgba(60, 64, 67, .3) 0 1px 2px 0, rgba(60, 64, 67, .15) 0 1px 3px 1px;
    background-color: #fff;
    border-radius: 4px;
    margin: 24px auto;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
  }

  .item {
    padding-left: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    position: relative;
    cursor: default;
    font-size: 13px;
  }

  .title {
    color: #202124;
    margin-left: 20px;
  }
  .url {
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.54);
  }
  button svg {
    background-color: #fff;
  }
  button.change {
    fill: #5f6368;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
