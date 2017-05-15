---
title: Login

login_redirect_here: false

form:
    name: login
    action:
    method: post

    fields:
        - name: username
          type: text
          id: username
          placeholder: Username
          label: Username/email
          autofocus: true

        - name: password
          type: password
          id: password
          placeholder: Password
          label: Password
---
<h1 class="h2">Login to your account! Great to see you, scout.</h1>
