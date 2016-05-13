(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  var ws = new WebSocket('ws://localhost:2333');

  ws.onmessage = function (e) {
    var data = JSON.parse(e.data);
    console.log(data);
  };

}));