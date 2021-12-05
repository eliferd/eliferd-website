<template>
  <div>

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
          Ce site internet était précédemment développé en HTML pur, mais avec le temps j'ai pris la décision de développer une nouvelle version avec <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a>. <br>
          J'appliquerai donc au fil du temps des mise à jour afin de l'améliorer. Tout comme la version précédente, le site est bien entendu responsive (et moins buggué de ce côté là).<br><br>
          Il se peut certains liens dans <router-link to="/projects">PROJETS</router-link> soient mort, ceci étant malheureusement indépendant de ma volonté.<br>
          Bonne visite ! :D
        </p>

      </b-col>

    </b-row>

    <hr>

    <CustomFooter/>

  </div>
</template>

<style lang="scss" scoped>

hr.custom {
    border: 1px solid var(--hr-custom-color);
    width: 70px;
}

</style>

<script lang="ts">

import Vue from 'vue';
import GradientBlueBanner from '@/components/GradientBlueBanner.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    GradientBlueBanner,
    CustomFooter
  },
  created() {
    document.title = this.$route.meta?.title;
  }
});

</script>
