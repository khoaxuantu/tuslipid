import { useNavigate } from "react-router-dom";

const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN; 

export function GithubOauth() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    let navigate = useNavigate();

    if (codeParam && (localStorage.getItem("accessToken") === null)) {
        const getAccessToken = async function () {
            await fetch(`${DOMAIN}/oauth/github/access_token?code=` + codeParam, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem("accessToken", data.access_token);
                    localStorage.setItem("third-party", "github");
                    return navigate("/guestbook");
                }
            });
        }

        getAccessToken();
    }

    return null;
}

export default GithubOauth;