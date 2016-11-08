exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
		this.then = function(callback) {
			setTimeout(callback, 0, value)
		}
		return this
  },

  manipulateRemoteData: function(url) {
		this.then = function (callback) {
			req = new XMLHttpRequest();

			req.onload = function() {
				callback(req.response.people.map((x) => x.name).sort())
				//callback(JSON.parse(response.target.response).people.map((x)=>x.name))
			};
			req.open('GET', url)
			req.responseType = 'json'
			req.send()
		}
		return this
  }
};
