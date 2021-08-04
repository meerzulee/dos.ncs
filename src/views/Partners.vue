<template>
    <div>
        <div class="bg-secondary overflow-hidden">
            <div class="container flex px-24 pb-24 pt-16 flex-col items-center">
                <h1 class="font-semibold mb-20">Key Partnerships</h1>
                <div class="w-full">
                <img src="@/assets/images/companiesLogo.png" class="w-full object-fill h-full" alt="">

                </div>
            </div>
        </div>
                 <!-- Organization -->
        <div class="green-gradient bg-black bg-opacity-75 max-h-96 pt-16 w-full relative z-10">
            <div class="flex flex-col items-center z-5 relative">
                <h2 class="text-3xl text-center leading-normal text-white">
                    We help organizations maintain.
                    <br />Without the need of multiple solutions. Continuous threat
                    <br />detection platform.
                </h2>
                <router-link to="/connect" class="btn mt-10">get started</router-link>
            </div>
            <div class="flex pt-18 flex justify-center">
                <img src="@/assets/images/globe.png" class="absolute bottom-0 z-1" alt />
            </div>
        </div>
 <!-- founders -->
       <founders/>
        <!-- contact us -->
     <contact-us/>
    </div>
</template>

<script>
import ContactUs from '../components/ContactUs.vue'
import Founders from '../components/Founders.vue'
    export default {
  components: { Founders, ContactUs },
        
    }
</script>

<style lang="scss" scoped>

</style>