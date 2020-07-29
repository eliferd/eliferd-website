<template>
    <div class="banner">
        <span>{{ page }}</span>
    </div>
</template>

<style scoped>
.banner{
    font-family: Montserrat, sans-serif;
    height: 210px;
    background: linear-gradient(#2BA59E, #283A95);
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 50px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    transition: 0.4s;
}
.banner>span {
    margin: auto;
}

@media(max-width: 767px) {
    .banner {
        font-size: 35px;
    }
}
</style>

<script>
export default {
  name: 'GradientBlueBanner',
  props: {
    page: String
  }
}
</script>
