<template>

    <div>

        <b-row>

            <GradientBlueBanner page="Mes réseaux"/>

        </b-row>

        <b-row class="mx-0">

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="twitter" name="elias54_" url="https://twitter.com/elias54_" colorCode="#1DA1F2"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="facebook-f" name="Eliferd" url="https://www.facebook.com/elif3rd" colorCode="#1778F2"/>

            </b-col>
        
            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="instagram" name="eliferd_" url="https://www.instagram.com/eliferd_/" colorCode="#DD2A7B"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="youtube" name="Eliferd" url="https://www.youtube.com/user/eliaas54" colorCode="#FF0000"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="steam-square" name="Eliferd" url="http://steamcommunity.com/id/elias54700" colorCode="#2A475E"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="github" name="eliferd" url="https://github.com/eliferd" colorCode="#211F1F"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="vimeo-v" name="eliferd" url="https://vimeo.com/eliferd" colorCode="#19B7EA"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="dribbble" name="eliferd" url="https://dribbble.com/eliferd" colorCode="#EA4C89"/>

            </b-col>

            <b-col sm="4" md="4" lg="3" class="px-0 d-flex justify-content-center">

                <SocialMediaItem icon="twitch" name="Eliferd_" url="https://www.twitch.tv/Eliferd_" colorCode="#6441A4"/>

            </b-col>

        </b-row>

        <hr>

        <CustomFooter/>

    </div>

</template>

<script lang="ts">

import Vue from 'vue';
import GradientBlueBanner from '@/components/GradientBlueBanner.vue';
import SocialMediaItem from '@/components/SocialMediaItem.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default Vue.extend({
    name: 'Contact',
    components: {
        GradientBlueBanner,
        SocialMediaItem,
        CustomFooter
    }
});

</script>
