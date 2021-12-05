<template>
    <a v-bind:href="url" target="_blank" rel="noopener noreferrer">
        <div class="wrapper">
            <span class="projectItem" v-bind:style="{ backgroundImage: 'url(' + this.backgroundURL + ')' }"></span>
            <span class="text-container">
              <span>{{ projectName }}</span>
            </span>
        </div>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectItem',
  props: {
    projectName: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    backgroundURL: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">

@mixin full-size {
  width: 100%;
  height: 100%;
}

@mixin filter-transform {
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.2);
}

.wrapper {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:hover {
    .projectItem {
      @include filter-transform;
    }
  }

  &:focus {
    .projectItem {
      @include filter-transform;
    }
  }
}

.projectItem {
  @include full-size;
  background-color: rgb(87, 87, 87);
  background-size: cover;
  background-position: center center;
  transition: all .5s;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  z-index: 1;

  &::before{
    content: "";
    @include full-size;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.356);
  }
}

a {
  &:hover {
    text-decoration: none;
  }
}

.text-container {
  @include full-size;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.text-container{
  &>span {
    font-size: 35px;
    color: white;
  }
}

@media(max-width: 767px) {
  .text-container{
    &>span {
      font-size: 24px;
    }
  }
}
</style>
