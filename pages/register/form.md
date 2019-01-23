---
title: Register
registerForm: true

login_redirect_here: false

form:
    name: register
    action:
    method: post

    fields:
        - name: email
          type: email
          id: email
          placeholder: email
          label: Email
          autofocus: true
          validate:
            required: true
        - name: password
          type: password
          id: password
          placeholder: Password
          label: Password
          validate:
            required: true
---
<h1 class="h2"><span id="quickstart-sign-up-status">Create your account, scout!</span></h1>
