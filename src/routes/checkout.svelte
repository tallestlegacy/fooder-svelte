<script>
	import { cart, pending } from '$lib/store';
	import { formatter } from '$lib/scripts/foodList';

	const makeOrder = () => {
		if ($cart.length > 0) {
			pending.set([...$pending, ...$cart]);
			cart.set([]);
		}
	};
</script>

<main>
	{#if $cart.length > 0}
		<div class="cart">
			<span class="heading">Cart</span>
			<div class="items">
				{#each $cart as item}
					<div class="item">
						<span class="name">{item.name}</span>
						<span class="price">{formatter.format(item.price / 100)}</span>
					</div>
				{/each}
			</div>
			<div>
				<button on:click={makeOrder}>Make Order</button>
				<button
					on:click={() => {
						cart.set([]);
					}}>Clear Cart</button
				>
			</div>
		</div>
	{/if}

	{#if $pending.length > 0}
		<div class="cart">
			<span class="heading">Pending Orders</span>
			<div class="items">
				{#each $pending as item, idx}
					<div class="item">
						<span class="name">{item.name}</span>
						<span class="price">{formatter.format(item.price)}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if $pending.length == 0 && $cart.length == 0}
		<span class="heading important">Hurry and Order</span>
	{/if}
</main>

<style>
	.cart {
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.items {
		display: grid;
		gap: 8px;
	}
	.item {
		background-color: white;
		box-shadow: 0 2px 12px -5px #0003;
		border-radius: 4px;
		display: flex;
		align-items: center;
	}
	.item span {
		padding: 8px;
	}
	.price {
		margin-left: auto;
	}

	button {
		max-width: fit-content;
	}
	.important {
		display: flex;
		width: 100%;
	}
</style>
