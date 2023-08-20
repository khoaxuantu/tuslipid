import { useEffect, useState } from "react";
import * as Action from "./actions";
import GuestbookForm from "./form";
import GuestbookList from "./list";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GG_CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

function GuestbookBody() {
  const [maxGuests, setMaxGuests] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMaxGuests = async () => {
      try {
        const fetchAPI = await fetch(`${DOMAIN}/guestbook/totalRecords`, { signal });
        const curMaxGuests = await fetchAPI.json();
        setMaxGuests(curMaxGuests[0]["count"]);
      } catch (error) {
        console.log(error)
      }
    };

    fetchMaxGuests();

    return () => {
      controller.abort();
    }
  }, []);

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
      <article className="mt-5 guestbook-txt">
        {maxGuests > 0 ? (
          <GuestbookList maxGuests={maxGuests} />
        ) : (
          <p>Waiting for the first message...</p>
        )}
      </article>
    </div>
  );
}

export default GuestbookBody;
