---
title: Screen readers
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
    <img src="/user/pages/03.sound/audio-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
# In the dark and hitting trees

---

Wouldn’t it be terrible sitting in the woods at night without a lamp or fire to see anything? Imagine trying to use the Internet without visuals. It would be very hard to use.  Almost next to impossible. There’s a solution though and those are screen readers and tools to accept voice input to control the computer.

![ILLUSTRATION](http://placehold.it/450x250)

As you’ve seen so far through the sight manual a strong focus on content, image alt tags, and adding the extra aria attributes to our markup. Well guess what?! You’ve already learned about most of the tools to make a site accessible and screen readers happy. In turn that makes your users happy. Here we are going to go through some more complex code examples to show how advanced one can get with the aria spec in a web app and still have things make sense to the user and you.
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)

#### A shopping experience with a screen reader and focus states / tab index:

[COMPLEX CODE EXAMPLE HERE—LINK TO BEFORE]
[SHOW BAD HIERARCHY, POOR COLOR CHOICES, BAD INTERACTIONS]
[COMPLEX CODE EXAMPLE HERE—LINK TO AFTER]
[SHOW GOOD HIERARCHY, GOOD COLOR CHOICES, GOOD INTERACTIONS]
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
![ILLUSTRATION](http://placehold.it/450x250)

#### Social media experience with a screen reader and focus states / tab index:

[COMPLEX CODE EXAMPLE HERE—LINK TO BEFORE]
[SHOW BAD HIERARCHY, POOR COLOR CHOICES, BAD INTERACTIONS]
[COMPLEX CODE EXAMPLE HERE—LINK TO AFTER]
[SHOW GOOD HIERARCHY, GOOD COLOR CHOICES, GOOD INTERACTIONS]
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
Whew! That was a lot. You thought this was just the audio manual, huh? Accessibility is about catering to the largest audience. In practice one has to cater to both the visual and auditory audience at the same time. No easy task and takes a lot of work to pull off. Hopefully you can see how easy it can be to enrich the experience for those with visual impairments through the means of audio and dictation software.
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
Try some of them out. Go to a website you’ve never been to, a social media site, or even site you’ve developed. Close your eyes and see if you can navigate using the keyboard and maybe dictation. You’ll be surprised at how much harder it is easier to use if a good job was done or how easy it is if a good job was done.
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
#### Here are some links to popular screen readers:
</div>

    <div class="container">
        <ul class="flex-grid--gutters flex-wrap">
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="http://www.chromevox.com/" target="_blank">ChromeVox</a></h5>
                </div>
            </li>
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="" target="_blank">Mac Voice over</a></h5>
                </div>
            </li>
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="https://www.nvaccess.org/" target="_blank">NV Access</a></h5>
                </div>
            </li>
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="http://www.afb.org/prodBrowseCatResults.aspx?CatID=49" target="_blank">Finish list items</a></h5>
                </div>
            </li>
        </ul>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
#### Here are some links to popular dictation software:
</div>

    <div class="container">
        <ul class="flex-grid--gutters flex-wrap">
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="https://www.nuance.com/mobile/mobile-applications/dragon-dictation.html" target="_blank">Dragon Dictation App</a></h5>
                </div>
            </li>
            <li class="col--width__four link--list-item">
                <img class="img--illustration" alt="Placeholder illustration" src="http://placehold.it/348x155">
                <div class="link--list-item__content">
                    <h5><a href="" target="_blank">need to find more links</a></h5>
                </div>
            </li>
        </ul>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Practice your ARIA tags
* Make sure you understand the code that is happening with the examples and why the experience is better from a visual and audio standpoint
* Test, test, and test with different screen readers to see if you can get around the site and that the tab order is working correctly. Make sure you content makes sense when read out loud
* Make sure your form inputs can handle dictation software and when errors occur that the user can understand what went wrong
</div>
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="sound" data-badge="screenReaders">
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
