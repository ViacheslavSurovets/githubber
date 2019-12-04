import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../../components/contacts/ContactFilter'

function About() {
  return (
    <div className="grid-2 m-1">
      <div>
        <ContactForm/>
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}

export default About;
