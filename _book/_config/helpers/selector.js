/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable import/no-extraneous-dependencies */
const handlebars = require('handlebars');
/* const arrayify = require('array-back');
const { where } = require('test-value');
const state = require('./state'); */


function identifiers(options) {
	/* const query = {};

	for (const prop in options.hash) {
		if (/^-/.test(prop)) {
			query[prop.replace(/^-/, '!')] = options.hash[prop];
		} else if (/^_/.test(prop)) {
			query[prop.replace(/^_/, '')] = new RegExp(options.hash[prop]);
		} else {
			query[prop] = options.hash[prop];
		}
	}
	return arrayify(options.data.root).filter(where(query)).filter((doclet) => !doclet.ignore && (state.options.private ? true : doclet.access !== 'private')); */
}


/* 

  options.hash.scope = 'global'
  return _identifiers(options).filter(function (identifier) {
    if (identifier.kind === 'external') {
      return identifier.description && identifier.description.length > 0
    } else {
      return true
    }
  })


 */


/**
 * Finds an object in an array with a matching key: value
 *
 * @function findBy
 * @param array - The array to search
 * @param key - The key to compare
 * @param value - The value to find
 * @returns
 */
exports.findBy = (array, key, value) => [array.find((item) => item[key] === value)].filter(Boolean);


exports.categorySelector = ({ hash, data }) => {
	// options.hash.kind = 'module';
	// return handlebars.helpers.each(identifiers(options), options);
	const { category } = hash;
	const itemArray = data.root;

	console.log('selected items');
	console.log(JSON.stringify(exports.findBy(itemArray, 'category', category)));


	return exports.findBy(itemArray, 'category', category);
};
