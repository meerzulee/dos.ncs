<template>
    <div>
        <!-- about us -->
         <div class="bg-secondary overflow-hidden">
            <div class="container flex p-24 flex-col items-center">
                <h1 class="font-semibold mb-16">About Us</h1>
               
                <p class="text-2xl font-light">
                    DOS.NCS.KG LLC is a solution and service centric organization with range of solutions on wide platforms and technologies. We focus on Information Security and IT SOlutions. Our aim is to deliver solutions that enhance performance, lower costs, reduce risk and build competitive value additions by improving reliability, speed and agility.
                    <br>
                    <br>
                    Our Vision is to offer the best products and services to exceed customer expectations resulting customer delight. The aim is to enable concrete business growth through a process driven approach along with technology. Prime helps its clients to transform their business to the next leap in order to improve their proposition and competitive positioning.
                    <br>
                    <br>
                    The offerings combine an array of integrated services and products that reveals top-of-the-range technology with in-depth domain expertise. The approach is based on solutions & services with OEM agnostic framework.
                    
                    </p>
            
            </div>
        </div>
        <!-- our partners -->
        <div class="bg-white border-t-3 border-primary py-11">
            <div class="container flex justify-between items-center">
                <h1 class="pl-6 border-l-primary border-l-4">
                    Our Partners
                  
                </h1>
                <div class="w-auto flex-1 flex justify-end">
                    <img src="@/assets/images/companiesLogo.png" class="pl-20 h-full w-full" alt />
                </div>
            </div>
        </div>
        <!-- end -->

        <!-- company background -->
        <div class="bg-secondary overflow-hidden">
            <div class="container flex py-24 flex-col items-center">
                <h1 class="font-semibold mb-16 px-24">Company Background</h1>
               
                <div class="font-light text-2xl px-24">
                    <ul class="list-disc mb-5">
                        <li>Founded by a team of expert professionals from wide expreience in Telecom, System Integration, Government with a vision to inovation.</li>
                        <li>Our Strategic teaming partnerships provide an ecosystem to deliver niche and best of breed services in field of IT Solutions and Information Security.</li>
                        <li>Consistent record of over 80% of business coming from repeat customers.</li>
                        <li>Best practices built delivery record of successful project deliveries over the years.</li>
                        <li>A dedicated and passionate team of brilliant professionals focused on creating lasting value.</li>
                    </ul>
                </div>

                <div class="flex w-full justify-between">
                    <div class="w-1/3 py-7 border border-black px-50px">
                        <div class="flex flex-col w-full  items-center">
                            <img src="@/assets/images/e1.png" class="w-100px h-full mb-10" alt="">

                            <h1 class="mb-3 font-semibold">Our vision</h1>

                            <p class="text-lg font-light text-center">
                                We will be the first choice brand for companies around the globe seeking IT Solution/Services, Information Security and Technologies.
                            </p>
                        </div>
                    </div>
                   <div class="w-1/3 py-7 border mx-4 border-black px-50px">
                        <div class="flex flex-col w-full items-center">
                            <img src="@/assets/images/e2.png" class="w-100px h-full mb-10" alt="">

                            <h1 class="mb-3 font-semibold">Our mision</h1>

                            <p class="text-lg font-light text-center">
                                Give companies the power to their business by providing performance and productivity improvements through application of IT Software,  IT Services and IT Security best practices solutions Everything we do has one goal—to help our customers achieve their goals
                            </p>
                        </div>
                    </div>
                    <div class="w-1/3 py-7 border border-black px-50px">
                        <div class="flex flex-col w-full items-center">
                            <img src="@/assets/images/e3.png" class="w-75px h-full mb-10" alt="">

                            <h1 class="mb-3 font-semibold -mt-25px">Our values</h1>

                            <ul class="ml-6 list-disc text-lg leading-relaxed font-light">
                                <li>Passion</li>
                                <li>Professionalism</li>
                                <li>Teamwork</li>
                                <li>Customer Centricity</li>
                                <li>Excellence</li>
                                <li>Innovation</li>
                                <li>Speed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
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

    <founders/>

    <contact-us/>

    </div>
</template>

<script>
import ContactUs from '../components/ContactUs.vue'
import Founders from '../components/Founders.vue'
    export default {
  components: { ContactUs },
        
    }
</script>

<style lang="scss" scoped>

</style>