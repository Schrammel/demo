/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it"s mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import SyoWhatsApp from './direflow-components/syo-whats-app'

SyoWhatsApp.then((element) => {

  /**
   * Access DOM node when it"s mounted
   */
  // tslint:disable-next-line
  console.log('syo-whats-app is mounted on the DOM', element)
})
