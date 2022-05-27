import React, { useEffect, useRef, useState } from 'react';
import Menubar from './menubar';
import Group from './Group';
import Contact from './Contact';

const DisplayContacts = () => {
  // dummy data
  const demoData = [
    {
      groupID: 'grp-6flbrkl35o3bsa',
      groupName: 'Group 1',
      contacts: [
        {
          contactID: 'contact-6flbrkl35o3m6r',
          contactName: 'mark',
          contactNumber: '1111111111',
        },
        {
          contactID: 'contact-6flbrkl35o3tql',
          contactName: 'Sam',
          contactNumber: '9999999999',
        },
        {
          contactID: 'contact-6flbrkl35o42og',
          contactName: 'test user',
          contactNumber: '9198989898',
        },
      ],
    },
    {
      groupID: 'grp-fvjwfc1cl3fej0cq',
      groupName: 'Group 2',
      contacts: [
        {
          contactID: 'contact-fvjwfc1cl3fej75c',
          contactName: 'test',
          contactNumber: '12334567890',
        },
      ],
    },
    {
      groupID: 'grp-fvjwfc1cl3fasdfg',
      groupName: 'Group 3',
      contacts: [
        {
          contactID: 'contact-fvjwfc1cl3fej75c',
          contactName: 'test',
          contactNumber: '5555555555',
        },
      ],
    },
  ];

  const [selectedGroups, setselectedGroups] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectReq, setSelectReq] = useState({ data: [{}], remove: false });
  const [activeTab, setActiveTab] = useState('numbers-list');
  const [selectedAll, setSelectedAll] = useState(false);

  const updateGroups = (newGroup, remove, all = false) => {
    setSelectReq((selectReq) => ({
      data: [newGroup],
      remove: remove,
    }));
  };

  const findGrp = (gid, data = demoData) => {
    return data.filter((group) => group.groupID === gid)[0];
  };

  const selectRef = useRef();
  useEffect(() => {
    selectRef.current.addEventListener('click', () => {
      if (selectRef.current.checked) {
        setSelectReq({ data: demoData, remove: false });
        setSelectedAll(true);
      } else {
        setselectedGroups([]);
        setSelectedContacts([]);
        setSelectedAll(false);
      }
    });
  }, []);

  useEffect(() => {
    selectReq.data.map((group) => {
      if (group.groupID) {
        const gid = group.groupID;
        if (!selectReq.remove && !selectedGroups.includes(gid)) {
          if (selectedGroups.length !== demoData.length)
            setselectedGroups((selectedGroups) => [...selectedGroups, gid]);
        } else {
          setselectedGroups((selectedGroups) =>
            selectedGroups.filter((group) => group !== gid)
          );
        }
      }
    });
  }, [selectReq]);

  useEffect(() => {
    if (selectedGroups.length === demoData.length) {
      selectRef.current.checked = true;
      setSelectedAll(true);
    } else if (selectedGroups.length === 0) {
      setSelectedAll(false);
    } else if (selectedGroups.length < demoData.length) {
      selectRef.current.checked = false;
    }

    const temp = selectedGroups.map((gid) => {
      const group = findGrp(gid);
      if (group) {
        return group.contacts.map((contact) => contact.contactNumber);
      }
    });
    setSelectedContacts([].concat(...temp));
  }, [selectedGroups]);

  return (
    <>
      <Menubar />
      <section className='home-section mainmenu-page'>
        <div className='container-fluid'>
          <div className='row '>
            <div className='col-xl-7 col-lg-12'>
              <div className='card-box fcard'>
                <div className='card-tt'>Mobile Number</div>
                <div className='d-md-block d-flex justify-content-center align-content-center'>
                  <div className='tab'>
                    <div className='btn_tb'>
                      <button
                        className={
                          activeTab === 'numbers-list'
                            ? 'tablinks active'
                            : 'tablinks'
                        }
                        onClick={() => setActiveTab('numbers-list')}
                        id='defaultOpen'
                      >
                        Number List
                      </button>
                      <button
                        className={
                          activeTab === 'contact-group'
                            ? 'tablinks active'
                            : 'tablinks'
                        }
                        onClick={() => setActiveTab('contact-group')}
                      >
                        Contact Group
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id='numberlist'
                  className={
                    activeTab === 'numbers-list'
                      ? 'tabcontent display-block'
                      : 'tabcontent display-none'
                  }
                >
                  <div className='form-group'>
                    <textarea
                      className='form-control thadusi'
                      id='exampleFormControlTextarea1'
                      placeholder='Your Number Display Here'
                    ></textarea>
                  </div>
                  <div className='info-cir d-flex  align-items-center'>
                    <img
                      src='assets/img/info_circle_outline.png'
                      className='img-fluid'
                      alt=''
                    />
                    <span>Your Number Display Here</span>
                  </div>
                </div>

                <div
                  id='contactgroup'
                  className={
                    activeTab === 'contact-group'
                      ? 'tabcontent display-block'
                      : 'tabcontent display-none'
                  }
                >
                  <div className='contact-group-roz'>
                    <div className='row my-hcut'>
                      <div className='col-xl-5 col-lg-6 col-md-5 col-sm-6 px-0'>
                        <div className='tbl-header d-flex align-items-end justify-content-between'>
                          <div className='t-title'>Group Name</div>
                          <div className='t-select'>
                            <div className='form-check form-check-inline mr-0  align-items-center'>
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox1'
                              >
                                Select all
                              </label>
                              <input
                                className='form-check-input mr-0'
                                type='checkbox'
                                name='inlineCheckbox1'
                                id='inlineCheckbox1'
                                value='option1'
                                ref={selectRef}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='t-body'>
                          <div>
                            {demoData.map((group) => (
                              <Group
                                group={group}
                                updateGroups={updateGroups}
                                updateContacts={setSelectedContacts}
                                selectedContacts={selectedContacts}
                                key={group.groupID}
                                selected={selectedAll}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-6 col-md-7 col-sm-6 pl-sm-3 pl-0 mt-sm-0 mt-4 pr-0'>
                        <div className='tbl-header d-flex align-items-end justify-content-between'>
                          <div className='t-title'>
                            {selectedGroups.map(
                              (gid) => findGrp(gid).groupName + ', '
                            )}
                          </div>
                          <div className='t-select'>
                            <div className='form-check form-check-inline mr-0  align-items-center'>
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox2'
                              >
                                Select all
                              </label>
                              <input
                                className='form-check-input mr-0'
                                type='checkbox'
                                name='inlineCheckbox2'
                                id='inlineCheckbox2'
                                value='option1'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='t-body'>
                          <div>
                            {selectedGroups.length !== 0
                              ? selectedGroups.map((gid) => {
                                  const group = findGrp(gid);
                                  if (group) {
                                    return group.contacts.map((contact) => {
                                      return (
                                        <Contact
                                          contact={contact}
                                          key={contact.contactID}
                                          updateContacts={setSelectedContacts}
                                          selectedContacts={selectedContacts}
                                          selected={selectedAll}
                                        />
                                      );
                                    });
                                  } else {
                                    return <div>{'no contacts'}</div>;
                                  }
                                })
                              : 'no groups selected'}
                          </div>
                        </div>
                        <div className='btnoutline-rk rkedittop'>
                          <a href=' '>Load Selected Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-5 col-lg-12 mt-xl-0 mt-4'>
              <div className='card-box scard'>
                <div className='card-tt d-flex justify-content-between align-items-center'>
                  <div className='mess-edit-box-my'>Message</div>
                  <div className='senderidmessage'>
                    Sender ID :
                    <span>
                      <select
                        className='custom-select'
                        id='smstemplatee'
                        required
                      >
                        <option value=''>SKYSS</option>
                        <option value='1'>SKYAS</option>
                        <option value='2'>SKYCS</option>
                        <option value='3'>SKYVS</option>
                      </select>
                    </span>
                  </div>
                </div>

                <div className='formmainmenup'>
                  <div className='form-row'>
                    <div className='form-group col-12'>
                      <label htmlFor='smstemplate'>SMS Template*</label>
                      <div className='d-flex align-items-center justify-content-between'>
                        <select
                          className='custom-select'
                          id='smstemplate'
                          required
                        >
                          <option value=''>Select a menu*</option>
                          <option value='1'>Breakfast</option>
                          <option value='2'>Lunch</option>
                          <option value='3'>Dinner</option>
                        </select>
                        <div className='valid-tooltip'>Looks good!</div>
                        <div className='invalid-tooltip'>
                          Please choose a menu.
                        </div>
                        <div className='btnoutline-rk rkbtn-12'>
                          <a
                            href=' '
                            className='d-flex align-items-center justify-content-around'
                            data-toggle='modal'
                            data-target='#addsmstemplatepop'
                          >
                            {' '}
                            <img src='assets/img/addsymbol.png' alt='' /> Add
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='form-group col-sm-6  messcoledi'>
                      <label htmlFor='dltid'>Dlt Template Id*</label>
                      <div className='d-flex align-items-center justify-content-between'>
                        <input
                          type='text'
                          className='form-control'
                          id='dltid'
                          placeholder='Type Here........'
                          required
                        />
                        <div className='valid-tooltip'>Looks good!</div>
                        <div className='invalid-tooltip'>
                          Please add a name.
                        </div>
                      </div>
                    </div>

                    <div className='form-group col-sm-6  messcoledi '>
                      <label htmlFor='name' className='d-sm-block d-none'>
                        &nbsp;
                      </label>
                      <select
                        className='custom-select'
                        id='smstemplate'
                        required
                      >
                        <option value=''>Select a menu*</option>
                        <option value='1'>Breakfast</option>
                        <option value='2'>Lunch</option>
                        <option value='3'>Dinner</option>
                      </select>
                    </div>
                    <div className='form-group col-12 singltom'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <textarea
                          className='form-control hadusi'
                          id='smstype'
                          placeholder='Type here......'
                          required
                        ></textarea>
                        <div className='valid-tooltip'>Looks good!</div>
                        <div className='invalid-tooltip'>
                          Please add a name.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='info-cir d-flex  align-items-center'>
                    <img
                      src='assets/img/info_circle_outline.png'
                      className='img-fluid'
                      alt=''
                    />
                    <span>Your Number Display Here</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 botm-send '>
              <div className='card-box tcard'>
                <div className='formmainmenup'>
                  <div className='row align-items-center'>
                    <div className='col-xl-6  col-sm-6'>
                      <div className='form-row d-flex align-items-center justify-content-between   flex-row'>
                        <div className='form-group col-xl-8 col-12 d-xl-flex  d-block align-items-center '>
                          <label htmlFor='sendat' className='mb-0 stcs'>
                            SMS Template*
                          </label>
                          <div className='d-flex align-items-center ml-xl-3 ml-0'>
                            <input
                              type='date'
                              className='form-control '
                              id='sendat'
                              placeholder='Type Here........'
                              required
                            />
                            <div className='valid-tooltip'>Looks good!</div>
                            <div className='invalid-tooltip'>
                              Please add a name.
                            </div>
                          </div>
                        </div>

                        <div className='form-group col-xl-4 col-12  mt-xl-0 mt-2'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <input
                              type='time'
                              className='form-control '
                              id='sentile'
                              placeholder='Type Here........'
                              required
                            />
                            <div className='valid-tooltip'>Looks good!</div>
                            <div className='invalid-tooltip'>
                              Please add a name.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-xl-6 col-sm-6 rmtstsn'>
                      <div className='form-row d-flex align-items-center justify-content-sm-end justify-content-center  flex-row'>
                        <div>
                          <div className='t-select'>
                            <div className='form-check form-check-inline mr-0  align-items-center'>
                              <input
                                className='form-check-input mr-2'
                                type='checkbox'
                                name='sendrty'
                                id='sendrty'
                                value='option1'
                              />
                              <label
                                className='form-check-label stcs rrtyc'
                                htmlFor='sendrty'
                              >
                                Retry for
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className='form-group '>
                          <div className='d-flex align-items-center mx-2'>
                            <input
                              type='number'
                              className='form-control rtycss'
                              id='sendat'
                              placeholder='100'
                              required
                            />
                            <div className='valid-tooltip'>Looks good!</div>
                            <div className='invalid-tooltip'>
                              Please add a name.
                            </div>
                          </div>
                        </div>
                        <div className='mr-3 stcs rsmd'>minutes approx.</div>
                        <div className='btnoutline-rkfli ecbtnsend'>
                          <a href=' '>Send SMS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayContacts;
