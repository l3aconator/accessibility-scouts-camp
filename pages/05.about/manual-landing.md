---
title: 'Find out about this camp site, accessibility, and more resources for you to access.'
menu: About
icon: about
heroCover: '/user/pages/05.about/about-cover.png'
heroImg: '/user/pages/05.about/orange-placeholder.png'
heroImgAlt: 'Illustration'
content:
    items: @self.children
    order:
        by: date
        dir: desc
badges:
    items:
       '@taxonomy.category': [about]
twig_first: true
process:
    twig: true
---
