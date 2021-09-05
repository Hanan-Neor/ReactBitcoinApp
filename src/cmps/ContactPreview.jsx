// import React from 'react'
import { Link } from "react-router-dom"

export function ContactPreview({ contact, selectContact }) {
    return (
        // <div className="contact-preview" onClick={() => selectContact(contact._id)}>
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview">
                {/* hello preview111111111 */}
                <img src={'https://robohash.org/' + contact._id} alt="" width="50" height="50" />
                {contact.name}

            </div>
        </Link>
    )
}
