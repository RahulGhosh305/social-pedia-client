
const useAuth = () => {
    let auth;
    const token = localStorage.getItem('token')
    const googleToken = localStorage.getItem('googletoken')

    if (token || googleToken) {
        auth = true
    } else {
        auth = false
    }

    return auth;
};
export default useAuth
