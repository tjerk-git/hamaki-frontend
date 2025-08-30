import {
	c as create_ssr_component,
	s as setContext,
	v as validate_component,
	e as each,
	a as escape,
	b as add_attribute
} from '../../chunks/index3.js';
import { w as writable } from '../../chunks/index2.js';
import { H as HamakiLogo } from '../../chunks/HamakiLogo.js';
const app = '';
const themes = [
	{
		name: 'OG purple',
		icon: '🌸',
		colors: {
			text: '#FFF',
			accent: '#7958d6',
			backgroundFrom: '#5228CD',
			backgroundTo: '#7856D5',
			headerFrom: '#6232e6',
			headerTo: '#491cc3'
		}
	},
	{
		name: 'lollipop',
		icon: '🍭',
		colors: {
			text: '#f1f1f1',
			accent: '#7958d6',
			backgroundFrom: 'rgba(40, 91, 212, 0.73) -3%',
			backgroundTo: 'rgba(171, 53, 163, 0.45) 49.3%',
			headerFrom: 'rgba(40, 91, 212, 0.73) 0%',
			headerTo: 'rgba(171, 53, 163, 0.45) 54.3%'
		}
	},
	{
		name: 'blue',
		icon: '🔵',
		colors: {
			text: '#FFF',
			accent: '#477CE1',
			backgroundFrom: 'rgba(62, 161, 219, 1) 11.2%',
			backgroundTo: 'rgba(93, 52, 236, 1) 100.2%',
			headerFrom: 'rgba(62, 161, 219, 1) 11.2%',
			headerTo: 'rgba(93, 52, 236, 1) 100.2%'
		}
	},
	{
		name: 'red',
		icon: '🔴',
		colors: {
			text: '#FFF',
			accent: '#DE4444',
			backgroundFrom: 'rgba(219, 62, 62, 1) 11.2%',
			backgroundTo: 'rgba(236, 93, 93, 1) 100.2%',
			headerFrom: 'rgba(219, 62, 62, 1) 11.2%',
			headerTo: 'rgba(236, 93, 93, 1) 100.2%'
		}
	},
	{
		name: 'Mike Money',
		icon: '💰',
		colors: {
			text: '#FFF',
			accent: '#EA5874',
			backgroundFrom: '#EA5874',
			backgroundTo: '#3414A3',
			headerFrom: '#3414A3',
			headerTo: '#EA5874'
		}
	}
];
const ThemeContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { themes: themes$1 = [...themes] } = $$props;
	let _current = themes$1[0].name;
	const getCurrentTheme = (name) => themes$1.find((h) => h.name === name);
	const Theme = writable(getCurrentTheme(_current));
	setContext('theme', {
		// providing Theme store through context makes store readonly
		theme: Theme,
		toggle: () => {
			let _currentIndex = themes$1.findIndex((h) => h.name === _current);
			_current = themes$1[_currentIndex === themes$1.length - 1 ? 0 : (_currentIndex += 1)].name;
			Theme.update((t) => ({ ...t, ...getCurrentTheme(_current) }));
			setRootColors(getCurrentTheme(_current));
		}
	});
	const setRootColors = (theme) => {
		for (let [prop, color] of Object.entries(theme.colors)) {
			let varString = `--theme-${prop}`;
			document.documentElement.style.setProperty(varString, color);
		}
		document.documentElement.style.setProperty('--theme-name', theme.name);
	};
	if ($$props.themes === void 0 && $$bindings.themes && themes$1 !== void 0)
		$$bindings.themes(themes$1);
	return `${
		slots.default
			? slots.default({})
			: `
	
