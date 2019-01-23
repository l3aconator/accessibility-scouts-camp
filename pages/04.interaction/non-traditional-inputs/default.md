---
title: Non-traditional inputs
visible: true
summary: 'Sorry scouts, no fancy analogy for these devices. The keyboard is a fundamental device to computing. How does it work when that isn’t available to someone with an impairment? Other means of input are needed. Granted a lot of these are rarer than others, but please keep these in mind.'
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
# Non-traditional inputs

---

Sorry scouts, no fancy analogy for these devices. The keyboard is a fundamental device to computing. How does it work when that isn’t available to someone with an impairment? Other means of input are needed. Granted a lot of these are rarer than others, but please keep these in mind.

Again, old broken record over here, but keep your audience in mind. If you are building a website with folks who don’t have arms, think of ways they can interact with it using speech, feet, or even eye tracking software. If you have the budget, get these devices and use them with your site. It’ll be mind blowing to see how easy or hard it is to use.
</div>

<div class="container">
    <ul class="link--list flex-grid--gutters flex-wrap mt--90 mb--60">
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>On-screen keyboards</h5>
                <p>Keyboards that are on-screen can be either interacted with through the mouse and clicking on the keys or using a touchscreen if the users' laptop is equipped <br />with that.</p>
            </div>
        </li>
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>Word prediction software</h5>
                <p>Similiar to what one uses during texting on a phone, predicts the word you are typing. Software like this can be used to help folks using a computer that typically would have trouble.</p>
            </div>
        </li>
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>Speech recognition</h5>
                <p>Should be self-explanatory: speech that is recognized by a computer. There's software on the market that allows people to speak to computers to command them.</p>
            </div>
        </li>
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>Eye tracking software <br />and hardware</h5>
                <p>Eye tracking is measuring where one is looking or the motion of an eye. It can be rigged up to see where the eye has moved and whether or not those movements correspond to computer actions.   </p>
            </div>
        </li>
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>Braille surfaces</h5>
                <p>A keyboard specifically designed for those with visual disabilities. Helps them insert text into a computer and with the aid of a screen reader, those can be paired together to help a <br />blind user.</p>
            </div>
        </li>
        <li class="col--width__four link--list-item">
            <div class="link--list-item__content rounded-top">
                <h5>Feet controlled devices</h5>
                <p>One can buy foot pedals to hook up to a computer and map actions to it so that the computer can take action. Say the user hooks it up to the tab key to move through a site or the enter key to submit data to a site.</p>
            </div>
        </li>
    </ul>
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Know your audience
* Remember some of these tools in the back of your mind
* These are edge cases, but if you know your user base, you know whether or not you need to keep these things in mind
</div>
</section>

<section class="section--badge-cta section--badge-cta__blue mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/non-traditional-inputs/inputs.png" data-section="interaction" data-badge="nonTraditionalInputs">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Using your feet, true story. Keep that in mind.</h4>
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
