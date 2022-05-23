import React, { useEffect, useRef } from 'react';

const Group = ({ group, updateGroups }) => {
  const checkRef = useRef();

  useEffect(() => {
    checkRef.current.addEventListener('click', () => {
      if (checkRef.current.checked) {
        console.log('changing the group to ', group);
        updateGroups(group, false);
      } else {
        updateGroups(group, true);
      }
    });
    console.log('event added');
  }, []);

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
