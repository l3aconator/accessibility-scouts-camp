---
title: Deeper learning
visible: true
summary: 'The web is a wonderful and scary place, but mostly wonderful. The access to information is astounding but most of it, is only accessible to those who are without impairments. The following manuals within the online camp is to get you ready for the'
stats:
    examples: '2'
    readingTime: '20 minutes'
    badges: '10'
content:
    items: @self.children
    order:
        by: date
        dir: desc
twig_first: true
process:
    twig: true
---
<section>
    <img src="/user/pages/05.about/about-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
    <div class="container">
        <ul class="link--list flex-grid--gutters flex-wrap mt--90 mb--60">
        {% set collection = page.collection() %}

        {% for child in collection %}
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="{{ child.url }}" target="_blank">{{ child.title }}</a></h5>
                </div>
            </li>
        {% endfor %}
        </ul>
    </div>
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="about" data-badge="deeperLearning">
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
