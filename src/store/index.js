import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMenu: false,
    menu: {
      state: false,
      type: null,
      menuItemIndex: null,
      positionX: 0,
      positionY: 0,
    },
    modalState: false,
  },
  getters: {},
  mutations: {
    changeMenuState(state, payload) {
      if (payload) {
        if (payload.type) {
          this.state.menu.type = payload.type;
        }
        if (payload.element) {
          this.state.menu.positionX = payload.element.x;
          this.state.menu.positionY = payload.element.y;
        }
        if (payload.menuItemIndex != null) {
          this.state.menu.menuItemIndex = payload.menuItemIndex;
        }

        this.state.menu.state = !this.state.menu.state;
      }
    },
    changeModalState() {
      this.state.modalState = !this.state.modalState;

      if (this.state.menu.state) {
        this.state.menu.state = !this.state.menu.state;
      }
    },
  },
  actions: {
    // changeModalState(context) {
    //     context.commit('changeModalState');
    // },
  },
});
