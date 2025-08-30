import {
	c as create_ssr_component,
	d as subscribe,
	v as validate_component
} from '../../chunks/index3.js';
import { p as page } from '../../chunks/stores.js';
import { E as ErrorMessage } from '../../chunks/ErrorMessage.js';
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$unsubscribe_page();
	return `<main>${
		$page.error.message
			? `${validate_component(ErrorMessage, 'ErrorMessage').$$render(
					$$result,
					{ message: $page.error.message },
					{},
					{}
			  )}`
			: `${validate_component(ErrorMessage, 'ErrorMessage').$$render(
					$$result,
					{ message: 'Somewthing went wrong' },
					{},
					{}
			  )}`
	}</main>`;
});
export { Error as default };
