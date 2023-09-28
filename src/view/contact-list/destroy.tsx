import { redirect,ActionFunctionArgs } from "react-router-dom"
import { deleteContact } from "@/api/contacts"

export async function DeleteAction(args:ActionFunctionArgs<{contactId:string}>) {
  await deleteContact(args.params.contactId || '')
  return redirect('/')
}

export default function Destroy() {
  return (
    <div>Destroy</div>
  )
}
