---
title: Personas to think about
visible: true
summary: 'The web is a wonderful and scary place, but mostly wonderful. The access to information is astounding but most of it, is only accessible to those who are without impairments. The following manuals within the online camp is to get you ready for the'
stats:
    examples: '2'
    readingTime: '20 minutes'
    badges: '10'
twig_first: true
process:
    twig: true
---
<section>
    <img src="/user/pages/05.about/about-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—Color Blind
[real life persona to reference]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—Blind
[real life persona to reference]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—Elderly
[real life persona to reference]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—Deaf
[real life persona to reference]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—New to computers
[real life persona to reference]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
### Persona—No arms
[real life persona to reference]
</div>
</div>
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="about" data-badge="personasToThinkAbout">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Great! This is just the beginning in our exploration of color.</h4>
                {% if not page.isFirst %}
                    <span>Up next: </span><a href="{{ page.nextSibling.url }}">{{ page.nextSibling.title }} &raquo;</a>
                {% endif %}
                {% if not page.isLast %}
                    <span>Previous: </span><a href="{{ page.prevSibling.url }}">{{ page.prevSibling.title }} &raquo;</a>
                {% endif %}
            </div>
        </div>
    </div>
</section>
