import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: {
      current_key: null,
      list: [],
    },
    showMenu: false,
    menu: {
      state: false,
      type: null,
      positionX: 0,
      positionY: 0,
    },
    modalState: false,
  },
  getters: {
    bookmarksList(state) {
      return state.bookmarks.list.slice().reverse();
    },
    activeBookmark(state) {
      return state.bookmarks.list.slice().reverse()[state.bookmarks.current_key];
    },
    menuPosition(state) {
      return {
        x: state.menu.positionX - 210,
        y: state.menu.positionY,
      };
    },
    menuType(state) {
      return state.menu.type;
    },
    menuState(state) {
      return state.menu.state;
    },
  },
  mutations: {
    addBookmark(state, data) {
      state.bookmarks.list.push({
        title: data.title,
        url: data.url,
      });
    },
    updateBookmark(state, data) {
      const localBookmarksList = state.bookmarks.list.reverse();

      localBookmarksList.splice(state.bookmarks.current_key, 1, {
        title: data.title,
        url: data.url,
      });

      state.bookmarks.list = localBookmarksList.reverse();
    },
    deleteBookmark(state) {
      const localBookmarksList = state.bookmarks.list.reverse();

      localBookmarksList.splice(state.bookmarks.current_key, 1);

      state.bookmarks.list = localBookmarksList.reverse();

      if (state.menu.state) {
        this.commit('changeMenuState');
      }
    },
    changeActiveBookmark(state, data) {
      state.bookmarks.current_key = data;
    },
    changeMenuState(state, data) {
      if (data) {
        if (data.type) {
          state.menu.type = data.type;
        }
        if (data.element) {
          state.menu.positionX = data.element.x;
          state.menu.positionY = data.element.y;
        }
      }

      state.menu.state = !state.menu.state;
    },
    changeModalState(state) {
      state.modalState = !state.modalState;

      if (state.menu.state) {
        this.commit('changeMenuState');
      }
    },
  },
  actions: {
    changeBookmark({ commit, state }, data) {
      if (state.bookmarks.current_key != null) {
        commit('updateBookmark', data);
      } else {
        commit('addBookmark', data);
      }

      commit('changeModalState');
    },
  },
});
