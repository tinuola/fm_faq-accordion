# Frontend Mentor: FAQ Accordion Card
Solution to the _[FAQ Accordion Card](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam)_ challenge on Frontend Mentor.


### Challenge
- Build out an FAQ accordion card using provided designs.

- Users should be able to:
  - View the optimal layout for the component depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Hide/Show the answer to a question when the question is clicked


### Solution
Live Site: [https://tinuola.github.io/fm_faq-accordion/](https://tinuola.github.io/fm_faq-accordion/)


### Retrospective
- Working with the graphical elements was more challenging than expected, especially positioning the background pattern beneath the main image. Reviewing another [Frontend Mentee's solution](https://www.frontendmentor.io/solutions/faq-with-semantic-html-and-css-only-no-js-q8Tv70r8nV) provided enough hints to formulate an approach and achieve the desired visual/positioning effects.
- Another challenge? Anchoring the graphical cube to a fixed position. In the initial code, the image moved as the overall container expanded for the accordion elements and was also partially covered by the `overflow:hidden` property of the original `container` element. Creating an `outer-container` and setting the image with a pseudo-element to this new container seemed to do the trick for both issues! 


### Potential Enhancement(s)
- Animate accordion dropdown behavior
- Animate graphical elements


### Tools & Resources
- HTML, CSS, JavaScript
- [A Modern CSS Reset by Andy Bell](https://piccalil.li/blog/a-modern-css-reset/)
- [How to use SVG with :before or :after pseudo element](https://www.geeksforgeeks.org/how-to-use-svg-with-before-or-after-pseudo-element/)


_Visit my [Frontend Mentor profile](https://www.frontendmentor.io/profile/tinuola) to view other challenges I've completed!_