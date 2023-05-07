import { useEffect, useState } from "react";
import { IMessage } from "./form";

function GuestbookList() {
    const messageNums = 20;
    const [startId, setStartId] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [msg, setMsg] = useState([]);

    // const guestbook = document.getElementsByClassName("guestbook-txt")[0] as HTMLElement;
    // const wrapper = document.getElementsByClassName("guestbook-txt")[0] as HTMLElement;
    // console.log(wrapper);
    // useEffect(() => {
    //   if (wrapper !== undefined && wrapper.childNodes.length !== 0) wrapper.style.height = "auto";
    // }, [guestbook])

    return (
        <>
            <p className="mb-3">
              <b>Username:</b> Hello world
            </p>
            <p className="mb-3">
              <b>Username:</b> Hello world
            </p>
            <p className="mb-3">
              <b>Username:</b> Hello world
            </p>
            <p className="mb-3">
                <b>Username:</b> Whether seeking innovative solutions or just an interesting conversation, feel free to contact me at 👉 henmanuelvargas@gmail.com or through this link: https://wa.me/message/2AGAMZCPXIXNG1. Together, we can face future technological challenges and pave the way to success 🚀🌒.
            </p>
        </>
    );
}

export default GuestbookList;