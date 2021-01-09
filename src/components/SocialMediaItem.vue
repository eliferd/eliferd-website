<template>
    <div class="flip-badge">
      <a :href="url" class="flip-badge-link" target="_blank">
        <div class="flip-badge-inner" :style="badgeBg">
            <font-awesome-icon :icon="['fab', icon]" size="6x"/>
            <h3 v-if="name.length < 10">{{ name }}</h3>
            <h4 v-else>{{ name }}</h4>
        </div>
      </a>

    </div>
</template>

<style scoped>
.flip-badge {
  width: 230px;
  height: 230px;
  margin: 32px;
}

.flip-badge-inner{
  color: white;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}
.flip-badge-inner:hover {
  transform: scale(0.9);
  box-shadow: 0 15px 25px rgb(0, 0, 0, 0.4);
  opacity: 0.9;
}

.flip-badge-link:hover {
  text-decoration: none;
}

</style>

<script>
export default {
  name: 'SocialMediaItem',
  props: {
    name: String,
    url: String,
    icon: String,
    colorCode: String
  },
  computed: {
    badgeBg () {
      return {
        'background-color': this.colorCode,
        height: '100%',
        width: '100%'
      }
    }
  }
}
</script>
