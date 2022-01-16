
import { React } from 'react';
import { BehaviorSubject } from "rxjs";
import { useState } from 'react';
import { useEffect } from 'react';



const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

export const cart = new BehaviorSubject(null);

export const getCart = () =>
    fetch(`${API_SERVER}/cart`, {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        }
    }).then(res => res.json())
        .then(res => {
            cart.next(res);
            return res;
        });

export const addToCart = (id) =>
    fetch(`${API_SERVER}/cart`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        },
        body: JSON.stringify({ id })
    }).then(res => res.json())
        .then(res => {
            getCart();
        });

export const clearCart = (id) =>
    fetch(`${API_SERVER}/cart`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        }
    }).then(res => res.json())
        .then(res => {
            getCart();
        });


export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username, password
        })
    }).then(res => res.json())
        .then(data => {
            jwt.next(data.access_token);
            getCart();
            return data.access_token;
        });

export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);

    useEffect(() => {
        setLoggedIn(!!jwt.value);
        return jwt.subscribe(c => {
            setLoggedIn(!!jwt.value);
        })
    }, []);

    return loggedIn;
}