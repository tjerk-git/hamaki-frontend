import {
	c as create_ssr_component,
	b as add_attribute,
	a as escape,
	e as each,
	v as validate_component
} from '../../../chunks/index3.js';
import { g as getCorrectDate } from '../../../chunks/helpers.js';
import { E as ErrorMessage } from '../../../chunks/ErrorMessage.js';
const Spot_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: 'a.svelte-19cmyqy.svelte-19cmyqy{background:#e7e4ee;padding:1rem;color:var(--theme-accent);text-decoration:none;border-radius:15px;cursor:pointer;display:block;display:flex;align-items:center;font-size:20pt;margin-bottom:30px;font-family:Inter}a.svelte-19cmyqy span.svelte-19cmyqy:last-child{margin-left:auto}.location.svelte-19cmyqy.svelte-19cmyqy{color:grey;font-size:1rem}.visitor.svelte-19cmyqy.svelte-19cmyqy{color:grey;font-size:1rem;margin-left:1rem}time.svelte-19cmyqy.svelte-19cmyqy:last-of-type{margin-right:1rem}svg.svelte-19cmyqy.svelte-19cmyqy{fill:var(--theme-accent);margin-right:20px}.reserved.svelte-19cmyqy.svelte-19cmyqy{opacity:0.4}',
	map: null
};
const Spot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const dateOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};
	let { spot } = $$props;
	let { calendar } = $$props;
	const getUrl = (spot2) => {
		if (isReserved(spot2)) {
			return '';
		} else {
			return `/reserve/${spot2.spotId}`;
		}
	};
	const isReserved = (spot2) => {
		if (spot2.isReserved) {
			return true;
		}
		const spotDate = new Date(spot2.startDate);
		const currentDate = /* @__PURE__ */ new Date();
		const diff = (spotDate - currentDate) / 6e4;
		const roundedDiff = Math.round(diff);
		let minutes = 0;
		if (calendar.allowReservationUpUntilMinutesBefore > 0) {
			minutes = calendar.allowReservationUpUntilMinutesBefore;
		}
		if (roundedDiff <= minutes) {
			return true;
		} else {
			return false;
		}
	};
	if ($$props.spot === void 0 && $$bindings.spot && spot !== void 0) $$bindings.spot(spot);
	if ($$props.calendar === void 0 && $$bindings.calendar && calendar !== void 0)
		$$bindings.calendar(calendar);
	$$result.css.add(css$1);
	return `<a${add_attribute('href', getUrl(spot), 0)} class="${[
		'svelte-19cmyqy',
		isReserved(spot) ? 'reserved' : ''
	]
		.join(' ')
		.trim()}">${
		isReserved(spot)
			? `${
					spot.visitorEmail
						? `<span class="visitor svelte-19cmyqy">Email: ${escape(spot.visitorEmail)}</span>`
						: ``
			  }
	${
		spot.visitorName
			? `<span class="visitor svelte-19cmyqy">Name: ${escape(spot.visitorName)}</span>`
			: ``
	}
		
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-19cmyqy"><path d="M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z"></path></svg>`
			: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-19cmyqy"><path d="M12 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v3h2v-3c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-4v14h18v-14h-12zm10 12h-14v-10h14v10z"></path></svg>`
	}

	<time class="svelte-19cmyqy">${escape(getCorrectDate(spot.startDate, dateOptions))}</time>
	-
	<time class="svelte-19cmyqy">${escape(getCorrectDate(spot.endDate, dateOptions))}</time>

	${spot.location ? `<span class="location svelte-19cmyqy">${escape(spot.location)}</span>` : ``}



	${
		!isReserved(spot)
			? `<span class="take-spot svelte-19cmyqy">
			<svg width="24px" height="16px" viewBox="0 0 24 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svelte-19cmyqy"><title>assets/icons/arrow</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="assets/icons/arrow" fill="grey"><polygon transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) " points="8.00278293 3.55271368e-15 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 3.55271368e-15"></polygon></g></g></svg></span>`
			: ``
	}
</a>`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.groupedSpots.svelte-16uh2pq{margin-bottom:20px}h2.svelte-16uh2pq{margin-bottom:20px}#description.svelte-16uh2pq{margin-top:2rem;margin-bottom:2rem;background-color:white;color:black;padding:1rem;border-radius:10px}.callout.svelte-16uh2pq{background-color:rgb(234, 234, 234);color:black;padding:1rem;border-radius:5px;display:block;margin-top:1rem;margin-bottom:1rem}#forgot.svelte-16uh2pq{background-color:var(--theme-accent);color:var(--theme-text);padding:1rem;border-radius:10px;text-decoration:none;display:inline-block}#waitinglist.svelte-16uh2pq{background-color:white;color:black;padding:1rem;margin-bottom:1rem;border-radius:10px;text-decoration:none;display:inline-block}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	return `<main>${
		data.calendar
			? `${
					data.calendar.description
						? `<p id="description" class="svelte-16uh2pq">This is the calendar for: ${escape(
								data.calendar.name
						  )}

				<span class="callout svelte-16uh2pq">${escape(data.calendar.description)}</span>

				<a id="forgot" href="${
					'/forgot/' + escape(data.calendar.url, true)
				}" class="svelte-16uh2pq">😅 Forgot my appointment</a></p>`
						: ``
			  }

		${data.groupedSpots.length === 0 ? `<h1>Whoa there, no spots available</h1>` : ``}

		${each(data.groupedSpots, (group) => {
			return `<h2 class="svelte-16uh2pq">${escape(getCorrectDate(group.day, dateOptions))}</h2>

			${each(group.spots, (spot) => {
				return `<div class="groupedSpots svelte-16uh2pq">${validate_component(
					Spot,
					'SpotComponent'
				).$$render($$result, { spot, calendar: data.calendar }, {}, {})}
				</div>`;
			})}

			${
				group.spots.every((spot) => spot.isReserved)
					? `<a href="${
							'/waitinglist/' + escape(data.calendar.url, true)
					  }" id="waitinglist" class="svelte-16uh2pq">Put me on the waitinglist 📋</a>`
					: ``
			}`;
		})}`
			: `${validate_component(ErrorMessage, 'ErrorMessage').$$render(
					$$result,
					{ message: 'No calendar can be found...' },
					{},
					{}
			  )}`
	}
</main>`;
});
export { Page as default };
