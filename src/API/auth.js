import axios from './axios';

export async function checkLogin(email, password) {
  const res = await axios.post(
    '/auth/login',   // 注意：没有 localhost
    null, // body为空
    {
      params: {
        username: email,
        pass: password
      }
    }
  );
  //前端已经使用了res.data进行判断，所以这里直接返回res
  return res;
}

export async function register(email, password, username) {
  const res = await axios.post(
    '/auth/register',
    {
    username,
    pass: password,
    email
    }
  );

  return res.data;
}

export async function pullBio(userid) {
    const res = await axios.get(
        '/auth/getbio',
        {
            params: {
                userid: userid
            }
        }
    );

    return res.data;
}