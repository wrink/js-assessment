exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
		for (let i=0; i<arr.length; i++) {
			if (arr[i] === item) return i;
		}
		return -1;
  },

  sum: function(arr) {
		hold = 0;
		for (let i in arr) hold += arr[i]

		return hold
  },

  remove: function(arr, item) {
		return arr.filter((x) => x !== item);
  },

  removeWithoutCopy: function(arr, item) {
		for (let i=arr.length; i>=0; i--) if (arr[i]===item) arr.splice(i, 1)
		return arr
  },

  append: function(arr, item) {
		arr.push(item)
		return arr
  },

  truncate: function(arr) {
		arr.pop()
		return arr
  },

  prepend: function(arr, item) {
		return [item].concat(arr)
  },

  curtail: function(arr) {
		arr.splice(0, 1)
		return arr
  },

  concat: function(arr1, arr2) {
		return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
		arr.splice(index, 0, item)
		return arr
  },

  count: function(arr, item) {
		return arr.filter((x) => x===item).length
  },

  duplicates: function(arr) {
		map = {}
		dupes = {}
		for (i in arr) {
			if (map[arr[i]] === undefined) map[arr[i]] = true;
			else dupes[arr[i]] = true;
		}

		return Object.keys(dupes).map((x) => parseInt(x))
  },

  square: function(arr) {
		return arr.map((x) => x*x)
  },

  findAllOccurrences: function(arr, target) {
		list = []
		for (let i=0; i<arr.length; i++) if (arr[i] == target) list.push(i);
		return list
  }
};
