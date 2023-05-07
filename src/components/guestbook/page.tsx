import { useEffect, useState } from "react";
import * as Action from "./actions";
import GuestbookForm from "./form";
import GuestbookList from "./list";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GG_CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

function GuestbookBody() {

  return (
    <div className="guestbook-wrapper mb-5">
      <GoogleOAuthProvider clientId={GG_CLIENT_ID}>
        <div className="btn-grp oauth-grp pb-4">
          {localStorage.getItem("third-party") === null ? (
            <Action.SignIn />
          ) : (
            <>
              <GuestbookForm />
              <Action.SignOut />
            </>
          )}
        </div>
      </GoogleOAuthProvider>
      <hr />
      <div className="mt-5 guestbook-txt">
            <GuestbookList />
      </div>
    </div>
  );
}

export default GuestbookBody;
