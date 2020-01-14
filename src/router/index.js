import Vue from 'vue';
import Router from 'vue-router';
import bookmarksListing from '@/components/bookmarks/bookmarksListing';
import bookmarksMenu from '@/components/bookmarks/bookmarksMenu';
import bookmarksModal from '@/components/bookmarks/bookmarksModal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: bookmarksListing,
        bookmarksMenu,
        bookmarksModal,
      },
    },
  ],
});
