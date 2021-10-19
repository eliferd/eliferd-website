<template>

  <div id="app">

    <div class="logo text-center">
      ELIFERD
    </div>

    <b-container class="container-shadow px-0 overflow-hidden">

      <b-navbar toggleable="lg" type="light" variant="white">

        <b-navbar-toggle class="border-0" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>

            <b-nav-item to="/" exact>ACCUEIL</b-nav-item>
            <b-nav-item to="/projects">PROJETS</b-nav-item>
            <b-nav-item to="/portfolio">PORTFOLIO</b-nav-item>
            <b-nav-item to="/contact">CONTACT</b-nav-item>

          </b-navbar-nav>

          <DarkmodeSwitcher/>
        </b-collapse>

      </b-navbar>

      <router-view/>

    </b-container>

  </div>

</template>

<style lang="scss">
:root {
  --background-color-primary: #F3F3F3;
  --color-primary: #2c3e50;
  --logo-color: #404040;
  --logo-shadow-color: rgba(0, 0, 0, 0.35);
  --hr-custom-color: black;
  --container-shadow: rgba(0, 0, 0, 0.18);
}

:root.dark-theme {
  --background-color-primary: #222222;
  --color-primary: #d4d4d4;
  --logo-color: #ffffff;
  --logo-shadow-color: rgba(255, 255, 255, 0.35);
  --hr-custom-color: white;
  --container-shadow: rgba(0, 0, 0, 0.3);
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color-primary);
  color: var(--color-primary);
}

.logo {
    font-family: Montserrat, sans-serif;
    font-size: 92px;
    padding: 30px 0 30px 0;
    color: var(--logo-color);
    text-shadow: 0px 4px 8px var(--logo-shadow-color);
    transition: font-size 0.4s;
}

.container-shadow {
  box-shadow: 0 1rem 3rem var(--container-shadow);
}

@media(max-width: 767px) {
    .logo {
        font-size: 67px;
    }
}
</style>

<script lang="ts">
import Vue from 'vue';
import DarkmodeSwitcher from '@/components/DarkmodeSwitcher.vue';

export default Vue.extend({
  name: 'App',
  components: {
    DarkmodeSwitcher
  }
});
</script>
