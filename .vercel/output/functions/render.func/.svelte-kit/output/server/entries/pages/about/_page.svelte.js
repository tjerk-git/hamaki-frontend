import {
	c as create_ssr_component,
	e as each,
	a as escape,
	v as validate_component
} from '../../../chunks/index3.js';
const Accordion_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.item.svelte-1fnucet{display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease}.item.svelte-1fnucet:hover{background:rgb(220, 220, 220)}.toggle-icon.svelte-1fnucet{transition:transform 0.3s ease;font-size:0.8rem;color:#666}.toggle-icon.rotated.svelte-1fnucet{transform:rotate(180deg)}.content.svelte-1fnucet{animation:svelte-1fnucet-slideDown 0.3s ease-out}@keyframes svelte-1fnucet-slideDown{from{opacity:0;max-height:0;padding-top:0;padding-bottom:0}to{opacity:1;max-height:200px;padding-top:1.5rem;padding-bottom:1.5rem}}',
	map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let items = [
		{
			title: '🚀 What is Hamaki?',
			content: 'Hamaki is MacOs app for scheduling appointments',
			open: false
		},
		{
			title: '📅 How do I use it?',
			content: 'You "draw" spots on your calendar and people can sign up for those spots.',
			open: false
		},
		{
			title: '🖥️ Where do I download Hamaki?',
			content: "Download Hamaki from the Mac App Store - it's available now!",
			open: false
		},
		{
			title: '🦺 Is it safe?',
			content: "Yes, we don't store your data or your calendar",
			open: false
		}
	];
	$$result.css.add(css$1);
	return `<div>${each(items, (item, index) => {
		return `<div class="accordion"><div class="item svelte-1fnucet">${escape(item.title)}
				<span class="${['toggle-icon svelte-1fnucet', item.open ? 'rotated' : '']
					.join(' ')
					.trim()}">▼</span></div>
			${
				item.open
					? `<div class="content svelte-1fnucet">${escape(item.content)}
				</div>`
					: ``
			}
		</div>`;
	})}
</div>`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.container.svelte-ltsjwb{display:flex;justify-content:center}article.svelte-ltsjwb{width:80%;max-width:560px}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<main><div class="container svelte-ltsjwb"><article class="svelte-ltsjwb">${validate_component(
		Accordion,
		'Accordion'
	).$$render($$result, {}, {}, {})}</article></div>
</main>`;
});
export { Page as default };
