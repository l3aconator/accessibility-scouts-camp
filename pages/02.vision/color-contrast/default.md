---
title: Color Contrast
visible: true
summary: 'Imagine a world without color. It’d be a bit hard to tell the difference between things. Imagine a world were one has trouble differentiating colors. Image a world were you can’t see the same colors as others. These are all real possibilities. We’ll be getting to color blindness and not being able to see at all. But first, let’s discuss color contrast.'
stats:
    examples: '4'
    readingTime: '20 minutes'
    badges: '10'
twig_first: true
process:
    twig: true
---
<section>
    <img src="/user/pages/02.vision/sight-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
# Seeing the forest through the trees

---

Imagine a world without color. It’d be a bit hard to tell the difference between things. Imagine a world were one has trouble differentiating colors. Image a world were you can’t see the same colors as others. These are all real possibilities. We’ll be getting to color blindness and not being able to see at all. But first, let’s discuss color contrast.
</div>
</section>

<section>
<div class="container--content" markdown="1">
The ARIA spec has two levels of contrast ratios that text on a background should meet. The body text you are reading as you read is 7:1:1. A very high contrast ratio and meets the level three spec. Pretty dang good and pretty dang accessible.
</div>
</section>

<section>
<div class="container--content" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
#### WAIT CAMP COUNSELOR! WHAT THE HECK IS THE ARIA SPEC?!

lorem ipsum dolor sit
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
Whew! Glad we got that covered. Anyways, color contrast is a simple idea. If it’s hard to read for a user without an impairment, put yourself in someone else’s shoes. Yeah, light gray text on a white background softens the look and sometimes looks dope. BUT IT’S HARD TO READ, SILLY. At the end of the day, our job is disseminate information in the best way possible and engage the user.
</div>
</section>


<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
**KNOW YOUR AUDIENCE.** If you are designing for xx+: color contrast and legibility of colors on top of one another became a big freakin’ deal. If you are designing for a younger audience, it doesn’t matter as much, BUT still be mindful that anyone, at anytime, can access your designed content and should still be accessible to the greatest amount of people.
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
Thankfully nerds on the Internet have built tools to test color contrast using your base background color and what colors will go on the top of them and pass either level 2 or 3. (Guess what? There’s a sample tester below.)

Try it out here:

[TOOL]

[CTA TO THE FULL TOOL]
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Test your color palette!
* If it’s hard for you to read, it’s hard for others to read.
* You can get away with low contrast in non-essential text, but long blocks of text and navigation should be highly visible to all users.
* Test and refine!
* Ask others how your color palette is working and if the contrast between type, color, illustration, and content is working.
* Don’t use this as a crutch to stick to one color palette that works, explore, explore, and explore. The spec is flexible, just be mindful.
</div>
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__three">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="vision" data-badge="colorContrast">
                </div>
            </div>
            <div class="col--width__nine">
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
