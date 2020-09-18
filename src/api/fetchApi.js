const fetchGet = (url) => fetch(url).then((res) => res.json());

const fetchApi = (action) => {
  switch (action.type) {
    case 'NEWS_FEEDS':
      return fetchGet('/api/newsFeeds');
  }
};

export default fetchApi;
