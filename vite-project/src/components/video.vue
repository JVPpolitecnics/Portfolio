<template>
    <div id="video-container">
        <video ref="myVideo" width="840" height="560" autoplay muted>
            <source src="/video/instructions.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div v-show="showControls" id="video-controls">
            <button @click="watchAgain">Watch Again</button>
            <button @click="sayOk">I'm ready</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showControls: false // Controls the visibility of the video controls
        };
    },
    methods: {
        // Handles the 'ended' event of the video
        handleVideoEnd() {
            this.showControls = true;
        },
        // Resets the video to the beginning and plays it
        watchAgain() {
            const video = this.$refs.myVideo;
            video.currentTime = 0;
            video.play();
            this.showControls = false;
        },
        // Handles the 'OK' button click
        sayOk() {
            this.showControls = false;
            this.$emit('play-game', true);
        }
    },
    mounted() {
        const video = this.$refs.myVideo;
        video.addEventListener('ended', this.handleVideoEnd);
        video.play();
    },
    beforeDestroy() {
        const video = this.$refs.myVideo;
        video.removeEventListener('ended', this.handleVideoEnd);
    }
};
</script>

<style scoped>
#video-container {
    position: relative;
    width: 640px;
}

#video-controls {
    position: absolute;
    top: 227px;
    left: 100px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    text-align: center;
    padding: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background: #007BFF;
    border: none;
    cursor: pointer;
    margin: 0 10px;
}

button:hover {
    background: #0056b3;
}
</style>
