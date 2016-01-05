'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PowerHouse = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ready = ready;
  exports.addClass = addClass;
  exports.removeClass = removeClass;
  exports.toggleClass = toggleClass;
  exports.hasClass = hasClass;
  exports.randomNumber = randomNumber;
  exports.getQueryString = getQueryString;
  exports.getFileContents = getFileContents;
  exports.forEach = forEach;
  exports.insertAfter = insertAfter;
  exports.insertBefore = insertBefore;
  exports.remove = remove;
  exports.wrap = wrap;
  exports.unwrap = unwrap;

  function ready(cb) {
    if (document.readyState !== 'loading') {
      cb();
    } else {
      document.addEventListener('DOMContentLoaded', cb);
    }
  }

  function addClass(el, className) {
    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += ' ' + className;
  }

  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
  }

  function toggleClass(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }

      el.className = classes.join(' ');
    }
  }

  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getQueryString(key, url) {
    var href = url ? url : window.location.href,
        reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i'),
        string = reg.exec(href);
    return string ? string[1] : null;
  }

  function getFileContents(file, success, error) {
    if (!window.XMLHttpRequest) {
      return;
    }

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (request.status !== 200) {
          if (error && typeof error === 'function') {
            error(request.responseText, request);
          }

          return;
        }

        if (success && typeof success === 'function') {
          success(request.responseText, request);
        }
      }
    };

    request.open('GET', file, true);
    request.send();
  }

  function forEach(array, cb) {
    for (var i = 0; i < array.length; i++) {
      cb(array[i], i);
    }
  }

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function insertBefore(newNode, referenceNode) {
    referenceNode.insertAdjacentHTML('beforebegin', newNode.outerHTML);
  }

  function remove(el) {
    el.parentNode.removeChild(el);
  }

  function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  function unwrap(el) {
    var parent = el.parentNode;

    while (el.firstChild) {
      parent.insertBefore(el.firstChild, el);
    }

    parent.removeChild(el);
  }
});
