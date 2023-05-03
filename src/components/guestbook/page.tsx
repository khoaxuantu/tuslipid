import { useState } from "react";
import * as Action from "./actions";
import Form from "./form";

function GuestbookBody() {

  return (
    <div className="project-wrapper">
      <div className="btn-grp oauth-grp pb-4">
        {localStorage.getItem("accessToken") === null ? (
          <Action.SignIn />
        ) : (
          <>
            <Form />
            <Action.SignOut />
          </>
        )}
      </div>
      <hr />
      <div className="mt-5 ps-2 pe-2">
        
      </div>
    </div>
  );
}

export default GuestbookBody;
