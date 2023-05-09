import { redirect } from "react-router-dom"

export async function requireAuth() {
    //const isLoggedIn = true
    const isLoggedIn = localStorage.getItem("loggedin")
    console.log(isLoggedIn)
    

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}