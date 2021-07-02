/**
 * @fileoverview Utility methods to manipulate colors
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */

'use strict';

var hexRX = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

var colorUtil = {
  /**
   * pad left zero characters.
   * @param {number} number number value to pad zero.
   * @param {number} length pad length to want.
   * @returns {string} padded string.
   */
  leadingZero: function (number, length) {
    var zero = '',
      i = 0;

    if ((number + '').length > length) {
      return number + '';
    }

    for (; i < length - 1; i += 1) {
      zero += '0';
    }

    return (zero + number).slice(length * -1);
  },

  /**
   * Check validate of hex string value is RGB
   * @param {string} str - rgb hex string
   * @returns {boolean} return true when supplied str is valid RGB hex string
   */
  isValidRGB: function (str) {
    return hexRX.test(str);
  },

  // @license RGB <-> HSV conversion utilities based off of http://www.cs.rit.edu/~ncs/color/t_convert.html

  /**
   * Convert color hex string to rgb number array
   * @param {string} hexStr - hex string
   * @returns {number[]} rgb numbers
   */
  hexToRGB: function (hexStr) {
    var r, g, b;

    if (!colorUtil.isValidRGB(hexStr)) {
      return false;
    }

    hexStr = hexStr.substring(1);

    r = parseInt(hexStr.substr(0, 2), 16);
    g = parseInt(hexStr.substr(2, 2), 16);
    b = parseInt(hexStr.substr(4, 2), 16);

    return [r, g, b];
  },

  /**
   * Convert rgb number to HSV value
   * @param {number} r - red
   * @param {number} g - green
   * @param {number} b - blue
   * @returns {number[]} hsv value
   */
  rgbToHSV: function (r, g, b) {
    var max, min, h, s, v, d;

    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    v = max;
    d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        // no default
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
  },
};

module.exports = colorUtil;
