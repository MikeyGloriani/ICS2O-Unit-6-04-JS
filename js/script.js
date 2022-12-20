// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Template-PWA/sw.js", {
    scope: "/ICS2O-Template-PWA/",
  })
}

window.onload = function () {
  /**
   * This calculates the volume of a sphere
   */
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")

// process
const sphereVolume = (4 / 3) * Math.PI * radius ** 3

//output
document.getElementById('radius').innerHTML = radius + ' cm'
document.getElementById('volume').innerHTML = 'The Volume is ' + sphereVolume + ' cm³'
}
