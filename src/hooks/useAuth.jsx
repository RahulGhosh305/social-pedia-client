
const useAuth = () => {
    let auth;
    const token = localStorage.getItem('token')
    if (token) {
        auth = true
    } else {
        auth = false
    }

    return auth;
};
export default useAuth
