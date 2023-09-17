module.exports = plop => {
	// create your generators here
	plop.setGenerator("component", {
		description: "Create a component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
		],
		actions: [
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/index.tsx",
				templateFile: "templates/Component.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/styles.ts",
				templateFile: "templates/styles.ts.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: "templates/Component.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
				templateFile: "templates/Component.spec.tsx.hbs",
			},
		],
	});
};
