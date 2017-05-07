---
title: Home
visible: false
twig_first: true
process:
    twig: true
---
<section class="container--content" markdown="1">
# Making the scary forest of the web a better place for all

### Welcome fellow scouts!

The web is a wonderful and scary place, but mostly wonderful. The access to information is astounding but most of it, is only accessible to those who are without impairments. The following manuals within the online camp is to get you ready for the wild forest of the Internet and make it usable for all. (Or as close as we can get!)

We'll be looking at the three senses used to interact with content: sight, touch, and hearing. People with one disability, or a combination of several, impacts the experience of a website or web app. Information, learning, or a specific tool shouldn't cater to one audience, but many.

#### These are the field manuals you’ll be going through:
</section>

<section class="container">
    <div class="flex-grid--gutters">
        <div class="col">
            <div class="cover--box">
                <img alt="The cover of the accessibilityscouts.camp sight manual." src="/user/pages/01.home/sight-cover.png">
            </div>
            <h4>SIGHT Manual</h4>
            <ul class="toc--list">
            {% for child in page.find('/sight-manual').children %}
                <li class="toc--list-item">
                    <a class="toc--list-item-link" href="{{ child.url }}">{{ child.title }}</a>
                </li>
            {% endfor %}
            </ul>
        </div>
        <div class="col">
            <div class="cover--box">
                <img alt="The cover of the accessibilityscouts.camp sound manual." src="/user/pages/01.home/sound-cover.png">
            </div>
            <h4>AUDIO Manual</h4>
            <ul class="toc--list">
            {% for child in page.find('/audio-manual').children %}
                <li class="toc--list-item">
                    <a class="toc--list-item-link" href="{{ child.url }}">{{ child.title }}</a>
                </li>
            {% endfor %}
            </ul>
        </div>
        <div class="col">
            <div class="cover--box">
                <img alt="The cover of the accessibilityscouts.camp touch manual." src="/user/pages/01.home/touch-cover.png">
            </div>
            <h4>TOUCH Manual</h4>
            <ul class="toc--list">
            {% for child in page.find('/touch-manual').children %}
                <li class="toc--list-item">
                    <a class="toc--list-item-link" href="{{ child.url }}">{{ child.title }}</a>
                </li>
            {% endfor %}
            </ul>
        </div>
        <div class="col">
            <div class="cover--box">
                <img alt="The cover of the accessibilityscouts.camp about manual." src="/user/pages/01.home/about-cover.png">
            </div>
            <h4>ABOUT Manual</h4>
            <ul class="toc--list">
            {% for child in page.find('/about-manual').children %}
                <li class="toc--list-item">
                    <a class="toc--list-item-link" href="{{ child.url }}">{{ child.title }}</a>
                </li>
            {% endfor %}
            </ul>
        </div>
    </div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
#### A note from the camp counselor

Consider if a business didn't have wheelchair ramps for those to get inside? Or cashiers told visually impaired patients the wrong amount of money to pay for something and pocketed the excess? Or denied service because the patron can't hear you? All these are extreme edge cases, but it happens. The severity of those concepts happen on the web. Let's work together to make the web better for everyone. Ready to start exploring?
</div>
</div>
</section>

<section class="container section--pad">
    <div class="flex-grid--gutters">
        <div class="col--width__four">
            <div class="badge--box">
                <img class="img--badge" alt="A badge." src="/user/pages/01.home/badge-star-holder.png">
            </div>
        </div>
        <div class="col--width__eight">
            <h3>Ready to jump in and start earnin’ some  merit badges?</h3>
            <p class="h3 h3__serif">Let's start with <a class="img--badge__trigger" href="/sight-manual/color-contrast">color contrast &raquo;</a></p>
        </div>
    </div>
</section>
