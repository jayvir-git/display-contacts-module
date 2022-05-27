import React, { useEffect, useRef, useState } from 'react';

const Group = ({
  group,
  updateGroups,
  updateContacts,
  selectedContacts,
  selected,
}) => {
  const checkRef = useRef();
  const [contacts, setContacts] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    checkRef.current.addEventListener('click', () => {
      if (checkRef.current.checked) {
        updateGroups(group, false);
      } else {
        updateGroups(group, true);
      }
    });
    const contactNumbers = group.contacts.map(
      (contact) => contact.contactNumber
    );
    setContacts((contacts) => [...contacts, contactNumbers]);
  }, []);

  useEffect(() => {
    if (selected) checkRef.current.checked = true;
    else checkRef.current.checked = false;
  }, [selected]);

  return (
    <div className='form-check form-check-inline b-select mr-0  align-items-center'>
      <input
        className='numberlist form-check-input mr-0'
        type='checkbox'
        id='n1'
        value='n1'
        ref={checkRef}
      />
      <label className='form-check-label' htmlFor='n1'>
        {group.groupName}
      </label>
    </div>
  );
};

export default Group;
