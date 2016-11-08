exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: (function listFiles(data, dirName) {

		if (typeof dirName == 'string') {
			if (data.dir == dirName) return listFiles(data, true);

			filtered = data.files.filter((x) => typeof x == 'object')

			for (let i in filtered) {
				list = listFiles(filtered[i], dirName)

				if (list) return list
			}

			return false
		} else {
			var list = data.files.filter((x) => typeof x == 'string')
			next = data.files.filter((x) => typeof x == 'object')

			next.forEach((x) => list = list.concat(listFiles(x)))
			return list
		}
  }),

  permute: function(arr) {
		function permutation(array) {
			if(array.length == 1) {

				return [''+array[0]]
			} else {
				let list = []
				for (i in array) {
					let y = array[i];

					let add = permutation(array.filter((x) => x !== y))

					list = list.concat(add.map((x) => ''+y+x))

				}
				return list
			}
		}
		return(permutation(arr).map((x) => x.split('')))
  },

  fibonacci: (function fibonacci(n) {
		if (n == 1 || n == 2) return 1;
		else return fibonacci(n-1) + fibonacci(n-2)
  }),

  validParentheses: function(n) {
		function validParentheses(n) {
			if (n == 1) return ['()'];
			else {
				let list = []
				list = list.concat(validParentheses(n-1).map((x) => '('+x+')'))
				list = list.concat(validParentheses(n-1).map((x) => x+'()'))
				list = list.concat(validParentheses(n-1).map((x) => '()'+x))
				return list
			}
		}

		map = {}
		list = validParentheses(n);

		for (i in list) map[list[i]] = true;
		return Object.keys(map)
  }
};
