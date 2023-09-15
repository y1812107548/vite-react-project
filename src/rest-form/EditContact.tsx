import { useState } from "react";
interface Contact {
  id: number;
  name: string;
  email: string;
}
export default function EditContact({
  initialData,
  onSave,
}: {
  initialData: Contact;
  onSave: (updateData: Contact) => void;
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section>
      <label>
        名称：
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      </label>
      <label>
        邮箱:
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
      </label>
      <button onClick={()=>{
        const updateData = {
          id: initialData.id,
          name,
          email
        };
        onSave(updateData);
      }}>保存</button>
      <button onClick={()=>{
        setName(initialData.name);
        setEmail(initialData.email);
      }}>重置</button>
    </section>
  );
}
