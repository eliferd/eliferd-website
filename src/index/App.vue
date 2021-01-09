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
            <b-nav-item href="#" class="darkmode-icon"><img src="/dark-mode.svg" width="20px" alt="Darkmode Switcher"></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-row>
        <GradientBlueBanner page="Bienvenue"/>
      </b-row>
      <b-row>
        <b-col>
          <h3 class="my-4 text-center">Bienvenue sur mon site !</h3>
          <hr class="custom">
          <p class="p-4">
            Bonjour à tous et bienvenue sur mon site web! <br>
            Je suis un jeune développeur full-stack passionné d'informatique.<br>
            J'ai développé ce site internet dans le but de recenser mes différents projets personnels et créations artistiques. <br><br>
            Ce site internet était précédemment développé en HTML pur, mais avec le temps j'ai pris la décision de développer une nouvelle version avec <a href="https://vuejs.org/" target="_blank">VueJS</a>. <br>
            J'appliquerai donc au fil du temps des mise à jour afin de l'améliorer. Tout comme la version précédente, le site est bien entendu responsive (et moins buggué de ce côté là).<br><br>
            Il se peut certains liens dans <a href="projets.html">PROJETS</a> soient mort, ceci étant malheureusement indépendant de ma volonté.<br>
            Bonne visite ! :D
          </p>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="12" class="mb-3 text-center">
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
