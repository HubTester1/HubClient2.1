/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable import/no-extraneous-dependencies */

const marked = require('marked');

// converts the supplied text to markdown
exports.md = (string, options) => {
	if (string) {
		const result = marked(string).replace('lang-js', 'language-javascript');
		return result;
	}
	return '';
};
exports.md2 = (options) => marked.inlineLexer(options.fn(this).toString(), []);

// Finds an object in an array with a matching key: value
exports.findBy = (array, key, value) => [array.find((item) => item[key] === value)].filter(Boolean);


exports.returnIndexMarkupForCategory = ({ hash, data }) => {
	const { category } = hash;
	const selectedItemsArray = exports.findBy(data.root, 'category', category);
	const returnValue = '';

	console.log(selectedItemsArray, '--', data);
	console.log('<br />');

	/* if (selectedItemsArray[0]) {
		returnValue += `<h3>${category}</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody>`;
		selectedItemsArray.forEach((itemValue, itemIndex) => {
			returnValue += `<tr><td>${itemValue.name}</td><td>${itemValue.description}</td></tr>`;
		});
		returnValue += '</tbody></table>';
	} else {
		returnValue = `<h3>${category}</h3><p>No items could be found in this category</p>`;
	} */

	return exports.md(returnValue);
};
