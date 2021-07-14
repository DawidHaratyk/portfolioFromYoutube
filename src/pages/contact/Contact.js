import React from "react";
import Headline from "../../components/headline/Headline";
import InfoItem from "../../components/InfoItem/InfoItem";

function Contact() {
  return (
    <div className="contact">
      <Headline text="Contact" />
      <div className="info">
        <div className="info__map-container">
          {window.innerWidth > 800 ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39691.63480262418!2d-0.3337990449535667!3d51.55490157998088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116207a6d0bd%3A0xaf7016a2cadb21e4!2sWembley%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1625817629828!5m2!1spl!2spl"
              width="650"
              height="1000"
              loading="lazy"
              className="info__map"
            ></iframe>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39691.63480262418!2d-0.3337990449535667!3d51.55490157998088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116207a6d0bd%3A0xaf7016a2cadb21e4!2sWembley%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1625817629828!5m2!1spl!2spl"
              width="400"
              height="300"
              loading="lazy"
              className="info__map"
            ></iframe>
          )}
        </div>
        <div className="info__items">
          <InfoItem
            headline="Phone"
            firstText="+257 7756110718"
            secondText="+0333 6782 8792"
          />
          <InfoItem
            headline="Email"
            firstText="loremipsum@hmail.com"
            secondText="abcloremipsum@gmail.com"
          />
          <InfoItem
            headline="Address"
            firstText="25 Paramount St. PN4 8H9, London"
            secondText="United Kingdom"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
