'use strict';

const React = require('react');
const desktopCapturer = require('electron').desktopCapturer;
const h = React.createElement;

class Main extends React.Component {
  constructor(props) {
    super(props);

    desktopCapturer.getSources({types: ['screen']}, (error, sources) => {
      if (error) throw error;
      navigator.webkitGetUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sources[0].id,
            maxWidth: screen.width / 2, maxHeight: screen.height / 2,
            minWidth: screen.width / 3, minHeight: screen.height / 3
          }
        }
      }, (stream) => {
        this.video = document.createElement('video');
        this.video.src = URL.createObjectURL(stream);
      }, (error) => {
        console.log('getUserMediaError');
      });
    });
  }

  takepicture() {
    let canvas = document.querySelector('canvas');
    canvas.width = screen.width / 2;
    canvas.height = screen.height / 2;
    canvas.getContext('2d').drawImage(this.video, 0, 0);
  }

  render() {
    return h('div', { className: 'main' },
             h('canvas', { id: 'canvas' }),
             h('button', { onClick: () => { this.takepicture() }, style: { width: 150, height: 30 }}, 'Take Photo'));
  }
}

module.exports = Main;
