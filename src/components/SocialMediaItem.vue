<template>
    <div class="flip-badge">

      <a :href="url" class="flip-badge-link" target="_blank" rel="noopener noreferrer">

        <div class="flip-badge-inner" :style="badgeBg">

            <font-awesome-icon :icon="['fab', icon]" size="6x"/>
            <h3 v-if="name.length < 10">{{ name }}</h3>
            <h4 v-else>{{ name }}</h4>

        </div>

      </a>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SocialMediaItem',
    props: {
        name: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        icon: {
          type: String,
          required: true
        },
        colorCode: {
          type: String,
          required: true
        }
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
});
</script>

<style scoped lang="scss">

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

  &:hover {
    transform: scale(0.9);
    box-shadow: 0 15px 25px rgb(0, 0, 0, 0.4);
    opacity: 0.9;
  }
}

.flip-badge-link {
  &:hover {
    text-decoration: none;
  }
}

@media(max-width: 1199px) {
  .flip-badge {
    width: 115px;
    height: 115px;
  }

  h3, h4 {
    font-size: 1rem;
  }

  .fa-6x {
    font-size: 3rem;
  }
}

</style>
