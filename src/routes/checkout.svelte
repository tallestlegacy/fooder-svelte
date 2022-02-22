<script>
	import { cart, pending } from '$lib/store';
	import { formatter } from '$lib/scripts/foodList';

	let isPopping = false;

	const makeOrder = () => {
		if ($cart.length > 0) {
			pending.set([...$pending, ...$cart]);
			cart.set([]);
		}

		isPopping = false;
	};

	$: total = (() => {
		let tot = 0;
		$cart.map((item) => {
			tot += item.price;
		});
		return tot;
	})();
</script>

<main>
	{#if $cart.length > 0}
		<div class="cart">
			<span class="heading">Cart {isPopping}</span>
			<div class="items">
				{#each $cart as item}
					<div class="item">
						<span class="name">{item.name}</span>
						<span class="price">{formatter.format(item.price / 100)}</span>
					</div>
				{/each}
			</div>
			<div>
				<button
					on:click={() => {
						isPopping = true;
					}}>Make Order</button
				>
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
						<span class="price">{formatter.format(item.price / 100)}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if $pending.length == 0 && $cart.length == 0}
		<span class="heading important">Hurry and Order</span>
	{/if}
	{#if isPopping}
		<div class="ispopping">
			<form on:submit|preventDefault={makeOrder}>
				<div class="heading important">Pay with mobile money</div>

				<div class="inputs">
					<span><label for="tel">Tel</label></span>
					<span><input type="tel" required /></span>
					<span>Amount : {formatter.format(total / 100)}</span>
				</div>
				<div class="buttons">
					<button type="submit">Pay</button>
					<button
						on:click={() => {
							isPopping = false;
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 800px;
		margin: 60px auto;
	}
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

	.ispopping {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 3;

		display: grid;
		place-items: center;
		background-color: #000b;
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(3px);
	}

	form {
		background-color: #fff;
		flex-direction: column;
		max-width: fit-content;
		overflow: hidden;
		border-radius: 4px;
	}

	input {
		border: none;
		outline: 2px solid #0003;
	}

	form .buttons {
		display: flex;
		gap: 12px;
		padding: 12px;
	}

	.inputs {
		display: flex;

		grid-template-columns: auto auto;
		gap: 24px;
		padding: 24px 12px;
	}
</style>
