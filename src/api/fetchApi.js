const fetchGet = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchPost = async (url, data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const res = await fetch(url, options);
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchApi = (action) => {
  if (action.payload) {
    switch (action.type) {
      case 'NEWS_FEEDS':
        return fetchGet('/api/newsFeeds');
      case 'TOGGLE_LIKE':
        return fetchGet(`/api/toggleLike/${action.postID}`);
      case 'MY_POSTS':
        return fetchGet('/api/authorPosts');
    }
  }
  switch (action.type) {
    case 'GET_USER':
      return fetchGet('/api/userDetails');
    case 'SIGN_IN':
      return fetchPost('/api/signUp', { data: action.data });
    default:
      return new Promise((_res, reject) => reject());
  }
};

export default fetchApi;
