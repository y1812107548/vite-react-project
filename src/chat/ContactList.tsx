import React from "react";
interface Contact {
  name: string;
  email: string;
}
export default function ContactList({
  contacts,
  selectedContact,
  onSelect,
}: {
  contacts: Contact[];
  selectedContact: Contact;
  onSelect: (contact: Contact) => void;
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email} >
            <button onClick={() => onSelect(contact)}>
                {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
