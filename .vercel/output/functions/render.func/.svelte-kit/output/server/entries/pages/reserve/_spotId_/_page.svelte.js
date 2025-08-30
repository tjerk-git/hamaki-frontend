import {
	c as create_ssr_component,
	d as subscribe,
	v as validate_component,
	a as escape,
	b as add_attribute
} from '../../../../chunks/index3.js';
import { p as page } from '../../../../chunks/stores.js';
import { t as toast, T as Toaster } from '../../../../chunks/Toaster.js';
import { s as selectedSpot } from '../../../../chunks/stores2.js';
import { g as getCorrectDate, a as getTimeZone } from '../../../../chunks/helpers.js';
const PUBLIC_BASE_URL = 'https://example.com';
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: "textarea.svelte-dmyk2t.svelte-dmyk2t{background:rgba(0, 0, 0, 30%);color:#ffffff;border:1px solid -var(--theme-accent);border-radius:5px;outline:none;padding:1.2rem;font-size:1.2rem;width:100%;margin-bottom:20px;font-family:Inter}.reserve_container.svelte-dmyk2t.svelte-dmyk2t{margin-bottom:20px;padding:20px}.spot__time.svelte-dmyk2t.svelte-dmyk2t{display:flex;align-items:center;margin-bottom:20px}label.svelte-dmyk2t.svelte-dmyk2t{margin-bottom:10px}input[type='email'].svelte-dmyk2t.svelte-dmyk2t,input[type='text'].svelte-dmyk2t.svelte-dmyk2t{background:rgba(0, 0, 0, 30%);color:#ffffff;border:1px solid var(--theme-accent);border-radius:5px;outline:none;padding:1.2rem;font-size:1.2rem;width:100%;margin-bottom:20px}label.svelte-dmyk2t.svelte-dmyk2t{display:block}button.svelte-dmyk2t.svelte-dmyk2t{background:white;color:var(--theme-accent);text-decoration:none;text-align:left;border-radius:15px;border:none;cursor:pointer;padding:1rem;border-radius:10px;outline:none;font-size:1rem;line-height:1.25;text-align:center;width:100%}.outline.svelte-dmyk2t.svelte-dmyk2t{background:#45219a;color:white;text-decoration:none;text-align:left;border-radius:15px;border:none;cursor:pointer;padding:1rem;border-radius:10px;outline:none;font-size:1rem;line-height:1.25;text-align:center;width:100%;display:block}.link.svelte-dmyk2t.svelte-dmyk2t{display:inline-block;padding-top:10px}.spot__time.svelte-dmyk2t h2.svelte-dmyk2t{margin-left:20px}h2.svelte-dmyk2t.svelte-dmyk2t{font-size:1.75rem;font-family:Inter}span.svelte-dmyk2t.svelte-dmyk2t{pointer-events:none}",
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	let $selectedSpot, $$unsubscribe_selectedSpot;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$unsubscribe_selectedSpot = subscribe(selectedSpot, (value) => ($selectedSpot = value));
	let possibleEmail = '';
	let possibleName = '';
	let { form } = $$props;
	const dateOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};
	const { spotId } = $page.params;
	const isObjectEmpty = (objectName) => {
		return Object.keys(objectName).length === 0;
	};
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	$$result.css.add(css);
	{
		{
			if (form?.success) {
				toast.success('Spot claimed!');
			}
			if (form?.success === false) {
				toast.error('Spot has been claimed!');
			}
		}
	}
	$$unsubscribe_page();
	$$unsubscribe_selectedSpot();
	return `${validate_component(Toaster, 'Toaster').$$render($$result, {}, {}, {})}

<main><div class="reserve_container svelte-dmyk2t">${
		isObjectEmpty($selectedSpot) ? `<h1>Spot has been reserved</h1>` : ``
	}

		${
			form?.success
				? `

			${
				$selectedSpot.startDate
					? `claimed a spot for:
				<time>${escape(getCorrectDate($selectedSpot.startDate, dateOptions))}</time> -
				<time>${escape(getCorrectDate($selectedSpot.endDate, dateOptions))}</time>`
					: ``
			}

			${$selectedSpot.location ? `at location: ${escape($selectedSpot.location)}` : ``}

			<a href="${
				escape(PUBLIC_BASE_URL, true) + escape(form?.data.reservation?.icsURL, true)
			}" target="_blank" class="outline svelte-dmyk2t"><span style="vertical-align: middle; margin-left: 4px;" class="svelte-dmyk2t">Add to your own calendar</span></a>

			<button class="svelte-dmyk2t">🎉 CONFETTI! </button>`
				: ``
		}

		${
			form?.success === false
				? `

			<p>Whoops, something went wrong</p>

			${form?.data.reason == 'IM Used' ? `<p>It looks like this spot has been claimed</p>` : ``}

			<a href="${'/reserve/' + escape(spotId, true)}">Try again</a>`
				: ``
		}

		${
			!form?.success && $selectedSpot.startDate
				? `<div class="spot__time svelte-dmyk2t">
				<a class="link svelte-dmyk2t"${add_attribute(
					'href',
					'#',
					0
				)}><svg width="24px" height="16px" viewBox="0 0 24 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Afspraak" transform="translate(-35.000000, -127.000000)" fill="#E7E4EE"><g id="assets/icons/arrow" transform="translate(46.600922, 135.000000) scale(-1, 1) translate(-46.600922, -135.000000) translate(35.000000, 127.000000)"><polygon transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) " points="8.00278293 0 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 0"></polygon></g></g></g></svg></a>
				<h2 class="svelte-dmyk2t">${
					$selectedSpot.startDate
						? `Claiming a spot for:
						<time>${escape(getCorrectDate($selectedSpot.startDate, dateOptions))}</time> -
						<time>${escape(getCorrectDate($selectedSpot.endDate, dateOptions))}</time>`
						: ``
				}

					${$selectedSpot.location ? `at location: ${escape($selectedSpot.location)}` : ``}</h2></div>

			<form method="POST" action="${
				'/reserve/' + escape(spotId, true)
			}"><label for="email" class="svelte-dmyk2t">Email:</label>
				<input type="email" name="email" id="email"${add_attribute(
					'value',
					possibleEmail,
					0
				)} required class="svelte-dmyk2t">

				<label for="name" class="svelte-dmyk2t">Name:</label>
				<input type="text" name="name" id="name"${add_attribute(
					'value',
					possibleName,
					0
				)} required class="svelte-dmyk2t">

				<label for="name" class="svelte-dmyk2t">Leave a comment (optional)</label>
				<textarea id="comment" name="comment" class="svelte-dmyk2t"></textarea>

				<input type="hidden" name="timezone" id="timezone"${add_attribute('value', getTimeZone(), 0)}>

				<button type="submit" class="svelte-dmyk2t">Claim that spot!</button></form>`
				: ``
		}</div>
</main>`;
});
export { Page as default };
