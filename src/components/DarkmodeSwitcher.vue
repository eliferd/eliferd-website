<template>
    <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" class="darkmode-icon" @click="toggleTheme"><img :src="require('@/assets/' + (this.userTheme === 'light-theme' ? 'dark-theme' : 'light-theme') + '.svg')" width="20px" alt="Darkmode Switcher"></b-nav-item>
    </b-navbar-nav>
</template>

<style lang="scss" scoped>

.darkmode-icon {
    opacity: 0.5;

    &:hover {
      opacity: 0.8;
    }
}

</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'DarkmodeSwitcher',
    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme || '');
    },
    data() {
        return {
            userTheme: "light-theme",
        };
    },
    methods: {
        toggleTheme() {
            const activeTheme = localStorage.getItem('user-theme');
            const toggledTheme = activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
            this.setTheme(toggledTheme);
        },
        setTheme(theme: string) {
            if(theme !== '') {
                localStorage.setItem('user-theme', theme);
                this.userTheme = theme;
                document.documentElement.className = theme;
            }
        },
        getMediaPreference() {
            const hasSystemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem('user-theme');
            if (hasSystemPreference) {
                return "dark-theme";
            } else {
                if(localStorage.getItem('user-theme')) {
                    return localStorage.getItem('user-theme');
                } else {
                    return "light-theme";
                }
            }
        }
    }
});
</script>
