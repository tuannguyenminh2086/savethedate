<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="moment.images.low_resolution.url" alt="image">
      </figure>
    </div>
    <div class="card-content is-relative">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="moment.user.profile_picture" alt="Image" class="is-rounded">
        </figure>
      </div>
      <div class="media-content has-text-centered">
        <p class="title is-size-5-mobile is-size-4-desktop has-text-weight-semibold">@{{ moment.user.username }}</p>
      </div>
      <div class="content">
        {{ moment.caption.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MomentCard',
  props: {
    moment: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .content figure { margin: 0}
  .card {
    margin-bottom: 2rem;
    .media-left {
      position: absolute;
      top: -32px;
      left: 50%;
      margin-left: -24px;
      width: 48px;
      margin-right: 0;
      figure img {
        margin: 0;
      }
    }
    .media-content {
      display: block;
      padding: 0.5rem;
    }
  }
</style>