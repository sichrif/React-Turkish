import React,{useState} from "react";

import { Icon } from '@iconify/react';
import accountEdit from '@iconify/icons-mdi/account-edit';
import deleteEmptyOutline from '@iconify/icons-mdi/delete-empty-outline';
import './readstyle.module.css';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [role, setRole] = useState('');
  if(contact.isAdmin==true){
    setRole('Admin')
  }else{
    setRole('Client')
  }
    return (
      <tr>
        <td>{contact.username}</td>
        <td>{role}</td>
        <td>{contact.phoneNumber}</td>
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