'use strict';

const h = require('react').createElement;
const render = require('react-dom').render;
const Main = require('./components/main.js');

render(
  h(Main),
  document.getElementById('app')
);
