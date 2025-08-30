import {
	c as create_ssr_component,
	d as subscribe,
	v as validate_component,
	a as escape
} from './index3.js';
import { H as HamakiLogo } from './HamakiLogo.js';
import { p as page } from './stores.js';
const ErrorMessage_svelte_svelte_type_style_lang = '';
const css = {
	code: '.logo.svelte-1axyeca.svelte-1axyeca{display:flex;justify-content:flex-end}.error-container.svelte-1axyeca.svelte-1axyeca{background-color:#ececec;border:1px solid #a2a2a2;border-radius:10px;padding:16px;text-align:center;max-width:640px;margin:0 auto}.error-container.svelte-1axyeca h2.svelte-1axyeca{margin-top:1rem;color:black;font-size:24px;margin-bottom:8px}p.svelte-1axyeca.svelte-1axyeca{color:black;font-size:16px;margin-bottom:8px}.error-container.svelte-1axyeca button.svelte-1axyeca{background-color:#a2a2a2;color:white;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;margin-top:1rem}',
	map: null
};
const ErrorMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let { message } = $$props;
	if ($$props.message === void 0 && $$bindings.message && message !== void 0)
		$$bindings.message(message);
	$$result.css.add(css);
	$$unsubscribe_page();
	return `<div class="error-container svelte-1axyeca"><div class="logo svelte-1axyeca">${validate_component(
		HamakiLogo,
		'HamakiLogo'
	).$$render($$result, {}, {}, {})}</div>
	<h2 class="svelte-1axyeca">Something went wrong | ${escape($page.status)}</h2>
	<p class="svelte-1axyeca">${escape(message)}</p>

	<button class="svelte-1axyeca">Go back</button>
</div>`;
});
export { ErrorMessage as E };
