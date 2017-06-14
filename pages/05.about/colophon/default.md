---
title: Colophon
visible: true
summary: 'This project is for Kyle Bacon’s senior thesis in the Portland State Graphic Design program. It is heavily inspired by camping and scout field manuals because the forest of the digital world is a scary place and should be accessible for all. This guide is meant to get people up to speed in creating accessible Internet experience as quickly as possible in a fun and quirky manner.'
stats:
    examples: '2'
    readingTime: '20 minutes'
    badges: '10'
twig_first: true
process:
    twig: true
---
<section class="container--content mt--90 mb--90" markdown="1">

# Whoa scout, surprised you ended up here!
Well since you are here, let’s learn some nerdy things about <br />the site.

#### The project…
…is for Kyle Bacon’s senior thesis in the [Portland State Graphic Design](http://psu.gd?target=_blank) program. It is heavily inspired by camping and scout field manuals because the forest of the digital world is a scary place and should be accessible for all. This guide is meant to get people up to speed in creating accessible Internet experience as quickly as possible in a fun and quirky manner.

This site is by no means 100% complete as of launch and a project I hope to maintain, perfect, and build upon in the future to keep up with changes in technologies and improving the learning experience. (It's also open source, so slap in a PR if you'd like.)

#### The content…
…was written with love by Kyle Bacon referencing quite a few sources that are way smarter than him to provide well said and friendly language for all campers

#### The typefaces…
…for headings is [Century Gothic Bold](https://www.myfonts.com/fonts/mti/century-gothic/bold?target=_blank), using a modular scale of 1.125, served locally by the [Digital Ocean](https://www.digitalocean.com?target=_blank). The body type face is [Noto Serif](https://fonts.google.com/specimen/Noto+Serif?target=_blank) served by Google Fonts. It’s a typeface that supports many languages and glyphs to always provide the best reading experience. The designs of the typeface were heavily scrutinized to provide a great reading experience and give the look and feel of a camp manual.

#### The color palette…
…is accessible and inspired by summer camps.

#### The website…
…is built using the flat-file [GRAV CMS](https://getgrav.org?target=_blank) with a custom CSS framework built by Kyle Bacon. The badge and account system is managed by a combination of hand-crafted vanilla JS, tears, and [Firebase](https://firebase.google.com?target=_blank) by Google.

#### The illustrations…
…were crafted with beer and coffee by Kyle Bacon.
</section>

<section class="section--badge-cta section--badge-cta__orange mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/colophon/colophon.png" data-section="about" data-badge="colophon">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Welp! Since you made it here, here’s a special badge. We are a bit badge happy at the accessibilityscouts.camp.</h3>
                <h4>Woohoo!</h4>
                {% if not page.isLast %}
                    <span>Previous: </span><a href="{{ page.prevSibling.url }}">{{ page.prevSibling.title }} &raquo;</a>
                {% endif %}
                {% if not page.isFirst %}
                    <span>Up next: </span><a href="{{ page.nextSibling.url }}">{{ page.nextSibling.title }} &raquo;</a>
                {% endif %}
            </div>
        </div>
    </div>
</section>
