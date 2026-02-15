import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Force color scheme
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('color', '#404040')
  }
})
