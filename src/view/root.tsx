import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  LoaderFunctionArgs,
  useSubmit,
} from "react-router-dom";
import { getContacts, createContact } from "../api/contacts";
import { useEffect, useState } from "react";
type ContactType = {
  id: string;
  createdAt: number;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: string;
};
export async function Loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // console.log(url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function Action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

// export async function EditContact(){
//   const contact = await createContact();
// }
export default function Root() {
  const { contacts, q } = useLoaderData() as { contacts: ContactType[]; q: string };
  const [query, setQuery] = useState(q);
  const navigation = useNavigation();
  const submit = useSubmit();
  console.log(navigation.location);
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    // console.log('useEffect',q);
    setQuery(q);
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              value={query}
              // onChange={(e) => setQuery(e.target.value)}
              onChange={(e) => {
                const isFirstSearch = q == '';
                submit(e.currentTarget.form,{
                  replace:!isFirstSearch,
                })
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li><NavLink to="/button-tooltip" key="button-tooltip">Button Tooltip</NavLink></li>
              <li><NavLink to="/modal-dialog" key="modal-dialog">Modal Dialog</NavLink></li>
              <li><NavLink to="/observer" key="observer">Observer</NavLink></li>
              <li><NavLink to="/todo" key="todo">ToDo</NavLink></li>
              <li><NavLink to="/rest-form" key="rest-form">Rest Form</NavLink></li>
              <li><NavLink to="/drag" key="drag">Drag</NavLink></li>
              <li><NavLink to="/task" key="task">Task</NavLink></li>
              <li><NavLink to="/chat" key="chat">Chat</NavLink></li>
              <li><NavLink to="/product" key="product">Product</NavLink></li>
              <li><NavLink to="/timer" key="timer">Timer</NavLink></li>
              <li><NavLink to="/count" key="count">Count</NavLink></li>
              <li><NavLink to="/cart" key="cart">Cart</NavLink></li>
              <li><NavLink to="/queue" key="queue">Queue</NavLink></li>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`/contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : undefined
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite === 'true' && <span>★</span>}
                  </NavLink>
                </li>
              ))}

            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  );
}
