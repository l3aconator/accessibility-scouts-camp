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

<section class="section--badge-cta section--badge-cta__purple">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__nine">
                <h3>Let’s get you some badges, champ.</h3>
                <h5><em>Hey scout! Read and complete the example to get some shit  on your coat. <br /><a href="/badge-manual">See it here! &raquo;</a></em></h5>
            </div>
            <div class="col--width__three">
                <div class="badge--box">
                    <img class="img--badge" alt="A badge." src="/user/pages/01.home/badge-star-holder.png">
                </div>
            </div>
        </div>
    </div>
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
