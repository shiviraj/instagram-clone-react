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
    case 'IS_AVAILABLE_USERNAME':
      return fetchPost('/api/isAvailable', action.data);
    case 'IS_AVAILABLE_EMAIL':
      return fetchPost('/api/isAvailableEmail', action.data);
    case 'SIGN_UP':
      return fetchPost('/api/signUp', action.data);
    case 'SIGN_IN':
      return fetchPost('/api/signIn', action.data);
    case 'SIGN_IN_OAUTH':
      return fetchGet(`/api/signInOauth/${action.code}`);
    case 'NEWS_FEEDS':
      return fetchGet('/api/newsFeeds');
    case 'GET_POST':
      return fetchGet(`/api/getPost/${action.id}`);
    case 'TOGGLE_LIKE':
      return fetchGet(`/api/toggleLike/${action.postID}`);
    case 'COMMENT':
      return fetchPost('/api/comment', action.data);
    case 'USERS_POST':
      return fetchGet(`/api/getPosts/${action.username}`);
    case 'GET_USER':
      return fetchGet('/api/userDetails');
    case 'GET_CURRENT_USER':
      return fetchGet(`/api/getUser/${action.username}`);
    case 'GET_CLIENT_ID':
      return fetchGet('/api/getClientID');
    case 'UPLOAD_POST':
      return fetchPost('/api/uploadPost', action.data);
    case 'UPLOAD_MEDIA':
      return uploadMedia('/api/uploadMedia', action.data);
    case 'UPLOAD_AVATAR':
      return uploadMedia('/api/uploadAvatar', action.data);
    case 'CHANGE_PROFILE':
      return fetchPost('/api/changeProfile', action.data);
    case 'CHANGE_PASSWORD':
      return fetchPost('/api/changePassword', action.data);
    default:
      return new Promise((_res, reject) => reject());
  }
};

export default fetchApi;
