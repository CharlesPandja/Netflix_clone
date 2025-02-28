import { redirect } from "react-router-dom";

export const checkAuth = () =>{
    const token = localStorage.getItem('token');
    if(!token){
        return redirect('/login');
    }
}