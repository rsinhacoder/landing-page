//! API_URL variable
let API_URL;

//! Set API_URL based on env
            
if(process.env.NODE_ENV !== 'production') {
    API_URL=process.env.REACT_APP_DEV_API_URL;
}
else{
    API_URL=process.env.REACT_APP_PROD_API_URL;
}

const login = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${API_URL}/auth/user/login`, requestOptions)
    .then(response => response.json())
    .then((result) => {
        console.log(result);
        // ! get user jwt token
        if (result.userAuthToken) {
            localStorage.setItem("powerstrip-analytics-token", JSON.stringify(result.userAuthToken));
        }
        return result;
    })
    .catch(error => console.log('error', error));
}

const logout = () => {
    localStorage.removeItem("powerstrip-analytics-token");
};
  
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("powerstrip-analytics-token"));
};

const authenticationService = {
    login,
    logout,
    getCurrentUser
};
  
export default authenticationService;
