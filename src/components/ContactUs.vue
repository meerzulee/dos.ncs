<template>
        <div class="bg-secondary pt-20 pb-28">
            <div class="container">
                <h1 class="font-bold">Contact US</h1>
                <div class="flex mt-10">
                    <div class="flex flex-col items-start w-1/2 pr-12 laptop:pr-16">
                        <div class="flex justify-between w-full">
                            <input type="text" class="input" placeholder="First name" />
                            <input type="text" class="input" placeholder="Last name" />
                        </div>
                        <div class="flex justify-between mt-12 w-full">
                            <input type="email" class="input" placeholder="Email" />
                            <input type="tel" class="input" placeholder="Phone" />
                        </div>
                        <div class="w-full mt-12">
                            <textarea
                                name
                                placeholder="Message"
                                class="input"
                                id
                                cols="40"
                                rows="4"
                            ></textarea>
                        </div>
                        <button class="btn mt-12 btn-primary">Submit</button>
                    </div>
                    <div class="flex w-1/2">
                
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2507726641275!2d74.58860751591381!3d42.86755087915616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82878f8ecf7%3A0xdaa23ab8ba010011!2s24%2C%2011%20Isanov%20St%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1628070298182!5m2!1sen!2skg"
                            width="600"
                            height="400"
                            style="border:0;"
                            allowfullscreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>