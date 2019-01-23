---
title: Visible Interactions
visible: true
summary: 'Welcome again scouts! Now that we’ve learned about color and type. Let’s talk about interactions. Type, color, and interactions are the meat and potatoes of a site. Without those we would have a blank white screen when someone navigates to a website.'
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
# Finding the right stuff to do

---

Let’s talk about interactions. Type, color, and interactions are the meat and potatoes of a site. Without those we would have a blank white screen when someone navigates to a website.

With color and type, we can create hierarchy of where the user should look first and what the user should be reading. All the better to creating a clear and accessible site. Great! But what about buttons, controls, and UI elements. Using our scouting skills we can combine those to create clear visual cues using color, type, and form to create easy-to-use UI elements.  Buttons should look like buttons, links should look like links. Navigation should look like navigation and not disappear. There should be clear differentiation between active, hover, and focus states.
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
Focus states are important! They should look visually different. When a user is hitting the tab key to step through all the elements that are actionable it should look like that is happening. Feedback is a core UX principle that should be applied to every site. When we say feedback, we mean that it should look like a response of some kind is happening to the action. Don’t think of accessibility as only those with impairments but also those who aren’t all that <br />computer savvy.
</div>
</div>
</section>

<section>
<div class="container--content" markdown="1">
We are now going to be combining our UX, UI, and accessible code skills together to create accessible interactions. Don’t worry if you don’t understand everything about the ARIA spec or the JS being used to help make these elements accessible. It take time, practice, and a desire to make the web better for all.
</div>
    <div class="container--content">
        <h3>Okay, great! Let’s look at some examples of good and bad examples of this:</h3>
    </div>

    <div class="container">
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Good use of links</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="eRYLvG" data-default-tab="result" data-user="l3acon" data-embed-version="2" data-pen-title="Good use of links" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/eRYLvG/">Good use of links</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Bad use of links</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="LLYJWg" data-default-tab="html,result" data-user="l3acon" data-embed-version="2" data-pen-title="Bad use of links" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/LLYJWg/">Bad use of links</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Good button pattern</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="Pjodmo" data-default-tab="html,result" data-user="l3acon" data-embed-version="2" data-pen-title="Good button pattern" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/Pjodmo/">Good button pattern</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Bad button pattern</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="BZaORN" data-default-tab="html,result" data-user="l3acon" data-embed-version="2" data-pen-title="Bad button pattern" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/BZaORN/">Bad button pattern</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
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
* Use clear language for UI elements and what you want users <br />to do
* Provide interface feedback to user interactions
* Make UI patterns with color and type accessibility in mind
* Code them with accessible love and care. You wouldn't build a campfire with wet pine needles, right?
</div>
</section>

<section class="section--badge-cta section--badge-cta__blue mt--90 pb--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/visible-interactions/interactive.png" data-section="interaction" data-badge="visibleInteractions">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>When slappin' those buttons and keys, show what happens, yo. We're hip, huh?</h4>
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
