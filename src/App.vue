<template>
  <div>
    <div class="bg-white container">
      <div class="w-full flex justify-between py-10">
        <router-link to="/">
          <img src="@/assets/logo.png" class="h-full w-40" alt />
        </router-link>
        <div class="flex items-center nav">
          <router-link to="/" exact class="nav-links">Home</router-link>
          <router-link to="/about-us" class="nav-links">About us</router-link>
          <router-link to="/partners" class="nav-links">Partners</router-link>
          <router-link to=""  class="nav-links">Clients</router-link>
          <router-link to="" class="nav-links">Blog</router-link>
          <router-link to="" class="nav-links">Gallery</router-link>
          <router-link to="/connect" class="nav-links">Connect</router-link>
        </div>
      </div>
    </div>
    <transition :name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <!-- footer -->
        <div class="green-gradient bg-black bg-opacity-75 pt-24 pb-8">
            <div class="container flex items-start text-white">
                <div class="flex justify-start w-1/3">
                    <div class="flex items-center flex-col">
                        <h3 class="font-bold">Stay Connect With US</h3>
                        <div class="flex mt-6 px-5 w-full justify-around">
                            <a href="#">
                                <img src="./assets/icons/fb.svg" alt />
                            </a>
                            <a href="#">
                                <img src="./assets/icons/ig.svg" alt />
                            </a>
                            <a href="#">
                                <img src="./assets/icons/in.svg" alt />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex w-1/3 flex-col justify-center text-center">
                    <h3 class="font-bold">Address:</h3>
                    <h3
                        class="font-light mt-4"
                    >24/11 Isanova, <br>Bishkek, Kyrgyzstan</h3>
                </div>
                <div class="flex w-1/3 justify-end">
                    <div class="flex flex-col">
                        <a href="mailto:info@dosncs.com" class="text-2xl font-bold">info@dosncs.com</a>
                        <!-- <a href="#" class="btn text-center mt-6">Get started</a> -->
                        <div class="flex justify-center">
                            <a href="#">
                                <img src="./assets/logo-dark.png" class="mt-6" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script >

</script>

<style>
.nav-links {
  @apply text-lg mx-4 pb-1px cursor-pointer laptop:text-xl;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
