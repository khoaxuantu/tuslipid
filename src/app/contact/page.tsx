'use client';

import { useEffect } from "react";
import { SocialMediaBtnGroup } from "@/components/button_group";
import addOrientationHandler from "@/components/orientation";

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
