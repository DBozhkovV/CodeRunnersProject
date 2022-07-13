import jwt from 'jwt-decode';

const isA = () => {
    const token = localStorage.getItem("token");

    if(token === null){
        window.location.href = '/';
        console.log("Error");
        return null;
    }

    const decodeToken = jwt(token);
    if(decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] != "Admin"){
        window.location.href = '/';
        console.log("Error");
        return null;
    }
}

export default isA;