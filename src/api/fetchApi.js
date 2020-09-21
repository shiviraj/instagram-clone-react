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
  switch (action.type) {
    case 'NEWS_FEEDS':
      return fetchGet('/api/newsFeeds');
    case 'TOGGLE_LIKE':
      return fetchGet(`/api/toggleLike/${action.postID}`);
    case 'USERS_POST':
      return fetchGet(`/api/getPosts/${action.username}`);
    case 'GET_USER':
      return fetchGet('/api/userDetails');
    case 'GET_CURRENT_USER':
      return fetchGet(`/api/getUser/${action.username}`);
    case 'SIGN_UP':
      return fetchPost('/api/signUp', action.data);
    case 'SIGN_IN':
      return fetchPost('/api/signIn', action.data);
    case 'GET_CLIENT_ID':
      return fetchGet('/api/getClientID');
    case 'SIGN_IN_OAUTH':
      return fetchGet(`/api/signInOauth/${action.code}`);
    default:
      return new Promise((_res, reject) => reject());
  }
};

export default fetchApi;
