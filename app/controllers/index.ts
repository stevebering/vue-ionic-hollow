import angular from 'angular';
import AppController from './App.controller';
import PlaylistController from './Playlist.controller';
import PlaylistsController from './Playlists.controller';

const controllerApp = angular.module('starter.controllers', []);

controllerApp.controller('AppCtrl', AppController);
controllerApp.controller('PlaylistCtrl', PlaylistController);
controllerApp.controller('PlaylistsCtrl', PlaylistsController);

export default controllerApp;
