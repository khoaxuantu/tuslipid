import { useEffect, useState } from "react";

const { REACT_APP_BACKEND_DOMAIN } = process.env;

export interface IMessage {
    name: string | null,
    message: string
}

function capitalFirstLetter(s: string): string {  
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function GuestbookForm() {
    const [User, setUser] = useState("");

    // Take username for every page restart
    let username: string | null = null;
    if (localStorage.getItem("data") !== null) {
        username = JSON.parse(localStorage.getItem("data") as any).name;
    }

    // console.log(User);

    async function fetchUser(thirdParty: string) {
        console.log(`get ${thirdParty} user`);
        const fetchAPI = await fetch(`${REACT_APP_BACKEND_DOMAIN}/oauth/${thirdParty}/user`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            }
        });
        const response = await fetchAPI.json();
        return response;
    }

    const getGithubUser = async () => {
        const response = await fetchUser("github");
        localStorage.removeItem("accessToken");
        localStorage.setItem("data", JSON.stringify({
            name: response.login
        }));
        setUser(response.login);
    }

    const getGoogleUser = async () => {
        const response = await fetchUser("google");
        localStorage.removeItem("accessToken");
        localStorage.setItem("data", JSON.stringify({
            name: response.name
        }));
        setUser(response.name);
    }

    useEffect(() => {
        if (localStorage.getItem("data") === null) {
            if (localStorage.getItem("third-party") === "github") {
                getGithubUser();
            }
            else if (localStorage.getItem("third-party") === "google") {
                getGoogleUser();
            }
        }
    }, []);
    
    async function submitHandler(e: any) {
        e.preventDefault();
        
        const data = JSON.parse(localStorage.getItem("data") as any);
        const input = document.getElementById("your-message") as HTMLFormElement;
        if (input.value.length === 0) {
            alert("Your message cannot be empty");
            return;
        }
        if (input.value.length > 512) {
            alert("Too long! Won't read -_-");
            return;
        }

        const newMessage: IMessage = {
            name: data.name,
            message: input.value
        }
        console.log(JSON.stringify(newMessage));

        await fetch(`${REACT_APP_BACKEND_DOMAIN}/guestbook/add`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newMessage),
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <>
            <p className="mb-2">
                Signed in as {" "} 
                <b>{username !== null ? username : User}</b> {" "}
                via <b>{capitalFirstLetter(localStorage.getItem("third-party") as string)}</b>
            </p>
            <form className="mb-3 guestbook-form row" onSubmit={submitHandler}>
                <input 
                    className="col-10 ps-3 pt-3 pb-3 pe-5" 
                    placeholder="Your message..."
                    autoComplete="off"
                    type="text" name="your message" aria-label="your message" id="your-message" />
                <button className="col-2 p-2" type="submit"><b>Sign</b></button>
            </form>
        </>
    );
}

export default GuestbookForm;