// windi.config.js
//@ts-check //- enable TS check for js file
// @ts-ignore
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    corePlugins: {
        container: false
    },
    theme: {
        fontFamily: {
            sans: ['Lato']
        },
        extend: {
            screens: {
                laptop: {
                    max: '1440px'
                }
            },
            colors: {
                primary: "#149A4F",
                secondary: "#F0F8FA"
            }
        }
    }
})