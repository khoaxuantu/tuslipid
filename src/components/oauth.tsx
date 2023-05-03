import { useNavigate } from "react-router-dom";

export function Oauth() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    let navigate = useNavigate();

    if (codeParam && (localStorage.getItem("accessToken") === null)) {
        const getAccessToken = async function () {
            await fetch("http://localhost:3001/oauth/getGithubAccessToken?code=" + codeParam, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem("accessToken", data.access_token);
                    return navigate("/guestbook");
                }
            });
        }

        getAccessToken();
    }

    return <div></div>;
}

export default Oauth;