<template>
    <div class="container mt-5">
        <div class="row">

            <h1 class="col-12 jockey">Studies</h1>

        </div>

        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/study/cep.png" alt="Bridgestone Logo" class="img-fluid  mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>Centre d’Estudis Politècnics - Desarollo Aplicaciones Web (Web Development) - Full time
                    These are my formal Web Development studies carried out in a trade school in Barcelona
                    Java · JavaScript · MySQL · Scrum · Git · PHP · Laravel · Vue.js</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/study/ba.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>École Nationale Supérieure des Beaux-Arts de Paris - Master  - Apr 2022 / Jul 2022
                    Part of PSL, carried out a Masters in sculpture and installation art at Pascale Marhtine Tayou’s studio.
                    </p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/study/ba.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>École Nationale Supérieure des Beaux-Arts de Paris - Bachelor - Summer of 2014
                    Part of PSL, carried out a Bachelor in sculpture and installation art at Pascale Marhtine Tayou’s studio.
                    </p>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-2 text-center mt-2">
                <img src="/study/ies.png" alt="Bridgestone Logo" class="img-fluid mb-4">
            </div>
            <div class="col-md-6 noto">
                <p>IES XXV Olimpíada  - Batxillerat Artístic - Sept 2014 / June 2016
                    Part of PSL, carried out a Masters in sculpture and installation art at Pascale Marhtine Tayou’s studio.
                    </p>
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
