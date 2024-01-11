import { useEffect } from "react";
import { SocialMediaBtnGroup } from "../button";
import addOrientationHandler from "../orientation";

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
