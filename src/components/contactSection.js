import React from 'react';
import Container from './container';
import * as contactStyles from './contact-section.module.css'
import SectionTitle from './sectionTitle';

const InputFeild = (props) => {
  const {type, placeholder} = props;
  return (
    <div className={contactStyles.formInput}>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}


const ContactSection = () => {
  return (
    <div>
      <Container>
        <div className={contactStyles.wrapper}>
          <div className={contactStyles.title}>
            <SectionTitle
              title="Contact Section Title Here"
              paragraph="Scing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era."
            />
          </div>
          <form className={contactStyles.form}>
            <InputFeild type="text" placeholder="Name" />
            <InputFeild type="text" placeholder="Phone" />
            <InputFeild type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;