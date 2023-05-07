import { useEffect } from "react";
import { LoginButton } from "../../lib/factory/buttonBase";
import { useNavigate } from "react-router-dom";
import { oauthInfoList } from "../../lib/general_info";
import { useGoogleLogin } from "@react-oauth/google";

const { 
    REACT_APP_BACKEND_DOMAIN,
    REACT_APP_GITHUB_CLIENT_ID } = process.env;

export function SignIn() {
    
    /**
     * Login with Github will redirect user to an authorization callback URL
     * so I redirect to a new route "/oauth" instead of back to this route "/guestbook"
     * 
     * At route "/oauth", the received authorization code will be fetched to
     * the backend api to process authentication. After backend responses 
     * a access_token successfully, users will be redirected back to "/guestbook"
     */
    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + REACT_APP_GITHUB_CLIENT_ID);
    }

    /**
     * Login with Google uses @react-oauth/google library, which authorizes
     * in popup mode. The code is returned to in-browser's app callback handler,
     * without users needing to leave the website
     * 
     * https://developers.google.com/identity/oauth2/web/guides/how-user-authz-works#when_using_the_auth_code_flow
     */
    let navigate = useNavigate();
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async ({code}) => {
            console.log(code);

            if (localStorage.getItem("accessToken") === null) {
                await fetch(`${REACT_APP_BACKEND_DOMAIN}/oauth/google/access_token?code=` + code, {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    if (data.access_token) {
                        localStorage.setItem("accessToken", data.access_token);
                        localStorage.setItem("third-party", "google");
                        return navigate("/guestbook");
                    }
                    console.log(data);
                });
            }
        },
        flow: "auth-code",
    });

    const onClickHandlers: any[] = [
        loginWithGithub,
        () => loginWithGoogle()
    ];

    return (
        <>
            {
                oauthInfoList.map((oauth, index) => {
                    return (
                        <div key={oauth.name} className="col-6 btn-oauth-box">
                            <LoginButton 
                                onClick={onClickHandlers[index]}
                                {...oauth} />
                        </div>
                    );
                })
            }
        </>
    );
}

export function SignOut() {
    let navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("third-party");
        localStorage.removeItem("data");
        return navigate("/guestbook");
    }

    return (
        <button className="btn btn-rect" onClick={logOut}>
            Sign out
        </button>
    );
}