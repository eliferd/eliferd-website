<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-bind:src="this.imageURL" v-bind:alt="this.name" style="width:230px;height:230px;">
            </div>
            <div class="flip-card-back">
                <h3>{{ name }}</h3>
                <p>{{ description }}</p>
                <p><a v-if="this.url" v-bind:href="this.url" class="pi-button"><font-awesome-icon icon="external-link-alt" /></a> <a v-bind:href="this.imageURL" class="pi-button"><font-awesome-icon icon="expand" /></a></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

@mixin full-size {
    width: 100%;
    height: 100%;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    width: 230px;
    height: 230px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin: 32px 0;
    &:hover {
        /* Do an horizontal flip when you move the mouse over the flip box container */
        .flip-card-inner {
            transform: rotateY(180deg);
        }
    }
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    @include full-size;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}



/* Position the front and back side */
.flip-card-front {
    @include full-size;
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.flip-card-back {
    @extend .flip-card-front;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    background-color:#283A95;
    color: white;
    transform: rotateY(180deg);
}

.pi-button {
    background-color:#2BA59E;
    text-decoration: none;
    color: white;
    transition-duration: 0.2s;
    padding: 10px 12px;

    &:hover {
        background-color: rgb(65, 225, 177);
    }
}

@media (max-width: 1199px) {
    .flip-card{
        margin: 6px 0;
    }
}

</style>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'PortfolioItem',
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    }
  }
});

</script>
