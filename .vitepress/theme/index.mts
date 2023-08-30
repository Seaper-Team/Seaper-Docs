import { h } from 'vue'
import NotFound from './404.vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css';

export default {
  DefaultTheme,
  Layout(){
    return h(DefaultTheme.Layout, null, {
      'not-found' : () => h(NotFound)
    })
  }
}