import "./styles.css"
import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: "Qara",
        phone_number: "055"
      },
      {
        fullname: "Ulvi",
        phone_number: "051"
      },
      {
        fullname: "Nurlan",
        phone_number: "077"
      }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts