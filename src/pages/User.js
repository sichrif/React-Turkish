import React, { useState,useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "../components/_dashboard/user/ReadOnlyRow";
import EditableRow from "../components/_dashboard/user/EditableRow";
import authHeader from "../services/auth-header";
import axios from 'axios';
import "./userstyle.module.css";
const User = () => {
 const [contacts, setContacts] = useState([]);
 const [toggle, setToggle] = useState(false);

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  useEffect(() => {
    if(!toggle){
    getUsers();}
   }, []);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const getUsers = () =>{
      axios.get(process.env.REACT_APP_BACKEND_URL+'/api/users', { headers: authHeader() })
      .then(res=>setContacts(res.data))
    .catch((err)=>{
      console.log(err);
    });
     }
 
 
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact._id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact._id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  }; 
  const handleDeleteClick = (contactId) => {
     axios.delete(process.env.REACT_APP_BACKEND_URL+'/api/users/'+contactId, { headers: authHeader() })
    .then((resp)=>{
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact._id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
      console.log(resp);
    })
    .catch(err=>console.log(err))
  
  };
   return (
       <><form onSubmit={handleEditFormSubmit}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First name</th>
            <th>Last name</th>
             <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              {editContactId === contact._id ? (
                <EditableRow
                  Icon="accountEdit"
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick} />
                  
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick} />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
    {/* <h2>Add a Contact</h2><form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange} />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange} />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange} />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange} />
        <button type="submit">Add</button>
      </form> */}
      
      </>
   );
};

export default User;