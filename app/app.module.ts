import angular from "angular";
import controllers from "./controllers/index";
import router from "./app.routes";

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

app.config(router);
