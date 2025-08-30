import {
	c as create_ssr_component,
	d as subscribe,
	v as validate_component,
	a as escape,
	b as add_attribute
} from '../../../../chunks/index3.js';
import { a as getTimeZone } from '../../../../chunks/helpers.js';
import { p as page } from '../../../../chunks/stores.js';
import { t as toast, T as Toaster } from '../../../../chunks/Toaster.js';
import { a as selectedWaitingListDay } from '../../../../chunks/stores2.js';
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: "textarea.svelte-1u1rkle{background:rgba(0, 0, 0, 30%);color:#ffffff;border:1px solid -var(--theme-accent);border-radius:5px;outline:none;padding:1.2rem;font-size:1.2rem;width:100%;margin-bottom:20px;font-family:Inter}.reserve_container.svelte-1u1rkle{margin-bottom:20px;padding:20px}label.svelte-1u1rkle{margin-bottom:10px}input[type='email'].svelte-1u1rkle,input[type='text'].svelte-1u1rkle{background:rgba(0, 0, 0, 30%);color:#ffffff;border:1px solid var(--theme-accent);border-radius:5px;outline:none;padding:1.2rem;font-size:1.2rem;width:100%;margin-bottom:20px}label.svelte-1u1rkle{display:block}button.svelte-1u1rkle{background:white;color:var(--theme-accent);text-decoration:none;text-align:left;border-radius:15px;border:none;cursor:pointer;padding:1rem;border-radius:10px;outline:none;font-size:1rem;line-height:1.25;text-align:center;width:100%}.box.svelte-1u1rkle{display:flex;align-items:center;justify-content:center;position:relative;height:10rem;width:100%;border-radius:0.5rem;user-select:none;color:black;background:white}",
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	let $selectedWaitingListDay, $$unsubscribe_selectedWaitingListDay;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$unsubscribe_selectedWaitingListDay = subscribe(
		selectedWaitingListDay,
		(value) => ($selectedWaitingListDay = value)
	);
	let { form } = $$props;
	const { slug } = $page.params;
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	$$result.css.add(css);
	{
		{
			if (form?.success) {
				toast.success(' You are on the waitinglist!');
			}
			if (form?.success === false) {
				toast.error('Whoops something went wrong');
			}
		}
	}
	$$unsubscribe_page();
	$$unsubscribe_selectedWaitingListDay();
	return `<main>${validate_component(Toaster, 'Toaster').$$render($$result, {}, {}, {})}

	${form?.success === false ? `<p>Whoops, something went wrong</p>` : ``}

	${
		form?.success === true
			? `<div class="box svelte-1u1rkle">Fingers crossed, you are on the waitinglist! 📋</div>`
			: ``
	}
	<div class="reserve_container svelte-1u1rkle"><form method="POST" action="${
		'/waitinglist/' + escape(slug, true)
	}"><label for="email" class="svelte-1u1rkle">Email:</label>
			<input type="email" name="email" id="email" required class="svelte-1u1rkle">

			<label for="name" class="svelte-1u1rkle">Name:</label>
			<input type="text" name="name" id="name" required class="svelte-1u1rkle">

			<label for="name" class="svelte-1u1rkle">Leave a comment (optional)</label>
			<textarea id="comment" name="comment" class="svelte-1u1rkle"></textarea>

			<input type="hidden" name="date" id="date"${add_attribute('value', $selectedWaitingListDay, 0)}>
			<input type="hidden" name="timezone" id="timezone"${add_attribute('value', getTimeZone(), 0)}>

			<button type="submit" class="svelte-1u1rkle">Grab a spot on the waitinglist!</button></form></div>
</main>`;
});
export { Page as default };
