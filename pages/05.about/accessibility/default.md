---
title: Accessibility
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
<div class="container--content" markdown="1">
# Brief history

---

[A SMALL VISUAL TIMELINE THAT USERS CAN INTERACT WITH]
</div>
</section>

<section class="pt--30 pb--30">
    <img src="/user/themes/camp/images/illustration-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
### Why it’s important

content
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* This has been a long road and the future is bright for those who can’t use the web as others can
* Broadening the web to more users to provide the same access to information that others have
* Knowledge is power and the pool of knowledge that web has should be open to the all those who need it
</div>
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="about" data-badge="accessibility">
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
