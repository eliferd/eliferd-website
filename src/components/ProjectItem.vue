<template>
    <a v-bind:href="url" target="_blank">
        <div class="wrapper">
            <div class="projectItem" v-bind:style="{ backgroundImage: 'url(' + this.backgroundURL + ')' }">
            <span>{{ projectName }}</span>
            </div>
        </div>
    </a>
</template>

<style scoped>

.wrapper {
    max-width: 1170px;
    height: 180px;
    position: relative;
    overflow: hidden;
    z-index: 0;
}

.projectItem{
    height: 100%;
    width: 100%;
    background-color: rgb(87, 87, 87);
    background-size: cover;
    background-position: center center;
    transition: all .5s;
    display: flex;
    text-align: center;
    vertical-align: middle;
    z-index: 1;
}
.projectItem::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.356);
}
.wrapper:hover .projectItem,
.wrapper:focus .projectItem {
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.2);
}
a:hover {
  text-decoration: none;
}
span {
  font-size: 35px;
  color: white;
  margin: auto;
  width: 100%;
  z-index: 2;
}

@media(max-width: 767px) {
    span {
        font-size: 24px;
    }
}
</style>

<script>
export default {
  name: 'ProjectItem',
  props: {
    projectName: String,
    url: String,
    backgroundURL: String
  }
}
</script>
