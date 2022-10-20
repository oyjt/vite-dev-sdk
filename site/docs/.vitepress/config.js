module.exports = {
	title: "VitePress",
	description: "A VitePress site",
	themeConfig: {
		siteTitle: false,
		// logo: "/logo.png",
		nav: [{ text: "指南", link: "/guide/installation" }],
		socialLinks: [{ icon: "github", link: "" }],
		sidebar: {
			"/guide/": [
				{
					text: "基础",
					items: [
						{
							text: "安装",
							link: "/guide/installation",
						},
						{
							text: "快速开始",
							link: "/guide/quickstart",
						},
					],
				},
				{
					text: "进阶",
					items: [
						{
							text: "xx",
							link: "/xx",
						},
					],
				},
			],
		},
	},
};
