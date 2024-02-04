'use client';

import { useEffect } from "react";
import { SocialMediaBtnGroup } from "../../components/button";
import addOrientationHandler from "../../components/orientation";

function Contact() {
  useEffect(() => {
    addOrientationHandler();
  }, []);

  return (
    <>
      <SocialMediaBtnGroup />
    </>
  )
}

export default Contact;
