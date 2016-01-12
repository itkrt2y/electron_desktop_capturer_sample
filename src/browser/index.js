'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  this.window = new BrowserWindow({ width: 800, height: 600 });
  this.window.loadURL(`file://${__dirname}/../renderer/index.html`);
  this.window.on('closed', () => {
    this.window = null;
  });

  // this.window.webContents.openDevTools();
});
