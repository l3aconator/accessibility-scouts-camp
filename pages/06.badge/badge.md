---
title: Badges
icon: badge
content:
    items: @self.children
    order:
        by: date
        dir: desc
twig_first: true
process:
    twig: true
---
<!-- Container where we'll display the user details -->
<div class="quickstart-user-details-container">
  <div>Firebase auth <code>currentUser</code> object value:</div>
  <pre><code id="quickstart-account-details">null</code></pre>
</div>