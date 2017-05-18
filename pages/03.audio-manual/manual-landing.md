---
title: Audio Manual
icon: audio
heroCover: '/user/pages/03.audio-manual/audio-cover.png'
heroImg: '/user/pages/03.audio-manual/yellow-placeholder.png'
heroImgAlt: 'Illustration'
content:
    items: @self.children
    order:
        by: date
        dir: desc
badges:
    items:
       '@taxonomy.category': [audioManualBadges]
twig_first: true
process:
    twig: true
---
