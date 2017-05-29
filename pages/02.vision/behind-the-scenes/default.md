---
title: 'Behind the scenes'
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
    <img src="/user/pages/02.vision/sight-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
# Keeping the camp fire toasty and the axe sharp

---

As we draw a close to the end of the sight manual, keep in mind there are some behind the scenes items that users can’t really see—unless they pop open dev tools or are using screen reader technology.

![ILLUSTRATION](http://placehold.it/450x250)

Make sure that your images have alt tags. Please for the love of god put alt tags on your images. Guess what? Screen readers READ the alt tags when used. It also provides a fallback when images aren’t loading and it helps with SEO. Do we have your scout’s honor?
</div>
</section>

<section>
    <div class="container">
        <div class="flex-grid">
            <div class="col">
                [SCREEN READ EXAMPLE WITH AND WITHOUT ALT TAG ON ILLUSTRATION] CODE
            </div>
            <div class="col">
                example
            </div>
        </div>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
---

The ARIA spec is hard to read, so below are some of the key points to understand from it to include in your code to make your content and interactions more compliant. Some HTML5 attributes have ARIA roles attached to them, some can be modified, others have to be specified explicitly—like hidden objects.

[ARIA in HTML](https://www.w3.org/TR/html-aria/) <= turning this into my own content on the web page with examples to make it easier to understand
</div>
</section>

<section class="pt--30 pb--30">
    <img src="/user/themes/camp/images/illustration-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
Wonderful learning scout! Your 1/3rd of the way to becoming a full-fledge Accessibility Scout. Our next building and manual is for audio.
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Review the ARIA examples to make sure you are incorporating the most important into your markup. It’s not that hard, you just need to know what goes where.
* PUT CONTENT IN YOUR ALT TAGS.
</div>
</section>

<section>
[ILLUSTRATION]
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__three">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="vision" data-badge="behindTheScenes">
                </div>
            </div>
            <div class="col--width__nine">
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
