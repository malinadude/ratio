import Vue from 'vue';
import Router from 'vue-router';
import bookmarksModal from '@/components/bookmarks/bookmarksModal';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add-bookmark',
      name: 'bookmarksModal',
      component: bookmarksModal,
    },
  ],
});
