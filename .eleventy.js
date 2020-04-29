module.exports = (config) => {
	config.setTemplateFormats("njk,css,md")
	config.setDataDeepMerge(true)
	return {
		dir: {
			input: "src/11ty"
		},
		markdownTemplateEngine: "njk"
	};
};
