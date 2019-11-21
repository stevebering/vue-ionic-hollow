interface IModal {
  hide: Function;
}

export default class AppController {
  private loginData: {} = {};
  private modal: IModal;

  constructor(
    $scope: object,
    $ionicModal: { fromTemplateUrl: Function },
    private $timeout: Function
  ) {
    $ionicModal
      .fromTemplateUrl("templates/login.html", {
        scope: $scope
      })
      .then((modal: IModal) => {
        this.modal = modal;
      });
  }

  private doLogin() {
    console.log("Doing login", this.loginData);

    this.$timeout(() => this.closeLogin(), 1000);
  }

  private closeLogin() {
    this.modal.hide();
  }
}
