import { SocialMediaBtnGroup } from "../button";
import addOrientationHandler from "../orientation";

function Contact() {
  addOrientationHandler();

  return (
    <>
      <SocialMediaBtnGroup />
    </>
  )
}

export default Contact;
