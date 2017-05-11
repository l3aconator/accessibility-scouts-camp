---
title: Touch Manual
icon: touch
content:
    items: @self.children
    order:
        by: date
        dir: desc
twig_first: true
process:
    twig: true
---
{% set collection = page.collection() %}

{% for child in collection %}
<p>
    <a href="{{ child.url }}">{{ child.title }}</a>
</p>
{% endfor %}
