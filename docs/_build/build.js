/* eslint-disable import/no-extraneous-dependencies */
const jsdocx = require('jsdoc-x');
const fse = require('fs-extra');

const config = { 
	// for jsdocx
	files: [
		'./src/components/Ingredients/Icon/Icon.js',
		'./src/components/Ingredients/Button/Button.js',
		'./src/pages/_app.js',
		// './src/pages',
		// './src/public',
		// './src/services',
		// './meta',
	],
	recurse: true,
	sort: 'kind',
	includePattern: '.+\\.js(doc|x)?$',
	excludePattern: '', // (^|\\/|\\\\)

	// for custom build
	projectRoot: 'HubClient2.1',
	midDestination: './docs/_mid/output.json',
	midDestination2: './docs/_mid/categorized.json',
	finalDestination: './docs/_mid/output.json',
	orderedCategories: [
		'Agenda',
		'Next.js',
		'Services',
		'Layout',
		'Screen',
		'Partial Screens',
		'Assets',
		'Headers',
		'Ingredients',
	],
	preambles: {
		Code: 'This text goes at the top of this screen.',
		Agenda: 'Not a system component. Just a todo list culled from @todos in the code.',
		Ingredients: 'Items such as controls that appear across other parts of the app.',
	},
};
const ReturnPathRelativeLocation = (pathRaw, filename, projectRoot) => {
	const positionOfFirstCharacterOfRoot = pathRaw.lastIndexOf(projectRoot);
	const lengthOfRoot = projectRoot.length;
	return pathRaw.substring(positionOfFirstCharacterOfRoot + lengthOfRoot) + filename;
};
const ReturnAllComponents = (allItemsRawArray, projectRoot) => {
	const allComponents = [];
	allItemsRawArray.forEach((itemRawValue) => {
		if (itemRawValue.tags) {
			itemRawValue.tags.forEach((tag) => {
				if (tag.title && tag.title.trim() === 'component') {
					let category = '';
					itemRawValue.tags.forEach((tagTwo) => {
						if (tagTwo.title && tagTwo.title.trim() === 'category') {
							category = tagTwo.value.trim();
						}
					});
					let smart = false;
					itemRawValue.tags.forEach((tagThree) => {
						if (tagThree.title && tagThree.title.trim() === 'smart') {
							smart = true;
						}
					});
					allComponents.push({
						name: itemRawValue.name.trim(),
						category,
						description: itemRawValue.description,
						smart,
						path: ReturnPathRelativeLocation(
							itemRawValue.meta.path,
							itemRawValue.meta.filename, 
							projectRoot,
						),
					});
				}
			});
		}
	});
	return allComponents;
};
const ReturnParamTypeAndRequirement = (paramValueRaw) => {
	const valueParts = paramValueRaw.split('.');
	return {
		type: valueParts[1].trim(),
		required: !!(valueParts[2] && valueParts[2].trim() === 'isRequired'),
	};
};
const ReturnParamIsSmart = (paramValueRaw) => {
	let isSmart = false;
	if (paramValueRaw.tags) {
		paramValueRaw.tags.forEach((tag) => {
			if (tag.title === 'smart') {
				isSmart = true;
			}
		});
	}
	return isSmart;
};
const ReturnAllParams = (allItemsRawArray) => {
	const allParams = [];
	allItemsRawArray.forEach((itemRawValue) => {
		if (
			itemRawValue.kind && 
			itemRawValue.kind === 'member' && 
			itemRawValue.memberof && 
			itemRawValue.meta && 
			itemRawValue.meta.code &&
			itemRawValue.meta.code.type && 
			itemRawValue.meta.code.type === 'MemberExpression'
		) {				
			const memberOfParts = itemRawValue.memberof.split('.');
			if (memberOfParts[1].trim() === 'propTypes') {
				const paramTypeAndRequirement = ReturnParamTypeAndRequirement(itemRawValue.meta.code.value);
				const paramToPush = {
					name: itemRawValue.meta.code.name.trim(),
					description: itemRawValue.description,
					smart: ReturnParamIsSmart(itemRawValue),
					type: paramTypeAndRequirement.type,
					required: paramTypeAndRequirement.required,
					parent: memberOfParts[0],
				};
				if (itemRawValue.defaultvalue) {
					paramToPush.default = itemRawValue.defaultvalue;
				}
				allParams.push(paramToPush);
			}
		}
	});
	return allParams;
};
const ReturnAllParamDefaults = (allItemsRawArray) => {
	const allDefaults = [];
	allItemsRawArray.forEach((itemRawValue) => {
		if (
			itemRawValue.kind
			&& itemRawValue.kind === 'member'
			&& itemRawValue.memberof
			&& itemRawValue.meta
			&& itemRawValue.meta.code
			&& itemRawValue.meta.code.type
			&& itemRawValue.meta.code.type !== 'Identifier'
		) {
			const memberOfParts = itemRawValue.memberof.split('.');
			if (memberOfParts[1] && memberOfParts[1].trim() === 'defaultProps') {
				allDefaults.push({
					name: itemRawValue.meta.code.name.trim(),
					default: typeof (itemRawValue.meta.code.value) === 'string'
						? itemRawValue.meta.code.value.trim()
						: itemRawValue.meta.code.value,
					parent: memberOfParts[0],
				});
			}
		}
	});
	return allDefaults;
};
const ReturnCopyOfObject = (objectValue) => JSON.parse(JSON.stringify(objectValue));
const ReturnComponentsSections = (allItemsRawArray, projectRoot, preambles) => {
	const buildObject = {};
	const allComponents = ReturnAllComponents(allItemsRawArray, projectRoot);
	const allParams = ReturnAllParams(allItemsRawArray);
	const allParamDefaults = ReturnAllParamDefaults(allItemsRawArray);
	allComponents.forEach((component) => {
		const componentCopy = ReturnCopyOfObject(component);
		if (!buildObject[componentCopy.category]) {
			buildObject[componentCopy.category] = {};
		}
		buildObject[componentCopy.category].title = componentCopy.category;
		if (preambles[componentCopy.category]) {
			buildObject[componentCopy.category].preamble = preambles[componentCopy.category];
		}
		if (!buildObject[componentCopy.category].components) {
			buildObject[componentCopy.category].components = [];
		}
		allParams.forEach((param) => {
			const paramCopy = ReturnCopyOfObject(param);
			// if this param goes with this component
			if (paramCopy.parent === componentCopy.name) {
				if (!componentCopy.default) {
					// look for a default value for this param;
					// 		iterate over all paramDefaults
					allParamDefaults.forEach((paramDefault) => {
						// if this default goes with this param and this component
						if (
							paramDefault.name === paramCopy.name
							&& paramDefault.parent === paramCopy.parent
						) {
							// add the default to the param
							paramCopy.default = paramDefault.default;
						}
					});
				}
				// ensure the component has a params array
				if (!componentCopy.params) {
					componentCopy.params = [];
				}
				// add the param, with or without default, to the component
				componentCopy.params.push(paramCopy);
			}
		});
		// add the component to the category inside build object
		buildObject[componentCopy.category].components.push(componentCopy);
	});


	// const tempBuildArray = [allComponents, allParams, allParamDefaults];
	return buildObject;
};
const ReturnAllItems = (parseConfig) => new Promise((resolve, reject) => {
	jsdocx.parse(parseConfig, (error, docs) => {
		if (error) {
			resolve({ error: true });
		}
		resolve(docs);
	});
});
const WriteToFile = (destination, data) => {
	fse.writeJsonSync(destination, data);
};
const Build = (buildConfig) => {
	ReturnAllItems(buildConfig)
		.then((result) => {
			if (result) {
				WriteToFile(buildConfig.midDestination, result);
				if (!result.error) {
					const allItemsRawArray = result;
					const buildObject = {};
					const componentsSections = 
						ReturnComponentsSections(allItemsRawArray, buildConfig.projectRoot, buildConfig.preambles);


					WriteToFile(buildConfig.midDestination2, componentsSections);
				}
			}
		});
};

Build(config);
