const validateResponse = async (res) => {
  if (!res.ok) throw new Error();
  return await res.json();
};

const fetchGet = async (url) => {
  const res = await fetch(url);
  return await validateResponse(res);
};

const uploadMedia = async (url, data) => {
  const res = await fetch(url, { method: 'POST', body: data });
  return await validateResponse(res);
};

const fetchPost = async (url, data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const res = await fetch(url, options);
  return await validateResponse(res);
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
    case 'UPLOAD_POST':
      return fetchPost('/api/uploadPost', action.data);
    case 'UPLOAD_MEDIA':
      return uploadMedia('/api/uploadMedia', action.data);
    default:
      return new Promise((_res, reject) => reject());
  }
};

export default fetchApi;
