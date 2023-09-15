// import React from "react";
interface Contact {
  id: number;
  name: string;
  email: string;
}
export default function ContactList({
  contacts,
  selectedId,
  onSelect,
}: {
  contacts: Contact[];
  selectedId: number;
  onSelect: (id: Contact['id']) => void;
}) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li style={{display:'inline-block'}} key={contact.id}>
            <button onClick={()=> {
              onSelect(contact.id)
            }}>{contact.id === selectedId ? <b>{contact.name}</b> : contact.name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
