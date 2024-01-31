<script setup></script>

<template>
  <div class="about">
    <h2 class="about-title">About Me</h2>
    <a
      class="about-link-linkedin"
      href="https://www.linkedin.com/in/serhii-moskalov"
      aria-label="linkedin"
    >
      Linkedin
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>

    <h3 class="about-subtitle">👋 Hi, I’m Serhii</h3>
    <p class="about-text">
      As a Front-end Developer, I am proficient in HTML5, CSS3, JavaScript,
      TypeScrypt, React, Vue3, React Native, Node.js, etc. I'm currently a
      junior developer, but I'm progressing in development to grow
      professionally. I'm looking for a job as a Front-end Developer.
    </p>

    <h3 class="about-subtitle">A couple more of my recent projects</h3>
    <ul class="about-list">
      <li class="about-list-item">
        <a
          class="about-link-projects text-up"
          href="https://private-driver-a.vercel.app/"
          target="blank"
        >
          🚙 private driver
        </a>
      </li>
      <li class="about-list-item">
        <a
          class="about-link-projects text-up"
          href="https://leo-car-rental.vercel.app/"
          target="blank"
        >
          🚘 leo car rental
        </a>
      </li>
      <li class="about-list-item">
        <a
          class="about-link-projects"
          href="https://www.linkedin.com/in/serhii-moskalov/details/projects/"
          target="blank"
        >
          you can see more details about projects and other projects ...
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.about
  margin: auto
  padding: 40px
  max-width: 640px

.about-title
  padding-bottom: 20px
  font-size: 18px
  font-weight: 700
  text-align: center

.about-link-linkedin
  display: inline-block
  padding: 20px
  color: $accent
.about-link-linkedin:hover
  color: $heart

.about-subtitle
  padding: 4px
  font-weight: 700

.about-text
  padding: 4px 20px 40px
  text-indent: 40px
  line-height: 1.8

.about-list
  display: flex
  flex-direction: column
  padding-left: 12px

.about-list-item
  padding: 4px

.about-link-projects
  color: $accent

.about-link-projects:hover
  color: $cart

.about-link-projects.text-up
  text-transform: uppercase
</style>
