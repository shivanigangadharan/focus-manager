import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loggedUserID, setLoggedUserID] = useState(localStorage.getItem("user"));

    const SignupUser = async (name, email, password) => {
        try {
            const res = await axios.post(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users`, {
                name: name,
                email: email,
                password: password,
            });
            console.log("Signed up user: ", res)
            setUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data.id));
            setLoggedUserID(res.data.id);
            return user;
        }
        catch (e) {
            console.log(e);
        }
    }

    const LoginUser = async (email, password) => {
        try {
            const res = await axios.get(`https://627e95b5b75a25d3f3bacc6f.mockapi.io/api/tasks/users`, {
                email: email,
                password: password
            });
            if (res.data.some(user => (user.email === email && user.password === password))) {
                setLoggedUserID(res.data.find(user => user.email === email && user.password === password).id);
                localStorage.setItem("user", res.data.find(user => user.email === email && user.password === password).id)
                setUser(res.data.find(user => user.email === email && user.password === password));
                return true;
            } else {
                console.log("No such user found");
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, SignupUser, LoginUser, loggedUserID, setLoggedUserID }}>
            {children}
        </AuthContext.Provider>
    )
}