---
title: 'Behind the scenes'
visible: true
summary: 'As we draw a close to the end of the sight manual, keep in mind there are some behind the scenes items that users can’t really see—unless they pop open dev tools or are using screen reader technology. Make sure that your images have alt tags. Please for the love of god put alt tags on your images. Guess what? Screen readers READ the alt tags when used. It also provides a fallback when images aren’t loading and it helps with SEO. Do we have your scout’s honor?'
stats:
    examples: '16'
twig_first: true
process:
    twig: true
---
<section>
<div class="container--content" markdown="1">
# Keeping the camp fire toasty and the axe sharp

---

Keep in mind there are some behind the scenes goodies that users can’t really see (duh!)—unless they pop open dev tools or are using screen reader technology. (Meaning, you can see them.) It may seem a little odd that this fits under the sight category, but ARIA tags aid the semantics see by humans and screen readers.

![ILLUSTRATION](camp-fire-axe.png)

Make sure that your images have alt tags. Please for the love of god put alt tags on your images. Guess what? Screen readers <br />READ the alt tags when used. It also provides a fallback when images aren’t loading and it helps with SEO. Do we have your scout’s honor?
</div>
</section>

<section class="mt--60 mb--60">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col">
                <div class="box white">
                    <h3 class="pt--0 mt--0">Broken image with alt text</h3>
                    <p>Go ahead and turn on Chrome Vox to read this page. Listen for what happens when it hits a broken image <em>with</em> alt text.</p>
                    <img src="#" alt="This image has alt text, which is the way it should be." />
                </div>
            </div>
            <div class="col">
                <div class="box white">
                    <h3 class="pt--0 mt--0">Broken image without alt text</h3>
                    <p>Go ahead and turn on Chrome Vox to read this page. Listen for what happens when it hits a broken image <em>without</em> alt text.</p>
                    <img src="#" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
---

The ARIA spec is hard to read, so below are some of the key points to understand from it to include in your code to make your content and interactions more compliant. Some HTML5 attributes have ARIA roles attached to them, some can be modified, others have to be specified explicitly—like hidden objects.

</div>
</section>

<section>
    <div class="container--content">
    <h2>Here are some of the most usefule ARIA attributes to be used in HTML and javascript!</h2>
        <div class="flex-grid--gutters flex-wrap">
            <div class="col--width__six">
                <h5>Aria attribute:</h5>
            </div>
            <div class="col--width__six">
                <h5>What it does:</h5>
            </div>
            <div class="col--width__six">
                <pre>aria-hidden="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Indicates that the element and all of its descendants are not visible or perceivable to any user. (Should be used with display none folks!)</p>
            </div>
            <div class="col--width__six">
                <pre>aria-required="true"</pre>
            </div>
            <div class="col--width__six">
                <p>The aria-required attribute is used to indicate that user input is required on an element before a form can be submitted. (Use when required is attached to your form input.)</p>
            </div>
            <div class="col--width__six">
                <pre>aria-disabled="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Indicates that the element is perceivable but disabled, so it is not useable.</p>
            </div>
            <div class="col--width__six">
                <pre>aria-readonly="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Points out that the element is not editable, but is otherwise operable.</p>
            </div>
            <div class="col--width__six">
                <pre>aria-invalid="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Indicates the entered value does not conform to the format expected by the application. This should be dispatched when validating forms</p>
            </div>
            <div class="col--width__six">
                <pre>aria-label="This is a label"</pre>
            </div>
            <div class="col--width__six">
                <p>The aria-label attribute is used to define a text that labels the current element. Use it where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.</p>
            </div>
            <div class="col--width__six">
                <pre>aria-expanded="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Shows whether the element, or another grouping element it controls, is currently expanded or collapsed. (Dropdowns, accordions, etc.)</p>
            </div>
            <div class="col--width__six">
                <pre>aria-checked="true"</pre>
            </div>
            <div class="col--width__six">
                <p>Notates whether or not a button is pressed.</p>
            </div>
            <div class="col--width__six">
                <pre>aria-labelledby="camp"</pre>
            </div>
            <div class="col--width__six">
                <p>Think of it has the category of the list.</p>
            </div>
            <div class="col--width__six">
                <pre>aria-selected="true"</pre>
            </div>
            <div class="col--width__six">
                <p>If element is currently selected.</p>
            </div>
            <div class="col--width__six">
                <pre>role="banner"</pre>
            </div>
            <div class="col--width__six">
                <p>An area that contains content about the site.</p>
            </div>
            <div class="col--width__six">
                <pre>role="contentinfo"</pre>
            </div>
            <div class="col--width__six">
                <p>An area that contains info about the parent page.</p>
            </div>
            <div class="col--width__six">
                <pre>role="alert"</pre>
            </div>
            <div class="col--width__six">
                <p>A message with important information.</p>
            </div>
            <div class="col--width__six">
                <pre>role="presentation"</pre>
            </div>
            <div class="col--width__six">
                <p>An element that is purely presentational and has no other use.</p>
            </div>
            <div class="col--width__six">
                <pre>role="group"</pre>
            </div>
            <div class="col--width__six">
                <p>One SHOULD use a group to form logical collection of items. If they fit together thematically and semantically, add this attribute.</p>
            </div>
            <div class="col--width__six">
                <pre>tabindex="0"</pre>
            </div>
            <div class="col--width__six">
                <p>The tabindex attribute of 1+ hard sets the navigation order for focusable elements. Most often links and form controls. It should not be messed with unless the default is not ideal or the order cannot be change be rearranging the items.</p>
            </div>
        </div>
        <p markdown="1">If you'd like to read the entire spec, or learn more about aria attributes and roles visit [ARIA in HTML](https://www.w3.org/TR/html-aria/)</p>
    </div>
</section>

<section>
<div class="container--content" markdown="1">
### Scout Review

* Review the ARIA examples to make sure you are incorporating the most important into your markup. It’s not too hard, you just need to know what goes where.
* PUT CONTENT IN YOUR ALT TAGS.
</div>
</section>

<section class="section--badge-cta section--badge-cta__red mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/behind-the-scenes/behind-the-scences.png" data-section="vision" data-badge="behindTheScenes">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Keep on treadin' down the path to glory <br />and ultimate knowledge.</h4>
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
