<script>
	export let name = '';
	export let desc = '';
	export let price = '';
	export let src = '';
	import { cart } from '$lib/store';
	import { formatter } from '$lib/scripts/foodList';
	const dsrc = `/images${src}`;

	$: count = $cart.filter((item) => item.name === name).length;

	const addItem = () => {
		cart.set([...$cart, { name, price, src }]);
	};
</script>

<div class="food-item">
	<img src={dsrc} alt="name" />
	<span class="name">
		{name}
	</span>
	<span class="description">
		{desc}
	</span>
	<span class="price">
		{formatter.format(price / 100)}
	</span>
	<button on:click={addItem} class={count > 0 ? 'full' : ''}
		>{#if count == 0}+{:else}{count}{/if}</button
	>
</div>

<style>
	button {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: white;
		border-radius: 12px 0 0 0;
	}

	button.full {
		background-color: var(--primary-color);
		color: white;
	}
</style>
