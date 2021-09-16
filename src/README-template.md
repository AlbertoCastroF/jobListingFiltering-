# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/AlbertoCastroF/jobListingFiltering-)
- Live Site URL: [Add live site URL here](https://albertocastrof.github.io/jobListingFiltering-/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I want to create react projects that i code myself rather than following a tutorial, so i decided to take this idea as a challenge to practice React. I mostly practiced what i knew about React but one major think i learned is that i can use useEffect to update a state before immediatly passing it to another function wich is a key aspect to the solution of this challenge.

```js
useEffect(() => {
  setBadgeData(filterBadges());
}, [filterTags]);
```

### Continued development

Id like to continue creating bigger projects to wrap my head up around the concept of reusability since i feel that in some cases may not be really necessary.

### Useful resources

- [React useEffect documentation](https://reactjs.org/docs/hooks-effect.html) - I had a better understanding about how useEffect works.

- [Coolors](https://www.coolors.co) - Excellent site to find matching colors.

## Author

- Website - [Alberto Castro Flores](https://www.linkedin.com/in/alberto-castro-flores-02007959/)
- Frontend Mentor - [@AlbertoCastroF](https://www.frontendmentor.io/profile/@AlbertoCastroF)

## Acknowledgments

My main problem with this challenge is that i wanted to use an array of strings to filter the data of job offers, but due to the asynchronous nature of React at assigning values to state, the array of string woulnt update immediately, so i found a solution where i could update state by passing my array to useEffect as a second argument to make the array of strings available for the next function immediately.
