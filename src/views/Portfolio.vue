<template>
    
    <div>
        
        <b-row>
        
            <GradientBlueBanner page="Portfolio"/>
        
        </b-row>
        
        <b-row class="mx-0">
        
            <span class="w-100 text-center mt-4">Survolez les images pour en savoir plus.</span>
        
        </b-row>
        
        <b-row class="mx-0">
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/lowboulder.png" name="Low Boulder" description="Réalisation personelle."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/bloodline.png" name="Bloodline" description="Réalisation personelle."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/com-bios-frw.png" name="CMP-BIOS FRW" description="Réalisation personelle."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/mff-dev.png" name="MFF Dev" description="Logo pour un projet de site avorté."/>
            
            </b-col>

            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/circumstance.png" name="Circumstance" description="Logo factice. Réalisation pour travailler ma pratique."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/contest.png" name="Contest" description="Logo factice. Réalisation pour travailler ma pratique."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="https://www.minecraftforgefrance.fr/" imageURL="./assets/mff-jam.png" name="M.F.F Jam" description="Logo de la MFFJam, une compétition organisée par Minecraft Forge France."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/sg.png" name="Silver Game" description="Logo pour un projet de serveur Minecraft avorté."/>
            
            </b-col>

            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/pg.png" name="Power Game" description="Logo réalisé pour un ancien serveur Minecraft."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/elias-3.png" name="Logo personnel" description="Logo de mon identité visuelle avec un style futuriste."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/elias-2.png" name="Logo personnel" description="Logo de mon identité visuelle avec un jeux de formes."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/elias-1.png" name="Logo personnel" description="Logo de mon identité visuelle avec un autre style ''méca''."/>
            
            </b-col>

            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/elias-0.png" name="Logo personnel" description="Logo de mon identité visuelle avec un style ''mécanique''."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/kayiji.png" name="Kayiji" description="Logo extrêmement simpliste réalisé pour un YouTuber."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="https://www.youtube.com/user/JELProd/" imageURL="./assets/networkers.png" name="N.E.T Workers" description="Logo fait pour un trio de vidéastes/streamers."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem imageURL="./assets/infinity.png" name="Infinity Hub" description="Logo réalisé pour un ancien serveur Discord."/>
            
            </b-col>

            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="http://steamcommunity.com/profiles/76561198140385432" imageURL="./assets/kaly.png" name="Kaly" description="Logo pour un ami de longue date."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="https://www.youtube.com/user/elouanmace" imageURL="./assets/elouan.png" name="Elouan78" description="Logo extrêmement simpliste réalisé pour un YouTuber."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="https://steamcommunity.com/id/DC4910/" imageURL="./assets/dc4910.png" name="DC4910" description="Logo fait plutôt rapidement pour DC4910."/>
            
            </b-col>
        
            <b-col md="6" lg="3" class="p-0 d-flex justify-content-center">
            
                <PortfolioItem url="https://steamcommunity.com/groups/WRZR" imageURL="./assets/waryzer.png" name="Waryzer" description="Logo d'équipe pour un groupe Steam."/>
            
            </b-col>
        
        </b-row>
        
        <hr>
        
        <CustomFooter/>
    </div>

</template>

<script lang="ts">

import Vue from 'vue';
import GradientBlueBanner from '@/components/GradientBlueBanner.vue';
import PortfolioItem from '@/components/PortfolioItem.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default Vue.extend({
    name: 'Portfolio',
    components: {
        GradientBlueBanner,
        PortfolioItem,
        CustomFooter
    },
    created() {
        document.title = this.$route.meta?.title;
    }
});

</script>
