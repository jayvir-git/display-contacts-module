import React, { useEffect, useRef } from 'react';

const Contact = ({ contact, updateContacts, selectedContacts, selected }) => {
  const contactRef = useRef();

  useEffect(() => {
    contactRef.current.addEventListener('click', () => {
      if (contactRef.current.checked)
        updateContacts((contacts) => [...contacts, contact.contactNumber]);
      else {
        updateContacts((current) =>
          current.filter((c) => c !== contact.contactNumber)
        );
      }
    });
    if (contactRef.current.checked)
      updateContacts((contacts) => [...contacts, contact.contactNumber]);
  }, []);

  return (
    <div
      className='form-check form-check-inline b-select mr-0  align-items-center'
      key={contact.contactID}
    >
      <input
        className='contactgroupss form-check-input mr-0'
        type='checkbox'
        id='m1'
        value='m1'
        defaultChecked
        ref={contactRef}
      />
      <label className='form-check-label' htmlFor='m1'>
        {contact.contactNumber}
      </label>
    </div>
  );
};

export default Contact;
