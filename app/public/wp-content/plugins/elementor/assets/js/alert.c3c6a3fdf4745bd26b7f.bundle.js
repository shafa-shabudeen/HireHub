<<<<<<< HEAD
/*! elementor - v3.24.0 - 09-10-2024 */
=======
<<<<<<< HEAD
/*! elementor - v3.24.0 - 01-10-2024 */
=======
/*! elementor - v3.24.0 - 09-10-2024 */
>>>>>>> ruvais
>>>>>>> bd06bd206965cc56e0274c0dcf857ad87f3e6bf4
"use strict";
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([["alert"],{

/***/ "../assets/dev/js/frontend/handlers/alert.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/alert.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Alert extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        dismissButton: '.elementor-alert-dismiss'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $dismissButton: this.$element.find(selectors.dismissButton)
    };
  }
  bindEvents() {
    this.elements.$dismissButton.on('click', this.onDismissButtonClick.bind(this));
  }
  onDismissButtonClick() {
    this.$element.fadeOut();
  }
}
exports["default"] = Alert;

/***/ })

}]);
//# sourceMappingURL=alert.c3c6a3fdf4745bd26b7f.bundle.js.map