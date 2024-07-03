import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ $config: { GOOGLE_ANALYTICS_ID, NODE_ENV } }) => {
  Vue.use(VueGtag, {
    config: {
      id: GOOGLE_ANALYTICS_ID
    },
    enabled: NODE_ENV === 'production'
  })
}
