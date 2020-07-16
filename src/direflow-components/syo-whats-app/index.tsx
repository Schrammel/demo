import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'

import { DireflowComponent } from 'direflow-component'
import App from './App'

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'syo-whats-app',
  },
  plugins: [
    {
      name: 'polyfill-loader',
      options: {
        use: {
          sd: false,
          ce: false,
          adapter: false
        }
      }
    },
    {
      name: 'material-ui',
    },
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
})
