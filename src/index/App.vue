<template>
  <div id="app">
    <b-container class="shadow-lg px-0 overflow-hidden">
      <b-navbar toggleable="lg" type="light" variant="white" :sticky="stickage">
        <b-navbar-toggle class="border-0" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" active>ACCUEIL</b-nav-item>
            <b-nav-item href="projets.html">PROJETS</b-nav-item>
            <b-nav-item href="portfolio.html">PORTFOLIO</b-nav-item>
            <b-nav-item href="contact.html">CONTACT</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><img src="/dark-mode.svg" width="20px" alt="Dark mode"></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-row>
        <GradientBlueBanner page="Bienvenue !"/>
      </b-row>
      <b-row>
        <b-col>
          <h3 class="mt-4 text-center">Bienvenue sur mon site !</h3>
          <hr class="hr">
          <p class="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis delectus qui, facere molestiae officiis tempora? Vero laboriosam facere deserunt, nobis accusamus corrupti consequuntur veniam, ipsum assumenda maxime sit rerum.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="my-3 text-center">
          elias54 © 2017-2020 All rights reserved.
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style src="./style.css"></style>
<script>
import GradientBlueBanner from '../components/GradientBlueBanner.vue'

export default {
  name: 'Index',
  components: {
    GradientBlueBanner
  },
  props: {
    sticky: {
      type: Boolean
    }
  },
  computed: {
    stickage: function () {
      return true
    }
  }
}
</script>
