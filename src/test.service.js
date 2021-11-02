(function (app) {
  var { Class } = ng.core;

  app.TestService = Class({
    constructor: function () {},
    getRandomQuote: function () {
      return {
        line: "Cytat testowy",
        author: "Autor testowy",
      };
    },
    generateRandomQuote: function (delay, callback) {
      var self = this;
      callback(this.getRandomQuote());
      setInterval(function () {
        callback(self.getRandomQuote());
      }, delay);
    },
  });
})(window.app || (window.app = {}));
