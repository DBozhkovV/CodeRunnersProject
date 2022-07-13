import jwt from 'jwt-decode';

const checkAdmin = () => {
    const token = localStorage.getItem("token");
    
    if(token === null){
        console.log("Error");
        window.location.href = '/';
        return null;
    }

    const decodedToken = jwt(token);
    if(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] !== "Admin"){
        console.log("Error");
        window.location.href = '/';
        return null;
    }
}

export default checkAdmin;