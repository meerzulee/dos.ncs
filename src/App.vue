<template>
  <div>
    <div class="bg-white container">
      <div class="w-full flex justify-between py-11">
        <a href="#">
          <img src="@/assets/logo.png" class="h-full w-30" alt />
        </a>
        <div class="flex items-center">
          <a href="#" class="nav-links">Home</a>
          <a href="#" class="nav-links">About us</a>
          <a href="#" class="nav-links">Events</a>
          <a href="#" class="nav-links">Partners</a>
          <a href="#" class="nav-links">Clients</a>
          <a href="#" class="nav-links">Careers</a>
          <a href="#" class="nav-links">Blog</a>
          <a href="#" class="nav-links">Downloads</a>
          <a href="#" class="nav-links">Gallery</a>
          <a href="#" class="nav-links">Connect</a>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script >

</script>

<style>
.nav-links {
  @apply text-lg mx-4 pb-1px cursor-pointer laptop:text-xl;
}
</style>
