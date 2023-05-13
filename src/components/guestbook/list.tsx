import { useEffect, useState } from "react";

const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

function GuestbookList({maxGuests} : {maxGuests: number}) {
    /**
     * Implement infinite scrolling for guestbook
     * - messageNums The number of messages for each
     */
    const messageNums = 40;
    const [startId, setStartId] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [msgs, setMsgs] : [any, any] = useState([]);

    useEffect(() => {

        const fetchMsgs = async (startId: number) => {
            const nextStartId = startId + messageNums;
            if (nextStartId >= maxGuests) setHasMore(!hasMore);

            const fetchAPI = await fetch(`${DOMAIN}/guestbook/list/${startId}`);
            const data = await fetchAPI.json();
            setMsgs([...msgs, ...data]);
        }

        if (hasMore) fetchMsgs(startId);
    }, [startId]);

    useEffect(() => {
        function onScroll() {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight && hasMore) {
                setStartId(startId => startId + messageNums);
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [msgs]);

    const guestbook = document.getElementsByClassName("guestbook-txt")[0] as HTMLElement;
    const wrapper = document.getElementsByClassName("guestbook-wrapper")[0] as HTMLElement;
    useEffect(() => {
      if (wrapper.childNodes.length !== 0) wrapper.style.height = "auto";
    }, [guestbook])

    return (
        <>
            {msgs.map((msg: any, index: number) => {
                return(
                    <p key={index} className="mb-3">
                        <b>{msg.guest.name}:</b>{" "}
                        {msg.guest.message}
                    </p>
                );
            })}
        </>
    );
}

export default GuestbookList;