import React from 'react';

import './ProfileDetail.css'

export default function ProfileDetail ({ value, type, icon }) {
  const info = Info(type, value)
  return info ? (
    <div className="detail">
      <span className="icon">
        <i className={`fad fa-lg fa-${icon}`}></i>
      </span>

      {info}
    </div>
  ) : <></>
}

export function Info(type, value) {
  switch (type) {
    case 'email':
      return EmailInfo(value)
    case 'phone':
      return PhoneInfo(value)
    default:
      return <></>
  }
}

export function EmailInfo(email) {
  return (
    <span className="info">
      <a href={`mailto:${email}`}
        className="link-disguise"
        itemProp="email"
      >
        { email }
      </a>
    </span>
  )
}

export function PhoneInfo(phone) {
  return (
    <span className="info" itemProp="telephone">
      {phone}
    </span>
  )
}
