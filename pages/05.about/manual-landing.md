---
title: About
icon: about
heroCover: '/user/pages/05.about-manual/about-cover.png'
heroImg: '/user/pages/05.about-manual/orange-placeholder.png'
heroImgAlt: 'Illustration'
content:
    items: @self.children
    order:
        by: date
        dir: desc
badges:
    items:
       '@taxonomy.category': [aboutManualBadges]
twig_first: true
process:
    twig: true
---
