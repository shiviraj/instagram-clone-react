const fetchGet = (url) => fetch(url).then((res) => res.json());

const fetchApi = (action) => {
  switch (action.type) {
    case 'NEWS_FEEDS':
      return fetchGet('/api/newsFeeds');
    case 'TOGGLE_LIKE':
      return fetchGet(`/api/toggleLike/${action.postID}`);
    case 'MY_POSTS':
      return fetchGet('/api/authorPosts');
  }
};

export default fetchApi;
