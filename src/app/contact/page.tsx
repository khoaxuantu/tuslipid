"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SocialMediaBtnGroup } from "@/components/button_group";
import addOrientationHandler from "@/components/orientation";

function Contact() {
  useEffect(() => {
    addOrientationHandler();
  }, []);

  return (
    <div className="sl-l-container contact-l-wrapper center contact-c-txt__body transition-menu">
      <h2 className="contact-c-txt__header p-2">
        ~ Oi ~<br></br>
        Say hello to me by one of the following {":)"}
      </h2>
      <SocialMediaBtnGroup />
      <Link href="/" className="sl-c-btn sl-c-btn__rect" id="go-back" prefetch={true}>
        Home
      </Link>
    </div>
  );
}

export default Contact;
