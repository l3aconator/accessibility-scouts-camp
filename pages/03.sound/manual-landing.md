---
title: Sound
icon: audio
heroCover: '/user/pages/03.sound/audio-cover.png'
heroImg: '/user/pages/03.sound/yellow-placeholder.png'
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
