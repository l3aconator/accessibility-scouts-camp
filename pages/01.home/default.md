---
title: Home
visible: false
twig_first: true
process:
    twig: true
---
<section>
    <div class="container">
        <h1 class="hero--type mt--90">Only you can prevent <br /><span class="hero--type__second-line">bad experiences</span></h1>
        <div class="hero--down">
            <a href="#down">
                <svg class="hero--down-icon" width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>
                    go-down
                    </title>
                    <defs>
                        <path id="a" d="M29.5 56.293L25.795 59l-2.916-3.545-4.26 1.7-1.948-4.16-4.548.582-.85-4.514-4.55-.568.295-4.584-4.266-1.68 1.426-4.37-3.716-2.694 2.463-3.874L0 27.757l3.348-3.14-1.96-4.152 4.022-2.207-.867-4.51 4.443-1.136.28-4.585 4.585.008 1.41-4.372 4.44 1.15L22.15.93l4.013 2.22L29.5 0l3.337 3.15L36.85.93l2.45 3.883 4.44-1.15 1.41 4.372 4.584-.008.28 4.585 4.443 1.135-.867 4.51 4.022 2.208-1.96 4.153L59 27.758l-2.928 3.534 2.463 3.874-3.714 2.694 1.427 4.367-4.266 1.684.296 4.587-4.55.568-.85 4.514-4.55-.584-1.944 4.16-4.26-1.7L33.207 59z"/>
                        <pattern id="b" width="258" height="258" x="-258" y="-258" patternUnits="userSpaceOnUse">
                            <use xlink:href="#a"/>
                        </pattern>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <use fill="#2E112D" xlink:href="#a"/>
                        <use fill-opacity=".11" fill="url(#b)" xlink:href="#a"/>
                        <circle stroke="#FFA11B" stroke-width="5" fill="#FDE9DD" cx="30" cy="30" r="20"/>
                        <path class="hero--down-icon__arrow" d="M30.178 37c-.56 0-1.12-.224-1.55-.672l-8.986-9.412c-.856-.895-.856-2.348 0-3.244.854-.896 2.242-.896 3.098 0l7.438 7.79 7.083-7.418c.857-.896 2.246-.896 3.1 0s.856 2.348 0 3.245l-8.63 9.036c-.43.448-.99.672-1.55.672" fill="#2E112D"/>
                    </g>
                </svg>
            </a>
        </div>
    </div>
    <img src="user/pages/01.home/hero-01.png" alt="An illustration of a computer in a forest" />
</section>

<section class="container--content mt--90" markdown="1" id="down">
# Making the scary forest of the web a better place for all

---

### Welcome fellow scouts!

The web is a wonderful and scary place, but mostly wonderful. The access to information is astounding but most of it, is only accessible to those who are without impairments. The following manuals within the online camp is to get you ready for the wild forest of the Internet and make it usable for all. (Or as close as we can get!)

We'll be looking at the three senses used to interact with content: sight, touch, and hearing. People with one disability, or a combination of several, impacts the experience of a website or web app. Information, learning, or a specific tool shouldn't cater to one audience, but many.
</section>

<section class="manual--lists">
    <div class="container--content">
        <h4 class="mb--60">These are the field manuals you’ll be going through:</h4>
    </div>
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col">
                <div class="cover--box">
                    <img alt="The cover of the accessibilityscouts.camp sight manual." src="/user/pages/01.home/sight-cover.png">
                </div>
                <h4 class="manual--title">VISION Manual</h4>
                <ul class="toc--list">
                {% for child in page.find('/vision').children %}
                    <li class="toc--list__item toc--list__item-sight">
                        <a class="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                    </li>
                {% endfor %}
                </ul>
            </div>
            <div class="col">
                <div class="cover--box">
                    <img alt="The cover of the accessibilityscouts.camp sound manual." src="/user/pages/01.home/sound-cover.png">
                </div>
                <h4 class="manual--title">SOUND Manual</h4>
                <ul class="toc--list">
                {% for child in page.find('/sound').children %}
                    <li class="toc--list__item toc--list__item-audio">
                        <a class="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                    </li>
                {% endfor %}
                </ul>
            </div>
            <div class="col">
                <div class="cover--box">
                    <img alt="The cover of the accessibilityscouts.camp touch manual." src="/user/pages/01.home/touch-cover.png">
                </div>
                <h4 class="manual--title">TOUCH Manual</h4>
                <ul class="toc--list">
                {% for child in page.find('/interaction').children %}
                    <li class="toc--list__item toc--list__item-touch">
                        <a class="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                    </li>
                {% endfor %}
                </ul>
            </div>
            <div class="col">
                <div class="cover--box">
                    <img alt="The cover of the accessibilityscouts.camp about manual." src="/user/pages/01.home/about-cover.png">
                </div>
                <h4 class="manual--title">ABOUT Manual</h4>
                <ul class="toc--list">
                {% for child in page.find('/about').children %}
                    <li class="toc--list__item toc--list__item-about">
                        <a class="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                    </li>
                {% endfor %}
                </ul>
            </div>
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
