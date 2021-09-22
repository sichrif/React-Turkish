import React,{useState,useEffect} from "react";
import Avatar from 'react-avatar';

import { Icon } from '@iconify/react';
import accountEdit from '@iconify/icons-mdi/account-edit';
import deleteEmptyOutline from '@iconify/icons-mdi/delete-empty-outline';
import './readstyle.module.css';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if(contact.isAdmin==true){
      setRole('Admin')
    }else{
      setRole('Client')
    }
   }, []);

    return (
      <tr>
        <td><Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', '#df4e6a'])} size="40"  name={contact.firstname + " " + contact.lastname}  /></td>
        <td>{contact.firstname}</td>
        <td>{contact.lastname}</td>
         <td>{contact.email}</td>
        <td>
          <Icon  style="    cursor: pointer !important;"         onClick={(event) => handleEditClick(event, contact)}
 icon={accountEdit} color="#df4e6a"  width="30" height="30" />
           
        <Icon style="    cursor: pointer;" icon={deleteEmptyOutline} onClick={() => handleDeleteClick(contact.id)} color="#df4e6a" width="30" height="30" />

      </td>
    </tr>
  );
};

export default ReadOnlyRow;