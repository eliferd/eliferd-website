<template>
    <a v-bind:href="url" target="_blank">
        <div class="wrapper">
            <span class="projectItem" v-bind:style="{ backgroundImage: 'url(' + this.backgroundURL + ')' }"></span>
            <span class="text-container">
              <span>{{ projectName }}</span>
            </span>
        </div>
    </a>
</template>

<style scoped>

.wrapper {
    width: 100%;
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
    text-align: center;
    vertical-align: middle;
    position: absolute;
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

.text-container{
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.text-container>span {
  font-size: 35px;
  color: white;
}

@media(max-width: 767px) {
    .text-container>span {
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
