import { User } from "./context/AuthProvider";

export function getUserLs(): User {
    return localStorage?.getItem('user') ?? null
}

export function setUserLs(user: User): void {
    if (!user) {
        return
    }
    try {
        localStorage.setItem('user', user)
    } catch (error) {
        console.log("localStorage access denied")
        
    }
}