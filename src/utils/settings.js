const defaultConfig = {
	username: "uncleenk",
	terminal: {
		fixedHeight: true,
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#bfbfc9"
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "#e8b195",
		selectionFg: "#16161e"
	},
	colors: {
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#0090ed",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		purple: "#d1aff8",
		orange: "#ff8800"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow"
	},
	urlLaunch: {
		target: "_blank"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_blank",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://r.nf/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: [
		{
			title: "General",
			color: "green",
			links: [
				{
					name: "GPT",
					url: "https://chat.openai.com/",
					icon: "simple-icons:openai"
				},
				{
					name: "Invoke Ai",
					url: "https://localhost:9090",
					icon: "simple-icons:conventional-commits"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github"
				},
				{
					name: "GitLab",
					url: "https://gitlab.com",
					icon: "ph:gitlab-logo-simple-fill"
				}
			]
		},
		{
			title: "Gaming",
			color: "cyan",
			links: [
				{
					name: "Hitmaps",
					url: "https://hitmaps.com",
					icon: "simple-icons:Hetzner"
				},
				{
					name: "IGN",
					url: "https://ign.com",
					icon: "mdi:currency-sign"
				},
				{
					name: "Fandom",
					url: "https://fandom.com/",
					icon: "simple-icons:fandom"
				}
			]
		},
		{
			title: "Science",
			color: "blue",
			links: [
				{
					name: "NASA",
					url: "https://blogs.nasa.gov/",
					icon: "simple-icons:nasa"
				},
				{
					name: "ESA",
					url: "https://blogs.esa.int/",
					icon: "mdi:black-mesa"
				}
			]
		}
	]
}

let config
const getConfig = function () {
	if (config) return config

	let localSettings
	if (typeof localStorage !== "undefined") {
		localSettings = localStorage.getItem("settings")
	}
	config = localSettings ? JSON.parse(localSettings) : defaultConfig

	return config
}

export default getConfig()
