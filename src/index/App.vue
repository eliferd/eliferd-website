<template>
  <div id="app">
    <b-container class="shadow-lg px-0">
      <b-navbar toggleable="lg" type="light" variant="white" :sticky="stickage">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
      <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam, dolore commodi esse magnam ut. Fugiat vero, distinctio neque officiis assumenda qui? Maiores, vitae quasi placeat ea voluptates ipsum voluptatem?</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Index',
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

<style src="./style.css"></style>
