<template>
    <section class="settings">
        <div class="label" @click="toggleSettings()">
            <cog/>
        </div>
        <transition name="fade">
            <div class="options" v-show="open">
                <h2>Verander kleurenpalet</h2>
                <button class="pastel" @click="pastel();">Pastel</button>
                <button class="startrek" @click="startrek();">Star Trek</button>
                <button class="monochroom" @click="monochroom();">Monochroom</button>
            </div>
        </transition>
    </section>
</template>

<script>

import cog from '@/components/icons/cog.vue'

export default {
    data: () => ({
        open: false
    }),
    mounted() {
        if (localStorage.length >= 1) {
            let currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'startrek') {
                this.startrek();
                this.toggleSettings();
            } else if (currentTheme === 'monochroom') {
                this.monochroom();
                this.toggleSettings();
            } else if (currentTheme === 'pastel') {
                this.pastel();
                this.toggleSettings();
            }
        }
    },
    components: { cog },
    methods: {
        toggleSettings() {
            this.open = !this.open;
        },
        setTheme(theme) {
            for (let key in theme) {
                document.getElementsByTagName("body")[0].style.setProperty('--' + key, theme[key]);
            }
            this.toggleSettings();
        },
        pastel() {
            var theme = {
                background: "#F3FCE8",
                text: "#01385D",
                primary: "#88C2DD",
                secondary: "rgba(136,194,221,0.27)",
                tertiary: "#F3D6EC"
            };

            this.setTheme(theme);
            localStorage.setItem('theme', 'pastel');
        },
        monochroom() {
            var theme = {
                background: "#000000",
                text: "#000000",
                primary: "#686868",
                secondary: "#cccccc",
                tertiary: "#989898"
            };

            this.setTheme(theme);
            localStorage.setItem('theme', 'monochroom');
        },
        startrek() {
            var theme = {
                background: "#0b2143",
                text: "#0b2143",
                primary: "#9999FF",
                secondary: "#FF9900",
                tertiary: "#FFCC99"
            };

            this.setTheme(theme);
            localStorage.setItem('theme', 'startrek');
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
