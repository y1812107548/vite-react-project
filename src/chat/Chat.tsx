import { useState } from "react";
import ContactList from "./ContactList";
import ChatTo from "./ChatTo";
interface Contact {
  name: string;
  email: string;
}
const contacts: Contact[] = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export default function Chat() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      ></ContactList>
      <ChatTo contact={to} key={to.email}></ChatTo>
    </div>
  );
}
