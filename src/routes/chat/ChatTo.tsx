import { useState } from "react";
interface Contact {
  name: string;
  email: string;
}
export default function ChatTo({ contact }: { contact: Contact }) {
  const [text, setText] = useState("");

  return (
    <section className="chat-to">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>发送给 :{contact.name}</button>
    </section>
  );
}
