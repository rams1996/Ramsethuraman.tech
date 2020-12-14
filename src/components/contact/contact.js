import React, { useState } from "react";
import "./contact.css";
import emailjs from 'emailjs-com';

function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);

    emailjs.sendForm('gmail', 'portfolio', e.target, 'user_TXCFEPcEWePGknVkRNfrb')
      .then((result) => {
          setSent(false);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contactCont">
      <div class="primaryContact">
        <p className="titleText">Contact Me</p>
        <p className="paraText">
          Currently I'm interested in working on projects as a Software Engineer and open to collaborations. If you have a project that you think I can help with, or if you want to hire me please feel free to reach out!
        </p>
        <p className="paraText">
          You can reach me via <span className="coloured">ramsethuraman123@gmail.com</span>
        </p>
      </div>

      {sent ? 
      <div className="loadingScreen">
        <img src="/assets/loading/send.svg" alt="loading.."/>
      </div> : ""}

      <div className="secondaryContact">
        <div className="contactContents">
            <form onSubmit={sendEmail} className="contactForm">
              <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="FULL NAME"
                  name="from_name"
                  required
              />
              <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="from_email"
                  required
              />
              <textarea
                  class="form-control"
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  required
              ></textarea>
              <input type="submit" className="emailBtn" value="Send" />
            <hr style={{ border: "0.5px solid white" }} />
            </form>
            <div align="center" className="socialbtns">
            <ul>
              <li>
              <a href="https://www.linkedin.com/in/rams1996/" class="fa fa-lg fa-linkedin" target="_blank"></a>
              </li>
              <li>
              <a href="https://github.com/rams1996" class="fa fa-lg fa-github" target="_blank"></a>
              </li>
              <li>
              <a href="https://leetcode.com/ramsethuraman" class="fa fa-lg fa-code" target="_blank"></a>
              </li>
              <li>
              <a href="https://binarysearch.com/@/ramsethuraman" class="fa fa-lg fa-codepen" target="_blank"></a>
              </li>
              <li>
              <a href="https://drive.google.com/file/d/1BE30ghAvdJVT1VTYOmEN8XtZiWeuwYoL/view?usp=sharing" class="fa fa-lg fa-cloud" target="_blank"></a>
              </li>
              
              
            </ul>
            </div>
        </div>
      </div>

    </div>
  );
}



export default Contact;