`
	}`;
});
const Menu_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.desktop-menu.svelte-lallep.svelte-lallep{display:flex}.hamburger.svelte-lallep.svelte-lallep{display:none;flex-direction:column;justify-content:space-around;width:30px;height:30px;background:transparent;border:none;cursor:pointer;padding:0;z-index:1001}.line.svelte-lallep.svelte-lallep{width:100%;height:3px;background:#ffffff;border-radius:2px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);transform-origin:center;box-shadow:0 1px 3px rgba(0, 0, 0, 0.3)}.hamburger.active.svelte-lallep .line.svelte-lallep:nth-child(1){transform:rotate(45deg) translate(6px, 6px)}.hamburger.active.svelte-lallep .line.svelte-lallep:nth-child(2){opacity:0}.hamburger.active.svelte-lallep .line.svelte-lallep:nth-child(3){transform:rotate(-45deg) translate(6px, -6px)}.mobile-dropdown.svelte-lallep.svelte-lallep{position:fixed;top:0;right:0;width:300px;max-width:90vw;margin-top:80px;margin-right:1rem;background:rgba(255, 255, 255, 0.95);backdrop-filter:blur(20px);border-radius:20px;box-shadow:0 10px 30px rgba(168, 85, 247, 0.3);border:2px solid rgba(168, 85, 247, 0.2);animation:svelte-lallep-slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);z-index:9999}.mobile-menu-items.svelte-lallep.svelte-lallep{list-style:none;padding:1rem;margin:0;display:grid;gap:0.5rem}.mobile-menu-items.svelte-lallep li.svelte-lallep{margin:0}.mobile-menu-items.svelte-lallep a.svelte-lallep{display:block;padding:1rem 1.5rem;color:#1a1a1a;text-decoration:none;font-weight:500;border-radius:15px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:rgba(168, 85, 247, 0.05);border:1px solid rgba(168, 85, 247, 0.1);font-size:1.1rem;text-align:center}.mobile-menu-items.svelte-lallep a.svelte-lallep:hover{background:rgba(168, 85, 247, 0.15);border-color:rgba(168, 85, 247, 0.4);transform:translateY(-2px);box-shadow:0 5px 15px rgba(168, 85, 247, 0.2)}.desktop-menu.svelte-lallep.svelte-lallep{display:none}.hamburger.svelte-lallep.svelte-lallep{display:flex}@keyframes svelte-lallep-slideDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}',
	map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<nav>
	<ul class="desktop-menu svelte-lallep"><li><a href="/about">What is Hamaki?</a></li></ul>

	
	<button class="${['hamburger svelte-lallep', '']
		.join(' ')
		.trim()}"><span class="line svelte-lallep"></span>
		<span class="line svelte-lallep"></span>
		<span class="line svelte-lallep"></span></button>

	
	${``}
