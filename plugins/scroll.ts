export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('scroll', {
		mounted(el: HTMLElement, binding) {
			let f = function (evt: unknown) {
				if (binding.value(evt, el)) {
					window.removeEventListener('scroll', f);
				}
			};
			window.addEventListener('scroll', f);
		}
	});
});
