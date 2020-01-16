<template>
  <transition name="modal">
    <div class="modal">
      <div class="wrapper">
        <form
          class="container"
          @submit.prevent="saveBookmark()"
        >
          <div class="title">
            <slot name="header">
              {{ menuType == 'bookmarksAdd' ?  'Добавить закладку' : 'Изменить закладку' }}
            </slot>
          </div>

          <div class="fields">
            <slot name="body">
              <div class="field-item">
                <div class="title">Название</div>
                <input
                  type="text"
                  id="title"
                  required
                  :value="activeBookmark != null ? activeBookmark.title : ''"
                  @input="updateLocalBookmark($event)"
                >
              </div>
              <div class="field-item">
                <div class="title">URL</div>
                <input
                  type="text"
                  id="url"
                  required
                  :value="activeBookmark != null ? activeBookmark.url : ''"
                  @input="updateLocalBookmark($event)"
                >
              </div>
            </slot>
          </div>

          <div class="functional">
            <slot name="footer">
              <button
                type="button"
                class="cancel"
                @click="$router.go(-1), $store.commit('changeModalState')"
              >
                Отмена
              </button>
              <button
                class="save"
                type="submit"
                value="Submit"
                @click="$router.go(-1), $store.commit('changeModalState')"
              >
                Сохранить
              </button>
            </slot>
          </div>
        </form>

        <div
          class="overlay"
          @click="$router.go(-1), $store.commit('changeModalState')"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'bookmarksModal',
  data() {
    return {
      localBookmark: {},
    };
  },
  computed: {
    ...mapGetters(['activeBookmark', 'bookmarksList', 'menuType']),
  },
  methods: {
    saveBookmark() {
      this.$store.dispatch('changeBookmark', this.localBookmark);
    },
    updateLocalBookmark(e) {
      this.localBookmark[e.target.id] = e.target.value;
    },
  },
  created() {
    this.$store.commit('changeMenuState');
    this.localBookmark = {
      title: this.activeBookmark != null ? this.activeBookmark.title : '',
      url: this.activeBookmark != null ? this.activeBookmark.url : '',
    };
  },
  updated() {
  },
};
</script>

<style scoped>
  .modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    display: table;
    transition: opacity .3s ease;
    color: #202124;
  }

  .modal .wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal .container {
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    z-index: 2;
    position: relative;
    width: max-content;
    border-radius: 10px;
  }

  .modal .title {
    margin-bottom: 16px;
  }

  .modal .title h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal .fields {
    margin-bottom: 44px;
  }

  .modal .fields input {
    width: 472px;
    height: 32px;
    border: none;
    outline: none;
    padding: 6px 8px;
    caret-color: #1A73E8;
    text-overflow: ellipsis;
    background-color: #e9eaee;
    border-radius: 4px;
  }

  .modal .fields .title {
    color: #5F6368;
    display: block;
    font-size: 10px;
    letter-spacing: .4px;
    line-height: 1em;
    margin-bottom: 8px;
    font-weight: bold;
  }

  .field-item:not(:last-child) {
    margin-bottom: 26px;
  }

  .modal .functional {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .modal .functional button {
    width: auto;
    align-items: center;
    border: 1px solid #DADCE0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #1A73E8;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-weight: 500;
    height: 32px;
    justify-content: center;
    min-width: 5.14em;
    outline-width: 0;
    padding: 8px 16px;
    position: relative;
    user-select: none;
    font-size: 13px;
  }

  .modal .functional button.cancel {
    background-color: #fff;
  }

  .modal .functional button.save {
    color: #fff;
    background-color: #1A73E8;
  }

  .modal .functional button.save:hover {
    box-shadow: 0 0px 2px 0 rgba(66, 133, 244, .3), 0 1px 2px 1px rgba(66, 133, 244, .15);
    background-color: rgba(26, 115, 232, .9);
  }

  .modal .functional button:hover {
    border-color: rgb(210, 227, 252);
  }

  .modal .functional button.cancel:hover {
    background-color: rgba(66, 133, 244, .04);
  }

  .modal .functional button:not(:last-child) {
    margin-right: 8px;
  }
</style>
