import React from 'react'

export default () => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    {/* You still need to add the hidden input with the form name to your JSX form */}
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" />
    <input type="email" name="email" />
    <button type="submit">Send</button>
  </form>
)
