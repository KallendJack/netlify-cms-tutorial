import React from 'react'

export default () => (
  <form>
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>
        Name <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Email <input type="email" name="email" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)
