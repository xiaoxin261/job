const local = {

  setToken (token: string) {
    localStorage.setItem('token', token)
  },

  getToken () {
    return localStorage.getItem('token')
  },

  setUserInfo (userInfo:object) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },

  getUserInfo () {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo) : null
  },

  remove () {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }
}

export default local
