<template>
  <div class="bookmarks__listing">
    <div class="wrapper">
      <div
        class="item empty"
        v-if="bookmarksList.length <= 0"
      >
        Закладок не обнаружено
      </div>
      <div
        class="item"
        v-for="(bookmark, index) in bookmarksList"
        :key="index"
      >
        <div class="title">
          {{ bookmark.title | truncate }}
        </div>
        <a
          class="url"
          target="_blank"
          :href="'//' + bookmark.url"
        >
          {{ bookmark.url | truncate }}
        </a>
        <button
          class="change"
          @click="$store.commit('changeMenuState', {type: 'bookmarksItem', element: $event.target.getBoundingClientRect()}), $store.commit('changeActiveBookmark', index)"
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
import { mapGetters } from 'vuex';

export default {
  name: 'bookmarksListing',
  computed: {
    ...mapGetters(['activeBookmark', 'bookmarksList']),
  },
  filters: {
    truncate(text, clamp) {
      return text.slice(0, 120) + (text.length > 120 ? clamp || '...' : '');
    },
  },
};
</script>

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

  .bookmarks__listing .wrapper {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
  }

  .bookmarks__listing .item {
    padding-left: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    position: relative;
    cursor: default;
    font-size: 13px;
    padding-right: 50px;
  }

  .bookmarks__listing .item.empty {
    justify-content: center;
  }

  .bookmarks__listing .item .title {
    color: #202124;
    margin-left: 20px;
  }
  .bookmarks__listing .item .url {
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.54);
  }
  .bookmarks__listing .item button svg {
    background-color: #fff;
  }
  .bookmarks__listing .item button.change {
    fill: #5f6368;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1060px) {
    .bookmarks__listing {
      max-width: 95%;
    }
  }
</style>
