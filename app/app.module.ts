import angular from "angular";
import controllers from "./controllers/index";

const app = angular.module("starter", ["ionic", controllers.name]);
app.run(function($ionicPlatform: { ready: Function }) {
  $ionicPlatform.ready(function() {
    const $window = window as any;
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if ($window.cordova && $window.Keyboard) {
      $window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if ($window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      $window.StatusBar.styleDefault();
    }
  });
});

app.config(function(
  $stateProvider: { state: Function },
  $urlRouterProvider: { otherwise: Function }
) {
  $stateProvider
    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: "AppCtrl",
      controllerAs: '$ctrl'
    })
    .state("app.search", {
      url: "/search",
      views: {
        menuContent: {
          templateUrl: "templates/search.html"
        }
      }
    })
    .state("app.browse", {
      url: "/browse",
      views: {
        menuContent: {
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state("app.playlists", {
      url: "/playlists",
      views: {
        menuContent: {
          templateUrl: "templates/playlists.html",
          controller: "PlaylistsCtrl",
          controllerAs: '$ctrl'
        }
      }
    })

    .state("app.single", {
      url: "/playlists/:playlistId",
      views: {
        menuContent: {
          templateUrl: "templates/playlist.html",
          controller: "PlaylistCtrl",
          controllerAs: '$ctrl'
        }
      }
    });

  $urlRouterProvider.otherwise("/app/playlists");
});
