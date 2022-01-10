import http from "./http";


const login = (email, password) => {
  return http.post('/auth/login', { email, password }).then((data: any) => {
    // navigate('/dashboard');
    localStorage.setItem('token', data.auth_token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user;
  });
}


const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};


export default {
  login,
  logout,
};