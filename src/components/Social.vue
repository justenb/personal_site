<template>
  <div class="social-links-wrapper">
    <ul class="social-links">
      <li>
        <a
          href="https://linkedin.com/in/justenboykin"
          rel="me"
          aria-label="Linkedin"
        >
          <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="https://github.com/justenb" rel="me" aria-label="GitHub">
          <i class="fab fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="https://www.devpost.com/justenb" rel="me" aria-label="DevPost">
          <i class="fab fa-dev fa-2x" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="mailto:justenboykin@gmail.com" rel="me" aria-label="e-mail">
          <i class="fas fa-envelope fa-2x" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="https://codepen.io/justen" rel="me" aria-label="codepen">
          <i class="fab fa-codepen fa-2x" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
};
</script>

<style lang="scss">
ul.social-links li a {
  color: var($light-hue-1);
}
</style>