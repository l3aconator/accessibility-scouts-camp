---
title: Visible Interactions
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
    <img src="/user/pages/04.interaction/touch-hero-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content" markdown="1">
# Finding the right stuff to do

---

Welcome again scouts! Now that we’ve learned about color and type. Let’s talk about interactions. Type, color, and interactions are the meat and potatoes of a site. Without those we would have a blank white screen when someone navigates to a website.

With color and type, we can create hierarchy of where the user should look first and what the user should be reading. All the better to creating a clear and accessible site. Great! But what about buttons, controls, and UI elements. Using our scouting skills we can combine those to create clear visual cues using color, type, and form to create easy-to-use UI elements.  Buttons should look like buttons, links should look like links. Navigation should look like navigation and not disappear. There should be clear differentiation between active, hover, and focus states.
</div>
</section>

<section class="pt--30 pb--30">
    <img src="/user/themes/camp/images/illustration-placeholder.png" alt="Illustration placeholder" />
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
Focus states are important! They should look visually different. When a user is hitting the tab key to step through all the elements that are actionable it should look like that is happening. Feedback is a core UX principle that should be applied to every site. When we say feedback, we mean that it should look like a response of some kind is happening to the action. Don’t think of accessibility as only those with impairments but also those who aren’t all that computer savvy.
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
We are now going to be combining our UX, UI, and accessible code skills together to create accessible interactions. Don’t worry if you don’t understand everything about the ARIA spec or the JS being used to help make these elements accessible. It take time, practice, and a desire to make the web better for all.
</div>
    <div class="container--content">
        <p>Okay, great! Let’s look at some examples of good and bad examples of this:</p>
    </div>

    <div class="container">

        <hr />

        <p>Good use of links:</p>
        <div class="flex-grid">
            <div class="col">
            [VISUAL EXAMPLE]
            </div>
            <div class="col">
                <pre>
                    <code>
                    [CODE EXAMPLE]
                    </code>
                </pre>
            </div>
        </div>

        <p>Bad use of links:</p>
        <div class="flex-grid">
            <div class="col">
            [VISUAL EXAMPLE]
            </div>
            <div class="col">
                <pre>
                    <code>
                    [CODE EXAMPLE]
                    </code>
                </pre>
            </div>
        </div>

    </div>

    <div class="container">

        <hr />

        <p>A good button pattern:</p>
        <div class="flex-grid">
            <div class="col">
            [VISUAL EXAMPLE]
            </div>
            <div class="col">
                <pre>
                    <code>
                    [CODE EXAMPLE]
                    </code>
                </pre>
            </div>
        </div>

        <p>A bad button pattern:</p>
        <div class="flex-grid">
            <div class="col">
            [VISUAL EXAMPLE]
            </div>
            <div class="col">
                <pre>
                    <code>
                    [CODE EXAMPLE]
                    </code>
                </pre>
            </div>
        </div>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
These are only a few examples of what good and bad interactions could be. It all depends on the problem you are trying to solve and the context of the problem. At the end of the day it’s up to you as the designer and developer to make things accessible. The camp is here to help you get started and set you loose to scout the forest.
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Create clear active, hover, and focus states
* Use clear language for UI elements and what you want users to do
* Provide interface feedback to user interactions
* Make UI patterns with color and type accessibility in mind
* Code them with accessible love and care. You wouldn't build a campfire with wet pine needles, right?
</div>
</section>

<section>
[ILLUSTRATION]
</section>

<section class="section--badge-cta section--badge-cta__yellow mt--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/01.home/badge-star-holder.png" data-section="interaction" data-badge="visibleInteractions">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Type is freakin' wonderful, isn't it!</h4>
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
