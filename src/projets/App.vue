<template>
  <div id="app">
    <b-container class="shadow-lg px-0 overflow-hidden">
      <b-navbar toggleable="lg" type="light" variant="white" :sticky="stickage">
        <b-navbar-toggle class="border-0" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">ACCUEIL</b-nav-item>
            <b-nav-item href="#" active>PROJETS</b-nav-item>
            <b-nav-item href="portfolio.html">PORTFOLIO</b-nav-item>
            <b-nav-item href="contact.html">CONTACT</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" class="darkmode-icon"><img src="/dark-mode.svg" width="20px" alt="Darkmode Switcher"></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-row>
        <GradientBlueBanner page="Projets"/>
      </b-row>
      <b-row>
        <b-col>
          <ProjectItem projectName="Mon site web" url="#" backgroundURL="/assets/elias_site_picture.png"/>
          <ProjectItem projectName="lawBOT - Discord BOT" url="https://law.minecraftforgefrance.fr/" backgroundURL="https://law.minecraftforgefrance.fr/images/logo.png"/>
          <ProjectItem projectName="Admin Weapons - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2232900-1-7-10-1-14-4-admin-weapons-v3-6-last-update" backgroundURL="https://i.imgur.com/ikWxzLm.png"/>
          <ProjectItem projectName="Fake Ores - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2461487-1-7-10-1-13-2-fake-ores-ores-become-alive-now" backgroundURL="https://i.imgur.com/3SxLGpN.png"/>
          <ProjectItem projectName="Creeperade - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2732815-1-10-1-13-2-creeperade-new-weapons-food-and-more" backgroundURL="https://static.planetminecraft.com/files/resource_media/screenshot/1503/2015-01-12_2129028530933_lrg.jpg"/>
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
import ProjectItem from '../components/ProjectItem.vue'

export default {
  name: 'Projets',
  components: {
    GradientBlueBanner,
    ProjectItem
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
