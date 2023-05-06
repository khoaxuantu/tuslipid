import { useEffect, useState } from "react";

interface IMessage {
    name: string | null,
    message: string
}

function GuestbookForm() {
    const [User, setUser] = useState(null);

    // console.log(User);

    async function fetchUser(thirdParty: string) {
        console.log(`get ${thirdParty} user`);
        const fetchAPI = await fetch(`http://localhost:3001/oauth/${thirdParty}/user`, {
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
        setUser(response.login);
        localStorage.removeItem("accessToken");
        localStorage.setItem("data", JSON.stringify({
            name: response.login
        }));
    }

    const getGoogleUser = async () => {
        const response = await fetchUser("google");
        setUser(response.name);
        localStorage.removeItem("accessToken");
        localStorage.setItem("data", JSON.stringify({
            name: response.name
        }));
    }

    // useEffect(() => {
    //     if (localStorage.getItem("third-party") === "github") {
    //         getGithubUser();
    //     }
    //     else if (localStorage.getItem("third-party") === "google") {
    //         getGoogleUser();
    //     }
    // }, []);

    async function submitHandler(e: any) {
        e.preventDefault();

        const input = document.getElementById("your-message") as HTMLFormElement;
        const newMessage: IMessage = {
            name: User,
            message: input.value
        }
        

    }

    return (
        <form className="mb-3 guestbook-form row" onSubmit={submitHandler}>
            <input 
                className="col-10 ps-3 pt-3 pb-3 pe-5" 
                placeholder="Your message..."
                autoComplete="off"
                type="text" name="your message" aria-label="your message" id="your-message" />
            <button className="col-2 p-2" type="submit"><b>Sign</b></button>
        </form>
    );
}

export default GuestbookForm;