<script>
	import '$lib/styles/order.css';
	import MealCard from '$lib/components/MealCard.svelte';
	import { fishList, soupsList, pizzaList } from '$lib/scripts/foodList';
</script>

<main>
	<section class="category important">
		<span class="heading">Soups and Salads</span>

		<div class="list">
			{#each soupsList as item}
				<MealCard {...item} />
			{/each}
		</div>
	</section>
	<section class="category">
		<span class="heading">Pizza</span>
		<div class="list">
			{#each pizzaList as item, idx}
				<MealCard {...item} />
			{/each}
		</div>
	</section>
	<section class="category important">
		<span class="heading">Sea Food</span>
		<div class="list">
			{#each fishList as item}
				<MealCard {...item} />
			{/each}
		</div>
	</section>
</main>

<style>
	main {
		margin-bottom: 0;
	}
</style>
