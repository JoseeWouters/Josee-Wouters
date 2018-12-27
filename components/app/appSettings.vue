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
@import "@/assets/css/base/_variables.scss";
.settings {
    position: absolute;
    top: 5px;
    right: 0;
    background: var(--white, #ffffff);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -2px 2px 2px 0px rgba(0,0,0,0.2);
    @media (min-width:768px) {
        top: 60px;
    }
    .label {
        padding: 15px;
        margin-left: -50px;
        background: var(--white, #ffffff);
        align-self: flex-start;
        box-shadow: -2px 2px 2px 0px rgba(0,0,0,0.2);
        @media (min-width:768px) {
            margin-left: -60px;
        }
        svg {
        transition: color 0.5s ease;
        cursor: pointer;
        height: 21px;
        width: 21px;
        @media (min-width:768px) {
            height: 32px;
            width: 32px;
        }
        &:hover {
            color: var(--primary, #88C2DD);
        }
    }
    }
    .options {
        padding: 15px;
        white-space: nowrap;
        h2 {
            margin: 0;
        }
        button {
            display: block;
            border: 0;
            padding: 10px;
            margin: 8px 0;
            width: 100%;
            color: var(--white, #ffffff);
            cursor: pointer;
            transition: all .5s ease-in-out;
            font-size: .9rem;
            &:focus {
                outline: 0;
            }
            &:first-of-type {
                margin-top: 20px;
            }
            &:last-child {
                margin-bottom: 0;
            }
            &.startrek {
                background: #9999FF;
                border-bottom: 3px solid #8080ff;
                border-left: 3px solid #8080ff;
                &:hover {
                    background: #8080ff;
                }
            }
            &.pastel {
                background: #88C2DD;
                border-bottom: 3px solid #74b8d8;
                border-left: 3px solid #74b8d8;
                &:hover {
                    background: #74b8d8;
                }
            }
            &.monochroom {
                background: #686868;
                border-bottom: 3px solid #595959;
                border-left: 3px solid #595959;
                &:hover {
                    background: #595959;
                }
            }
        }
    }
}
</style>
