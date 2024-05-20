<template>
    <div class="container mt-5">
        <h1 class="jockey">Projects</h1>
        <div class="row">

            <div class="col-2">

            </div>
            <div id="carouselExampleCaptions" class="carousel slide col-8">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"  @click="sendTo(1)">
                        <img src="/public/foodLink/FoodLinkLOGO.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>FoodLink</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item"  @click="sendTo(2)">
                        <img src="/public/restaurant/restaurantLogo.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ZA Restaurant Order Management</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item"  @click="sendTo(3)">
                        <img src="/public/game/logoCientifiks.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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
        sendTo(id){
            console.log("clicked item:: " +id);
            this.$emit('show-bento', id);
        }
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
