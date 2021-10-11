<template>

    <div>

        <b-row>
        
            <GradientBlueBanner page="Projets"/>
        
        </b-row>
        
        <b-row>
        
            <b-col>

                <ProjectItem projectName="Mon site web" url="#" backgroundURL="./assets/elias_site_picture.png"/>
                <ProjectItem projectName="lawBOT - Discord BOT" url="#" backgroundURL="./assets/lawbot.png"/>
                <ProjectItem projectName="Admin Weapons - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2232900-1-7-10-1-14-4-admin-weapons-v3-6-last-update" backgroundURL="https://i.imgur.com/ikWxzLm.png"/>
                <ProjectItem projectName="Fake Ores - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2461487-1-7-10-1-13-2-fake-ores-ores-become-alive-now" backgroundURL="https://i.imgur.com/3SxLGpN.png"/>
                <ProjectItem projectName="Creeperade - Minecraft Mod" url="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/2732815-1-10-1-13-2-creeperade-new-weapons-food-and-more" backgroundURL="https://static.planetminecraft.com/files/resource_media/screenshot/1503/2015-01-12_2129028530933_lrg.jpg"/>
        
            </b-col>
        
        </b-row>
        
        <hr>

        <CustomFooter/>

    </div>

</template>

<script lang="ts">

import Vue from 'vue';
import GradientBlueBanner from '@/components/GradientBlueBanner.vue';
import ProjectItem from '@/components/ProjectItem.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default Vue.extend({
  name: 'Projets',
  components: {
    GradientBlueBanner,
    ProjectItem,
    CustomFooter
  }
});

</script>
