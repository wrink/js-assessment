exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
		return new Promise(function(callback) {
			res(value)
		})
  },

  manipulateRemoteData: function(url) {
		return new Promise(function (callback) {
			req = new XMLHttpRequest();

			req.onload = function() {
				callback(req.response.people.map((x) => x.name).sort())
			};
			req.open('GET', url)
			req.responseType = 'json'
			req.send()
		})
  }
};
