import { useState, useEffect } from 'react'
import ContactList from './ContactList'
import EditContact from './EditContact'

interface Contact {
  id: number;
  name: string;
  email: string;
}

export default function RestForm() {
  const [contacts, setContacts] = useState(initialContacts);

  const [selectedId,setSelectedId] = useState(0);

  const selectedContact = contacts.find(c=>c.id === selectedId) || contacts[0];

  useEffect(()=>{
   console.log('每次渲染都会执行代码');
   return ()=>console.log('组件卸载时执行代码');
  },[])

  function handleSave(updateData:Contact){
    const nextContacts = contacts.map(c=>{
      if(c.id === updateData.id){
        return updateData
      }
      return c
    })
    setContacts(nextContacts);
  }
  return (
    <div>
        <ContactList contacts={contacts} selectedId={selectedId} onSelect={id=>setSelectedId(id)} />
        <hr />
        <EditContact key={selectedId} initialData={selectedContact} onSave={handleSave} />
    </div>
  )
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
