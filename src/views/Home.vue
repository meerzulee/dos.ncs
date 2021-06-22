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
                <img src="../assets/images/bg-1.png" class="right-0 pt-5" alt />
            </div>
        </div>
        <!-- header end -->
        <div class="bg-white border-t-3 border-primary py-11">
            <div class="container flex justify-between items-center">
                <h1 class="pl-6 border-l-primary border-l-4">
                    Our Partners
                    <br />Speak for us
                </h1>
                <img src="../assets/images/companiesLogo.png" class="h-auto w-auto -mr-16" alt />
            </div>
        </div>
        <!-- Partners end -->
        <div class="bg-secondary pb-36">
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
                <div
                    class="mt-12 relative flex flex-col w-full text-2xl font-light leading-normal justify-start"
                >
                    <template v-if="activeTab == 1">
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
                    </template>
                    <template v-else-if="activeTab == 2">
                        <h3 class="font-semibold mb-2">Technology Integration</h3>
                        <p
                            class="mb-5 tracking-wider"
                        >We understand the significance of real-time converged application-oriented network infrastructure solutions for the growth of an organization, which will lead to increased productivity and reduced costs. Below are few domains, where we focus with our skills and solution centric approach:</p>
                        <ul class="list-disc mb-5">
                            <li>Next Generation Firewall</li>
                            <li>Endpoint Security, Encryption, Endpoint Detection & Response (EDR)</li>
                            <li>Data Leakage Protection and User Behavior Analysis (DLP & UBA)</li>
                            <li>Mail Security</li>
                            <li>Mobile Device Management (MDM)</li>
                            <li>Security information and event management (SIEM)</li>
                            <li>Security Orchestration and Automation(SOAR)</li>
                            <li>Software defined WAN & LAN</li>
                        </ul>
                        <div class="w-full relative h-1 flex items-center">
                            <img
                                src="../assets/images/tab-2.png"
                                class="absolute -mt-10 -right-1/3"
                                alt
                            />
                        </div>
                    </template>
                    <template v-else-if="activeTab == 3">
                        <h3 class="font-semibold mb-2">Managed Services & Cloud</h3>
                        <p
                            class="mb-5 tracking-wider"
                        >Local Cloud and Hybrid Cloud offerings help customers to build and operate organization's critical IT infrastructure more efficiently, without having to move from current site. With our resources, advanced tool-set and proven ITIL-based service framework, organization can improve the quality and reliability of the IT operation – with fewer headaches and lower risk.</p>
                        <ul class="list-disc mb-5">
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
                        <div class="w-full relative h-1 flex items-center">
                            <img
                                src="../assets/images/tab-3.png"
                                class="absolute -mt-48 -right-1/3"
                                alt
                            />
                        </div>
                    </template>
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
            this.activeTab = x
        }
    },
};
</script>

<style>
@layer base {
    h1 {
        @apply text-4xl;
    }
    h3 {
        @apply text-2xl;
    }
}
@layer components {
    .container {
        @apply max-w-1180px mx-auto;
    }

    .nav-links {
        @apply text-lg mx-4 pb-1px cursor-pointer;
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
}

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
