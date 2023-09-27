import {
  Form,
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
  ActionFunctionArgs,
} from "react-router-dom";
import { getContact, updateContact } from "@/api/contacts";

type ContactType = {
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: string;
};

export async function Loader(
  args: LoaderFunctionArgs<{ contactId: string }>
): Promise<{ contact: ContactType | null }> {
  const contact = await getContact(args.params.contactId);
  if(!contact){
    throw new Response("", { status: 404, statusText: "Not Found" });
  }
  return { contact };
}

export async function Action(args: ActionFunctionArgs<{ contactId: string }>) {
  const formData = await args.request.formData();
  return updateContact(args.params.contactId || "", {
    favorite: formData.get("favorite") === "true" ? "true" : "false",
  });
}

export default function Contact() {
  const { contact } = useLoaderData() as { contact: ContactType };
  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }: { contact: ContactType }) {
  // yes, this is a `let` for later
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if(fetcher.formData){
    console.log('fetcher formData',fetcher.formData);
    favorite = fetcher.formData.get("favorite") ? "true" : "false";
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite === 'true' ? "false" : "true"}
        aria-label={favorite === "true" ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite === "true" ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
