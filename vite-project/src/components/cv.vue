<template>
    <div class="container mt-5">
        <div class="row">

            <h1 class="col-12 jockey">CV</h1>

        </div>

        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/cv/bridgestone.png" alt="Bridgestone Logo" class="img-fluid  mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>Software Developer Internship at Bridgestone Mobility Solutions - Part-time Sept 2023 / Feb 2024
                    During this internship I have had the opportunity of getting hands on experience and further
                    expanding my skills base.
                    Kafka · SpringBoot · Oracle DB · Java 8 · Scrum · Git</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/cv/intelcia.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>Customer Success Agent for Ledger - Part-time Apr 2022 / Jul 2022
                    IT support and customer care agent for Ledger, a French multinational hardware cryptowallet company.
                    Working with English and French speaking markets
                    Client facing skills · Ticketing systems · Troubleshooting</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/cv/intelcia.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>Hostal Apolo - Full time Apr 2022 / Jul 2022
                    Hostel receptionist, in wich I took care of bookings, client facing tasks as well as police reports
                    and others day to day tasks. In essence I attended the functionning of the business during my work
                    hours, as I was the only worker during my shift.
                    Client facing skills · Time management · People management</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/cv/intercruises.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>Hostal Apolo - Full time Apr 2022 / Jul 2022
                    Hostel receptionist, in wich I took care of bookings, client facing tasks as well as police reports
                    and others day to day tasks. In essence I attended the functionning of the business during my work
                    hours, as I was the only worker during my shift.
                    Client facing skills · Time management · People management</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'Jockey';
    src: url('assets/JockeyOne-Regular.ttf') format('ttf'),
        url('assets/JockeyOne-Regular.ttf') format('ttf');
    /* Legacy Browsers */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto';
    src: url('assets/NotoSans-Regular.ttf') format('ttf'),
        url('assets/NotoSans-Regular.ttf') format('ttf');
    /* Legacy Browsers */
    font-weight: normal;
    font-style: normal;
}

.noto {
    font-family: 'Noto', sans-serif;
    font-size: 16px;
    color: #EBEBD3;
    text-align: justify;
}

.jockey {
    font-family: 'Jockey', sans-serif;
    font-weight: 600;
    color: #EBEBD3;
}
</style>
