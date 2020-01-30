<template>
  <div id="moments" class="section has-text-centered moments">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
          <h2 class="title is-4">Share your moment with us via Instagram</h2>
          <h3 class="subtitle is-3"><span class="has-text-danger">#tunalovesea</span></h3>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <div class="" v-if="loading"><h4 class="title is-4">Loading, please wait....</h4></div>
        <div class="columns is-multiline" v-else>
           <div v-for="(feed, index) in feeds"
            :key="feed.id"
            :index="index"
            :moment="feed"
            class="column is-half-desktop">
            <moment-card :moment="feed" />
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filter, intersection, slice, values } from 'lodash'
import axios from 'axios'
export default {
  name: 'Moments',
  components: {
    MomentCard: () => import('./moment')
  },
  data() {
    return {
      token: '43960542.1677ed0.4389d3854d3b47ebbfdc1c79c56bc4dd',
      count: 100,
      tags: ['beautiful'],
      mediaType: 'image',
      error: '',
      loading: false,
      feeds: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      axios
        .get('https://api.instagram.com/v1/users/self/media/recent', {
          params: { access_token: this.token, count: this.count }
        })
        .then(response => {
          this.loading = false
          if (response.data.meta.code === 400) this.error = response.data.meta
          if (response.data.meta.code === 200) {
              let { data } = response.data
              const types = ['image', 'video']
              if (this.mediaType && types.indexOf(this.mediaType) > -1) {
                data = filter(data, item => this.mediaType === item.type)
              }
              if (this.tags.length) {
                data = filter(data, item => intersection(this.tags, item.tags).length)
              }
              this.feeds = slice(values(data), 0, this.count)
          }
        })
        .catch(error => { throw error })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>