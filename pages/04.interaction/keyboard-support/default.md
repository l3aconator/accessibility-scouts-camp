---
title: Keyboard support
visible: true
summary: 'Sometimes a keyboard may be the only way a person can use a computer. This has been mentioned already, but your tab ordering and keyboard support has to be on point. The best way to show this again is to use a screen reader and test out the examples.'
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
# No more mouse hunting

---

Sometimes a keyboard may be the only way a person can use a computer. This has been mentioned already, but your tab ordering and keyboard support has to be on point. The best way to show this again is to use a screen reader and test out the examples.
</div>
</section>

<section>
<div class="container--content" markdown="1">
### Here are few ways to enrich the transcript experience, though:
</div>
    <div class="container">
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Good tab order example</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="awbjbN" data-default-tab="html,result" data-user="l3acon" data-embed-version="2" data-pen-title="Good tab order example" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/awbjbN/">Good tab order example</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <div class="box white mt--90 mb--90">
            <h3 class="mt--0">Bad tab order example</h3>
            <p data-height="265" data-theme-id="dark" data-slug-hash="wevxvE" data-default-tab="html,result" data-user="l3acon" data-embed-version="2" data-pen-title="Bad tab order example" class="codepen">See the Pen <a href="https://codepen.io/l3acon/pen/wevxvE/">Bad tab order example</a> by Kyle Bacon (<a href="https://codepen.io/l3acon">@l3acon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Test, test, and test your tab order and keyboard support
* Turn your mouse off, leave your track pad alone and see if you can use your site solely with a keyboard
</div>
</section>

<section class="section--badge-cta section--badge-cta__blue mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/keyboard-support/keyboard-support.png" data-section="interaction" data-badge="keyboardSupport">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Don't mess with people slappin' the tab key unless you absolutely have to.</h4>
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
