---
title: Deeper learning
visible: true
summary: 'Hmmmmmmm. Thought this guide was all inclusive? Not so much. The purpose of this camp was to have you start on a great foundation and use the small things to do the most good. Here are some of the camp’s sources and a lot more resources for more in-depth learning.'
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
    <div class="container">
        <h1>Deeper learning about accessibility</h1>
        <ul class="link--list flex-grid--gutters flex-wrap mt--90 mb--60">
        {% set collection = page.collection() %}

        {% for child in collection %}
            <li class="col--width__four link--list-item">
                <div class="link--list-item__content rounded-top">
                    <h5><a href="{{ child.url }}" target="_blank">{{ child.title }}</a></h5>
                </div>
            </li>
        {% endfor %}
        </ul>
    </div>
</section>

<section class="section--badge-cta section--badge-cta__orange mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/deeper-learning/deeper-learning.png" data-section="about" data-badge="deeperLearning">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Uhhh. Yeah, a page full of links, but here's a badge anyways.</h4>
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
