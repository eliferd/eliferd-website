<template>

  <div id="app">

    <div class="logo text-center">
      ELIFERD
    </div>

    <b-container class="shadow-lg px-0 overflow-hidden">

      <b-navbar toggleable="lg" type="light" variant="white">

        <b-navbar-toggle class="border-0" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>

            <b-nav-item to="/" exact>ACCUEIL</b-nav-item>
            <b-nav-item to="/projects">PROJETS</b-nav-item>
            <b-nav-item to="/portfolio">PORTFOLIO</b-nav-item>
            <b-nav-item to="/contact">CONTACT</b-nav-item>

          </b-navbar-nav>

          <!-- <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" class="darkmode-icon"><img src="/dark-mode.svg" width="20px" alt="Darkmode Switcher"></b-nav-item>
          </b-navbar-nav> -->
        </b-collapse>

      </b-navbar>

      <router-view/>

    </b-container>

  </div>

</template>

<style scoped lang="scss">

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F3F3F3;
  color: #2c3e50;
}

.logo {
    font-family: Montserrat, sans-serif;
    font-size: 92px;
    padding: 30px 0 30px 0;
    color: #404040;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
    transition: font-size 0.4s;
}

.darkmode-icon {
    opacity: 0.5;

    &:hover {
      opacity: 0.8;
    }
}

@media(max-width: 767px) {
    .logo {
        font-size: 67px;
    }
}
</style>
