import { useNavigate } from "react-router-dom";

export function GithubOauth() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    let navigate = useNavigate();

    if (codeParam && (localStorage.getItem("accessToken") === null)) {
        const getAccessToken = async function () {
            await fetch("http://localhost:3001/oauth/github/access_token?code=" + codeParam, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem("accessToken", data.access_token);
                    localStorage.setItem("third-party", "github");
                    localStorage.setItem("action", "signout");
                    return navigate("/guestbook");
                }
            });
        }

        getAccessToken();
    }

    return null;
}

export default GithubOauth;