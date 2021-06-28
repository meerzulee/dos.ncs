<template>
    <div>
        <!-- header -->
        <div class="bg-secondary h-auto">
            <div class="container flex relative justify-end">
                <div class="absolute left-0 top-0 flex flex-col items-start mt-18">
                    <h1 class="mb-12">
                        Cyber Security Solutions,
                        <br />Certification, Compliance
                    </h1>
                    <a href="#" class="btn btn-primary">Get started</a>
                </div>
                <img src="../assets/images/bg-1.png" class="right-0 pt-5 h-full laptop:w-3/4" alt />
            </div>
        </div>
        <!-- header end -->
        <div class="bg-white border-t-3 border-primary py-11">
            <div class="container flex justify-between items-center">
                <h1 class="pl-6 border-l-primary border-l-4">
                    Our Partners
                    <br />Speak for us
                </h1>
                <div class="w-auto flex-1 flex justify-end">
                    <img src="../assets/images/companiesLogo.png" class="pl-36 h-full" alt />
                </div>
            </div>
        </div>
        <!-- Partners end -->
        <div class="bg-secondary pb-36 overflow-hidden">
            <div class="container flex p-24 flex-col items-center">
                <h1 class="font-semibold mb-20">Our Offering</h1>
                <div class="w-full flex flex-col">
                    <!-- tabs -->
                    <div class="flex justify-between">
                        <h3 class="hover-primary" @click="changeTab(1)">Infosec Consulting</h3>
                        <h3 class="hover-primary" @click="changeTab(2)">Technology Integration</h3>
                        <h3
                            class="hover-primary"
                            @click="changeTab(3)"
                        >Managed IT & Security Services</h3>
                    </div>
                </div>
                <!-- content -->
                <div v-if="activeTab === 1" class="offer-content">
                    <h3 class="font-semibold mb-2">Infosec Consulting</h3>
                    <p
                        class="mb-5 tracking-wider"
                    >We assist our clients to meet their strategic business objectives with the power to delight customers, employees, and shareholders. We ensure success by relentless application of best practices in process, people and technology and a continual pursuit of excellence. Our Key Offerings includes:</p>

                    <ul class="list-disc mb-5">
                        <li>Gap analysis & remediation Plan</li>
                        <li>Network Audit / VAPT (Vulnerability Assessment and Penetration Testing)</li>
                        <li>Web Application Security audit, Mobile App Security Audit</li>
                        <li>Implementation & Certification of ISO 27001, ISO 20001, ISO 9001, ISO 14001, OHSAS 18000, ISO 31000, Cmmi Level 3 & 5, PCI-DSS etc</li>
                    </ul>
                    <p>We offer a full range of specialized consulting services around IT security and risk management. Our consultants and security experts are helping organizations comply with internal governance rules and external regulatory requirements, ensure that their network and critical IT assets are protected, and that their staff is fully equipped to address external and internal threats.</p>
                </div>
                <div v-if="activeTab === 2" class="offer-content">
                    <h3 class="font-semibold mb-2">Technology Integration</h3>
                    <p
                        class="mb-5 tracking-wider"
                    >We understand the significance of real-time converged application-oriented network infrastructure solutions for the growth of an organization, which will lead to increased productivity and reduced costs. Below are few domains, where we focus with our skills and solution centric approach:</p>
                    <ul class="list-disc mb-5 z-10">
                        <li>Next Generation Firewall</li>
                        <li>Endpoint Security, Encryption, Endpoint Detection & Response (EDR)</li>
                        <li>Data Leakage Protection and User Behavior Analysis (DLP & UBA)</li>
                        <li>Mail Security</li>
                        <li>Mobile Device Management (MDM)</li>
                        <li>Security information and event management (SIEM)</li>
                        <li>Security Orchestration and Automation(SOAR)</li>
                        <li>Software defined WAN & LAN</li>
                    </ul>
                    <div class="w-full relative h-1 flex items-center z-1">
                        <img
                            src="../assets/images/tab-2.png"
                            class="absolute -mt-10 -right-1/3 laptop:(left-1/2 w-2/3 ml-20)"
                            alt
                        />
                    </div>
                </div>
                <div v-if="activeTab === 3" class="offer-content">
                    <h3 class="font-semibold mb-2">Managed Services & Cloud</h3>
                    <p
                        class="mb-5 tracking-wider"
                    >Local Cloud and Hybrid Cloud offerings help customers to build and operate organization's critical IT infrastructure more efficiently, without having to move from current site. With our resources, advanced tool-set and proven ITIL-based service framework, organization can improve the quality and reliability of the IT operation – with fewer headaches and lower risk.</p>
                    <ul class="list-disc mb-5 z-10">
                        <li>Data Center Management</li>
                        <li>Network Management</li>
                        <li>Security Management</li>
                        <li>Desktop Management</li>
                        <li>Vulnerability Management</li>
                        <li>Incident Response</li>
                        <li>Decide on Standards, frame work, and compliance</li>
                        <li>Periodically Assess Threats, Vulnerabilities and Risks</li>
                        <li>CISO / DPO On Demand</li>
                    </ul>
                    <div class="w-full relative h-1 flex items-center z-1">
                        <img
                            src="../assets/images/tab-3.png"
                            class="absolute -mt-48 -right-1/3 laptop:(left-1/2 w-2/3 -mt-20 ml-15)"
                            alt
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- Secure your business -->
        <div class="bg-white pb-28">
            <div class="container flex p-24 flex-col items-center">
                <h1 class="font-semibold mb-10 text-center">
                    Secure, Assess and Grow your
                    <br />business with us !
                </h1>
                <p
                    class="text-2xl mb-10 tracking-wider font-light"
                >We create Superior Business Value for our customers through our Solutions with deep industry understanding, pragmatic technological expertise and robust best practice frameworks in order to have best returns on investments.</p>
                <p
                    class="text-2xl tracking-wider font-light"
                >We work with customers to provide innovation, excellence and control so that the enterprises grow with improved efficiency, better risk management, business process improvements and innovation, Reduced costs and improved profitability, Good corporate governance and compliance.</p>
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
                <a href="#" class="btn mt-10">get started</a>
            </div>
            <div class="flex pt-18 flex justify-center">
                <img src="../assets/images/globe.png" class="absolute bottom-0 z-1" alt />
            </div>
        </div>
        <!-- founders -->
        <div class="bg-white pt-18 pb-32">
            <div class="container">
                <div class="flex justify-center">
                    <h1 class="font-bold text-primary">Meet the Founders</h1>
                </div>
                <!-- person -->
                <div class="flex flex-col mt-24">
                    <!-- Shakhida -->
                    <div class="flex">
                        <div class="rounded-full bg-cool-gray-700 w-180px h-180px"></div>
                        <div class="ml-5 flex flex-col flex-1">
                            <h3 class="font-bold text-primary">SHAKHIDA NURKHADJYEVA</h3>
                            <h4
                                class="text-lg mt-1 font-semibold"
                            >GENERAL DIRECTOR, CENTRAL ASIA OPERATIONS</h4>
                            <p class="w-full text-2xl mt-3 tracking-wide font-light">
                                Shakhida Nurkhadjyeva has over 15 years of experience in Telecom Sales and Marketing. Before joining DOS NCS, she worked as the Business Development Director for the Central Asian Cellular Forum, a Qualcomm Inc. backed marketing and technology services firm.
                                In this capacity she worked with CEOs and CTOs of Mobile Carriers in the Central
                            </p>
                            <a
                                href="#"
                                class="italic mt-4 text-2xl text-primary font-semibold"
                            >More info</a>
                        </div>
                    </div>
                    <!-- Nataraj -->
                    <div class="flex mt-40">
                        <div class="rounded-full bg-cool-gray-700 w-180px h-180px"></div>
                        <div class="ml-5 flex flex-col flex-1">
                            <h3 class="font-bold text-primary">NATARAJ SAPPANY</h3>
                            <h4
                                class="text-lg mt-1 font-semibold"
                            >FOUNDING CHAIRMAN AND CEO OF DOS NCS GROUP</h4>
                            <p
                                class="w-full text-2xl mt-3 tracking-wide font-light"
                            >Nataraj Sappany has worked in the areas of IT, Networking, Telecommunications and IT Security for over 25 years. He has travelled extensively and worked with decision makers and influencers in the Telecom Industry across the globe. He has worked for organizations such as 3Com, Commworks, UTStarcom, Star Solutions</p>
                            <a
                                href="#"
                                class="italic mt-4 text-2xl text-primary font-semibold"
                            >More info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact us -->
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
                        <button class="btn mt-12 btn-primary">Get started</button>
                    </div>
                    <div class="flex w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.9208798528!2d74.52182153475113!3d42.87685370438202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1624431682273!5m2!1sen!2skg"
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
        <!-- footer -->
        <div class="green-gradient bg-black bg-opacity-75 pt-24 pb-8">
            <div class="container flex items-start text-white">
                <div class="flex justify-start w-1/3">
                    <div class="flex items-center flex-col">
                        <h3 class="font-bold">Stay Connect With US</h3>
                        <div class="flex mt-6 px-5 w-full justify-around">
                            <a href="#">
                                <img src="../assets/icons/fb.svg" alt />
                            </a>
                            <a href="#">
                                <img src="../assets/icons/ig.svg" alt />
                            </a>
                            <a href="#">
                                <img src="../assets/icons/in.svg" alt />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex w-1/3 flex-col justify-center text-center">
                    <h3 class="font-bold">Address:</h3>
                    <h3
                        class="font-light mt-4"
                    >DL 124, 1st Floor, Sector II, Salt Lake, Kolkata -700091, West Bengal, India (Near Wipro Crossing, Opposite to Jalpaiguri Bhavan)</h3>
                </div>
                <div class="flex w-1/3 justify-end">
                    <div class="flex flex-col">
                        <a href="mailto:info@dosncs.com" class="text-2xl font-bold">info@dosncs.com</a>
                        <a href="#" class="btn text-center mt-6">Get started</a>
                        <div class="flex justify-center">
                            <a href="#">
                                <img src="../assets/logo-dark.png" class="mt-8" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            activeTab: 1
        };
    },
    methods: {
        changeTab(x) {
            console.log(x)
            this.activeTab = x
        }
    },
};
</script>

<style>
/* @layer components { */
.container {
    @apply max-w-1180px mx-auto laptop:max-w-900px;
}
.input {
    @apply border-b-1 placeholder-black p-2 pb-1 bg-transparent text-lg border-b-black focus-visible:outline-none hover:focus:(outline-none border-b-primary placeholder-primary);
}
.offer-content {
    @apply mt-12 relative flex flex-col w-full text-2xl font-light leading-normal justify-start;
}
.hover-primary {
    @apply pb-2 cursor-pointer;
}
.hover-active {
    @apply border-b-primary border-b-2;
}
.btn {
    @apply uppercase text-sm border-2 py-3 px-8 font-semibold rounded-full border-white text-white;
}
.btn-primary {
    @apply border-primary text-primary;
}
/* } */

/* @layer utilities { */
.green-gradient {
    background: linear-gradient(180deg, #3faf73 0%, #3b7254 100%);
}
/* } */

@variants hover,
focus {
    .nav-links {
        @apply border-b-primary border-b-2;
    }
    .hover-primary {
        @apply border-b-primary border-b-2;
    }
}
</style>
