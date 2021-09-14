// import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({contacts , selectContact}) {
    return (
        <div className="contact-list">
      {contacts.map(contact => (
        <ContactPreview  contact={contact} selectContact={selectContact} key={contact._id} />
      ))}
        </div>
    )
}
