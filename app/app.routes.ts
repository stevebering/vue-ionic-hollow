const playlistTmpl = require("./controllers/playlist.html");
const playlistsTmpl = require("./controllers/playlists.html");

const router = function(
  $stateProvider: { state: Function },
  $urlRouterProvider: { otherwise: Function }
) {
  $stateProvider
    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: "AppCtrl",
      controllerAs: "$ctrl"
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
          // templateUrl: "templates/playlists.html",
          template: playlistsTmpl,
          controller: "PlaylistsCtrl",
          controllerAs: "$ctrl"
        }
      }
    })

    .state("app.single", {
      url: "/playlists/:playlistId",
      views: {
        menuContent: {
          // templateUrl: "templates/playlist.html",
          template: playlistTmpl,
          controller: "PlaylistCtrl",
          controllerAs: "$ctrl"
        }
      }
    });

  $urlRouterProvider.otherwise("/app/playlists");
};

export default router;
