---
title: Accessibility
visible: true
summary: 'Consider if a business didn’t have wheelchair ramps for those to get inside? Or cashiers told visually impaired patients the wrong amount of money to pay for something and pocketed the excess? Or denied service because the patron can’t hear you? All these are extreme edge cases, but it happens. The severity of those concepts happen on the web. Let’s work together to make the web better for everyone. Ready to start exploring?'
stats:
    examples: '2'
    readingTime: '20 minutes'
    badges: '10'
twig_first: true
process:
    twig: true
---
<section>
<div class="container--content" markdown="1">
### What is accessibility

Consider if a business didn't have wheelchair ramps to get inside? Or cashiers told visually impaired patients the wrong amount of money to pay for something and pocketed the excess? Or denied service because the patron can't hear you? All these are extreme edge cases, but it happens. The severity of those concepts happen on the web.

There's two main audiences that accessibility needs to matter to. Those who have disabilities and those who design and build experiences. We both have tools out our disposal to help ourselves and each other out to make the web a friendlier place.

### Why it’s important

As designers and developers it's up to us to help those who can't natively use something. We have tools at our disposal to provide relief to obstacles on the web. An accessible web for everyone.

ARIA attributes, semantic HTML, type and color choices, animation, proper design thinking, and overall care is the same idea of a building having a ramp, rails for stairs, wheelchair accessible bathrooms, elevators, lower desks, different seating for those who need it, and the list goes on. Just because the Internet is digital, doesn't mean any less care should be taken.
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* This has been a long road and the future is bright for those who can’t use the web as others can
* Broadening the web to more users to provide the same access to information that others have
* Knowledge is power and the pool of knowledge that web is should be open to the all those who need it
* It's also the law in some cases.
* Smart and useful technological advancements.
* Helps create a larger user base.
* A creative challenge for designers and developers.
* More access to information
</div>
</section>

<section class="section--badge-cta section--badge-cta__orange mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/accessibility/about-accessibility.png" data-section="about" data-badge="accessibility">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Great! This is just the beginning in our exploration of color.</h4>
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
