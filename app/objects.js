exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
		obj.fn = fn
		return obj.fn()
  },

  alterObjects: function(constructor, greeting) {
		constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
		return Object.getOwnPropertyNames(obj).map((x) => `${x}: ${obj[x]}`)
  }
};