</nav>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<header><div class="logo--box" id="logo" style="margin-top: 25px;"><a href="/">${validate_component(
		HamakiLogo,
		'HamakiLogo'
	).$$render($$result, {}, {}, {})}</a>
		<h1 id="title" style="font-size: 40pt;">Hamaki</h1></div></header>`;
});
const Open_graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { openGraph = void 0 } = $$props;
	if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
		$$bindings.openGraph(openGraph);
	return `${
		openGraph
			? `${each(Object.entries(openGraph), ([key, value]) => {
					let _type = typeof value;
					return `
    
    ${
			_type !== 'object'
				? (() => {
						let transform = key.replace(/([a-z])([A-Z])/g, '$1:$2').toLowerCase();
						return `
      <meta property="${'og:' + escape(transform, true)}"${add_attribute('content', value, 0)}>`;
				  })()
				: ``
		}
    ${
			_type === 'object'
				? `${
						key === 'images'
							? `${each(openGraph.images ?? [], (image) => {
									return `${each(Object.entries(image), ([key2, value2]) => {
										return `<meta property="${'og:image:' + escape(key2, true)}"${add_attribute(
											'content',
											value2.toString(),
											0
										)}>`;
									})}`;
							  })}`
							: `${
									key === 'videos'
										? `${each(openGraph.videos ?? [], (video) => {
												return `${each(Object.entries(video), ([key2, value2]) => {
													return `${
														key2 === 'url'
															? `<meta property="og:video"${add_attribute(
																	'content',
																	value2.toString(),
																	0
															  )}>`
															: `<meta property="${
																	'og:video:' + escape(key2, true)
															  }"${add_attribute('content', value2.toString(), 0)}>`
													}`;
												})}`;
										  })}`
										: `${
												key === 'localeAlternate'
													? `${each(openGraph.localeAlternate ?? [], (alternate) => {
															return `<meta property="og:locale:alternate"${add_attribute(
																'content',
																alternate,
																0
															)}>`;
													  })}`
													: `${
															key === 'music'
																? `${each(
																		Object.entries(openGraph.music ?? {}),
																		([key2, value2]) => {
																			let transform = key2
																				.replace(/([a-z])([A-Z])/g, '$1:$2')
																				.toLowerCase();
																			return `
          <meta property="${'music:' + escape(transform, true)}"${add_attribute(
																				'content',
																				value2.toString(),
																				0
																			)}>`;
																		}
																  )}`
																: `${
																		key === 'movie'
																			? `${each(
																					Object.entries(openGraph.movie ?? {}),
																					([key2, value2]) => {
																						return `${
																							typeof value2 === 'object'
																								? `${each(value2, (propValue) => {
																										return `<meta property="${
																											'video:' + escape(key2, true)
																										}"${add_attribute('content', propValue, 0)}>`;
																								  })}`
																								: (() => {
																										let transform = key2
																											.replace(/([a-z])([A-Z])/g, '$1:$2')
																											.toLowerCase();
																										return `
            <meta property="${'video:' + escape(transform, true)}"${add_attribute(
																											'content',
																											value2.toString(),
																											0
																										)}>`;
																								  })()
																						}`;
																					}
																			  )}`
																			: `${
																					key === 'article'
																						? `${each(
																								Object.entries(openGraph.article ?? {}),
																								([key2, value2]) => {
																									return `${
																										typeof value2 === 'object'
																											? `${each(value2, (propValue) => {
																													return `<meta property="${
																														'article:' + escape(key2, true)
																													}"${add_attribute(
																														'content',
																														propValue,
																														0
																													)}>`;
																											  })}`
																											: (() => {
																													let transform = key2
																														.replace(/([a-z])([A-Z])/g, '$1:$2')
																														.toLowerCase();
																													return `
            <meta property="${'article:' + escape(transform, true)}"${add_attribute(
																														'content',
																														value2.toString(),
																														0
																													)}>`;
																											  })()
																									}`;
																								}
																						  )}`
																						: `${
																								key === 'book'
																									? `${each(
																											Object.entries(openGraph.book ?? {}),
																											([key2, value2]) => {
																												return `${
																													typeof value2 === 'object'
																														? `${each(value2, (propValue) => {
																																return `<meta property="${
																																	'book:' + escape(key2, true)
																																}"${add_attribute(
																																	'content',
																																	propValue,
																																	0
																																)}>`;
																														  })}`
																														: (() => {
																																let transform = key2
																																	.replace(
																																		/([a-z])([A-Z])/g,
																																		'$1:$2'
																																	)
																																	.toLowerCase();
																																return `
            <meta property="${'book:' + escape(transform, true)}"${add_attribute(
																																	'content',
																																	value2.toString(),
																																	0
																																)}>`;
																														  })()
																												}`;
																											}
																									  )}`
																									: `${
																											key === 'profile'
																												? `${each(
																														Object.entries(openGraph.profile ?? {}),
																														([key2, value2]) => {
																															let transform = key2
																																.replace(/([a-z])([A-Z])/g, '$1:$2')
																																.toLowerCase();
																															return `
          <meta property="${'profile:' + escape(transform, true)}"${add_attribute(
																																'content',
																																value2,
																																0
																															)}>`;
																														}
																												  )}`
																												: ``
																									  }`
																						  }`
																			  }`
																  }`
													  }`
										  }`
							  }`
				  }`
				: ``
		}`;
			  })}`
			: ``
	}`;
});
const Svelte_seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title = void 0 } = $$props;
	let { description = void 0 } = $$props;
	let { keywords = void 0 } = $$props;
	let { base = void 0 } = $$props;
	let { applicationName = void 0 } = $$props;
	let { themeColor = void 0 } = $$props;
	let { nofollow = false } = $$props;
	let { noindex = false } = $$props;
	let { nositelinkssearchbox = false } = $$props;
	let { notranslate = false } = $$props;
	let { canonical = void 0 } = $$props;
	let { amp = void 0 } = $$props;
	let { manifest = void 0 } = $$props;
	let { languageAlternates = void 0 } = $$props;
	let { twitter = void 0 } = $$props;
	let { openGraph = void 0 } = $$props;
	let { facebook = void 0 } = $$props;
	let { jsonLd = void 0 } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0)
		$$bindings.description(description);
	if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
		$$bindings.keywords(keywords);
	if ($$props.base === void 0 && $$bindings.base && base !== void 0) $$bindings.base(base);
	if (
		$$props.applicationName === void 0 &&
		$$bindings.applicationName &&
		applicationName !== void 0
	)
		$$bindings.applicationName(applicationName);
	if ($$props.themeColor === void 0 && $$bindings.themeColor && themeColor !== void 0)
		$$bindings.themeColor(themeColor);
	if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
		$$bindings.nofollow(nofollow);
	if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
		$$bindings.noindex(noindex);
	if (
		$$props.nositelinkssearchbox === void 0 &&
		$$bindings.nositelinkssearchbox &&
		nositelinkssearchbox !== void 0
	)
		$$bindings.nositelinkssearchbox(nositelinkssearchbox);
	if ($$props.notranslate === void 0 && $$bindings.notranslate && notranslate !== void 0)
		$$bindings.notranslate(notranslate);
	if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
		$$bindings.canonical(canonical);
	if ($$props.amp === void 0 && $$bindings.amp && amp !== void 0) $$bindings.amp(amp);
	if ($$props.manifest === void 0 && $$bindings.manifest && manifest !== void 0)
		$$bindings.manifest(manifest);
	if (
		$$props.languageAlternates === void 0 &&
		$$bindings.languageAlternates &&
		languageAlternates !== void 0
	)
		$$bindings.languageAlternates(languageAlternates);
	if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
		$$bindings.twitter(twitter);
	if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
		$$bindings.openGraph(openGraph);
	if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
		$$bindings.facebook(facebook);
	if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
		$$bindings.jsonLd(jsonLd);
	return `${
		(($$result.head += `<!-- HEAD_svelte-edm2kb_START -->${
			title ? `${(($$result.title = `<title>${escape(title)}</title>`), '')}` : ``
		}${description ? `<meta name="description"${add_attribute('content', description, 0)}>` : ``}${
			canonical ? `<link rel="canonical"${add_attribute('href', canonical, 0)}>` : ``
		}${keywords ? `<meta name="keywords"${add_attribute('content', keywords, 0)}>` : ``}${
			amp ? `<link rel="amphtml"${add_attribute('href', amp, 0)}>` : ``
		}${manifest ? `<link rel="manifest"${add_attribute('href', manifest, 0)}>` : ``}${
			applicationName
				? `<meta name="application-name"${add_attribute('content', applicationName, 0)}>`
				: ``
		}${
			languageAlternates
				? `${each(languageAlternates, ({ href, hreflang }) => {
						return `<link rel="alternate"${add_attribute('href', href, 0)}${add_attribute(
							'hreflang',
							hreflang,
							0
						)}>`;
				  })}`
				: ``
		}${themeColor ? `<meta name="theme-color"${add_attribute('content', themeColor, 0)}>` : ``}${
			base ? `<base${add_attribute('href', base, 0)}>` : ``
		}${
			facebook?.appId
				? `<meta property="fb:app_id"${add_attribute('content', facebook.appId, 0)}>`
				: ``
		}<meta name="robots"${add_attribute(
			'content',
			`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`,
			0
		)}><meta name="googlebot"${add_attribute(
			'content',
			`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`,
			0
		)}>${nositelinkssearchbox ? `<meta name="google" content="nositelinkssearchbox">` : ``}${
			notranslate ? `<meta name="google" content="notranslate">` : ``
		}${
			twitter
				? `${each(Object.entries(twitter), ([key, value]) => {
						let transformed = key.replace(/([a-z])([A-Z])/g, '$1:$2').toLowerCase();
						return `
      
      <meta name="${'twitter:' + escape(transformed, true)}"${add_attribute('content', value, 0)}>`;
				  })}`
				: ``
		}${
			openGraph
				? `${validate_component(Open_graph, 'OpenGraphComponent').$$render(
						$$result,
						{ openGraph },
						{},
						{}
				  )}`
				: ``
		}${
			jsonLd
				? (() => {
						let data = Object.assign({ '@context': 'https://schema.org' }, jsonLd);
						return `
    <!-- HTML_TAG_START -->${`<script type="application/ld+json">${
			JSON.stringify(data) + '<'
		}/script>`}<!-- HTML_TAG_END -->`;
				  })()
				: ``
		}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-edm2kb_END -->`),
		'')
	}`;
});
const _layout_svelte_svelte_type_style_lang = '';
const css = {
	code: 'body{background:linear-gradient(var(--theme-backgroundFrom), var(--theme-backgroundTo));color:var(--theme-text)}header{background:linear-gradient(var(--theme-headerFrom), var(--theme-headerTo));color:var(--theme-text)}h1{--font-size:40pt;--typography-spacing-vertical:3rem;color:var(--theme-text);font-family:ThunderBold}h2{--font-size:1.75rem;--typography-spacing-vertical:2.625rem;color:var(--theme-text);font-family:Inter}svg{fill:var(--theme-accent)}',
	map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${
		(($$result.head += `<!-- HEAD_svelte-z5deuy_START -->${validate_component(
			Svelte_seo,
			'SvelteSeo'
		).$$render(
			$$result,
			{
				title: 'Hamaki, booking made easy',
				description: 'Pretty good booking on macOs',
				canonical: 'https://www.hamaki.pro',
				keywords: 'macOs, m1, apple, silicon, booking, easy, private, secure',
				openGraph: {
					title: 'Hamaki, personal appointments',
					description: 'Pretty good booking on macOs',
					url: 'https://www.hamaki.pro/',
					type: 'website',
					images: [
						{
							url: 'https://www.hamaki.pro/hamaki.png',
							width: 800,
							height: 600,
							alt: 'Hamaki'
						}
					],
					site_name: 'Hamaki'
				}
			},
			{},
			{}
		)}<!-- HEAD_svelte-z5deuy_END -->`),
		'')
	}

${validate_component(ThemeContext, 'ThemeContext').$$render(
	$$result,
	{},
	{},
	{
		default: () => {
			return `${validate_component(Header, 'Header').$$render($$result, {}, {}, {})}
	${validate_component(Menu, 'Menu').$$render($$result, {}, {}, {})}

	${slots.default ? slots.default({}) : ``}`;
		}
	}
)}`;
});
export { Layout as default };
