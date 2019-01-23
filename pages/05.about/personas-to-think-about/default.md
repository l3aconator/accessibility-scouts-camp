---
title: Personas to think about
visible: true
summary: 'Without any context and knowing who you are designing for, accessibility falls flat. It’s hard to cater to every disability, so knowing your audience allows you to do the most good for the most people. Here are some personas that will help you do the most good.'
stats:
    examples: '2'
    readingTime: '20 minutes'
    badges: '10'
twig_first: true
process:
    twig: true
---
<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
### Persona—Color Blind

#### Sam Camper

Keep in mind that 1 in 200 women and 1 in 12 men are color blind. The persona here will be a male and we'll call him Sam. He has a Red-green deficiency in his eye sight. (Meaning reds, yellows, oranges, and greens end up appearing as various shades of yellow. Reds may appear as black.)

Your site is designed using a lot of warm colors. Sam can't distinguish the colors because they are in a color range he can't see, everything is muddy and can't tell where to look. He gets frustrated and leaves the site.

###### Upshot:
* You've lost a potential user
* Your colors are hard to distinguish
* If your site caters to men, 1/12 of them have trouble with color

###### Quick fixes:
* If using these colors, make sure there's plenty of contrast or difference between them. Even if the color isn't displayed correctly, Sam can still tell what is going on.
* Know your audience and pick your color palette accordingly!
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
### Persona—Blind

#### Sally Camper

One would think it would be impossible to use the Internet if one was blind. It's not and with the help of you, the experience can be pleasurable. Sally has been blind since birth and never really had access to a computer. Her school requires some assignments to be completed on the Internet. She sits down at a computer with a keyboard and mouse. The computer has been configured to use text-to-speech and a screen reader. As she navigates with the tab key, listening to the computer's feedback, she's able to get to her course website. She can't figure out how to navigate because the semantic structure of the site isn't built with best practices and doesn't utilize aria attributes to aid the browser screen reader software. The tab order of the site is also unuseable. She's lost, upset, frustrated, helpless, and anxious. She keeps trying to find where she needs to go and eventually gives up and asks someone in the room for help.

###### Upshot:
* You've lost a potential user
* Your site is poorly built and unsemantic
* The tab order is out of whack and makes it impossible to navigate with a keyboard
* Aria attributes aren't present to aid the poor semantic structure
* Your user feels helpless because she has to rely on someone else to help

###### Quick fixes:
* Look at semantic structure again and refactor to best practices
* Add in aria attributes to further aid the screen reader
* Test your site with a screen reader
* Put yourself in their shoes, close your eyes and navigate the site with keyboard interactions and audio only
* User test with sight disabled folks
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
### Persona—Deaf

#### Beet Camper

The web is definitely more friendly to those who can't hear, since one can see where they need to click and navigate to, but another set of challenges surface. The consumption of audio and visual content becomes impossible and quite frankly, useless to the viewer. Beet watches YouTube videos all the time and is able to follow along with the visuals because someone has written out subtitles to go along with the video. There's a few Facebook videos that also provide transcripts which also allows him to follow along. Without video transcripts, the user doesn't have context to the visuals in front of him.

###### Upshot:
* Audio and visual content is lost and useless to a deaf user

###### Quick fixes:
* Provide written transcript to audio and video content
* Provide realtime closed captioning (subtitles) to videos or use a service that creates transcripts for you
* If providing a music track to listen to, give some lyrics to reading. If the song doesn't have spoken words, notate that, give context to the instruments being played.
* Think of ways to enrich Beet's experience that he wouldn't have had otherwise
</div>
</div>
</section>

<section>
<div class="container--content section--marg">
<div class="box purple stripe" markdown="1">
### Persona—Elderly and new to computers

#### Phyllis Camper

The elderly and those who are new to computers have similar challenges so we'll be talking about them together. Phyllis has a hard time seeing and her confidence level with computers and the web is next to none. She's afraid of every pop up and unexpected action. It causes anxiety for her. Those dang kids and their good eyes cause text to be smaller than what she can read screen. She has trouble with low contrast text, small type, and not knowing what button to click to do what she wants. (Same goes for the new to computers audience.) She either calls her nephew to help her or throws the computer out the window out of fear and frustration.

###### Upshot:
* Low confidence
* Doesn't know what to do
* She feels like every action isn't the one she wants
* Can hardly read the low contrast colors
* Can hardly read the tiny typography
* The interactions, spinning, color changes, floating labels moving on the click of the form makes her want to pull her hair out

###### Quick fixes:
* Clearly written instructions and call-to-actions
* Keep your type at a healthy size
* Avoid low contrast text
* If animating, making fancy interactions, etc. make sure they make sense. Make sure they don't detract from the experience and make someone wonder if they've done something wrong. Don't move form labels, it freaks people out. It's cool and all, but a form serves a purpose and isn't a Pixar movie.
</div>
</div>
</section>

<section class="section--badge-cta section--badge-cta__orange mt--90">
    <div class="container">
        <div class="flex-grid--gutters">
            <div class="col--width__four">
                <div class="badge--box">
                    <img class="img--badge badge--dispatch" alt="A badge." src="/user/pages/06.badge/personas-to-think-about/personas.png" data-section="about" data-badge="personasToThinkAbout">
                </div>
            </div>
            <div class="col--width__eight">
                <h3>Way to go! Nice badge scout.</h3>
                <h4>Hmmmmmmm. Hmmm. People, we love helping people and pretending to be them.</h4>
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
