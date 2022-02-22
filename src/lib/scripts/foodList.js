// Soups
export const pizzaList = [
	{
		name: 'Pizza Margaritta',
		desc: 'Wood oven baked pizza with tomato, topped with basil seasoning ',
		price: 700,
		src: '/pizzas/pizza1.jpg'
	},
	{
		name: 'Classic Ziwa Burger',
		desc: 'Fresh soft bun, meat patty, cheese with tomato, lettuce, onion, pickles with mayonnaise sauce',
		price: 800,
		src: '/pizzas/burger.jpg'
	},
	{
		name: 'Al Ragu',
		desc: 'Wood oven baked Pizza with tomato, topped with minced beef',
		price: 800,
		src: '/pizzas/pizza2.jpg'
	},
	{
		name: 'Pizza Hawaii',
		desc: 'Wood oven baked pizza topped with beef bacon and juicy pineapple ',
		price: 850,
		src: '/pizzas/pizza3.jpg'
	},
	{
		name: 'BBQ Chicken Pizza',
		desc: 'Wood oven baked pizza with tomato and topped with chicken and oregano',
		price: 900,
		src: '/pizzas/pizza4.jpg'
	},
	{
		name: 'Pizza Vegeteriana',
		desc: 'Wood oven baked pizza, topped with mushrooms, mixed peppers, onions and olives',
		price: 900,
		src: '/pizzas/pizza5.jpg'
	},
	{
		name: 'Festi Di Carne',
		desc: 'Wood oven baked pizza with topped with meat balls, beef bacon and beef sausages ',
		price: 1000,
		src: '/pizzas/pizza6.jpg'
	}
];

export const soupsList = [
	{
		name: 'Vegetable Soup',
		desc: 'Clear healthy soup made up of all type of vegetables',
		price: 500,
		src: '/soups/veggie.jpg'
	},
	{
		name: 'Tomato and Basil soup',
		desc: 'Fresh creamy tomatoes, topped with fresh basil',
		price: 500,
		src: '/soups/basil.jpg'
	},
	{
		name: 'Shredded Beef Soup with veggies',
		desc: 'A delicious blend of sliced beef mixed in vegetables',
		price: 550,
		src: '/soups/shredded-beef.jpg'
	},
	{
		name: 'Shredded Chicken Soup with veggies',
		desc: 'A delicious thinly blend of sliced chicken mixed in vegetables',
		price: 550,
		src: '/soups/shredded-chicken.jpg'
	},
	{
		name: 'Mushroom Soup',
		desc: 'Fresh mushroom cooked in creamy sauce',
		price: 600,
		src: '/soups/mushroom-soup.jpg'
	},
	{
		name: 'Sweet Corn Soup',
		desc: 'Fresh corn kernels cooked in fresh cooking cream, spices and herbs',
		price: 750,
		src: '/soups/corn-soup.jpg'
	},
	{
		name: 'Feta Cheese Salad',
		desc: 'Hydrating fresh tomatoes, lettuce, onions and feta cheese dressed with olives, salt, black pepper and drizzled with oi',
		price: 650,
		src: '/soups/feta-cheese.jpg'
	},
	{
		name: 'Goat Cheese and Beetroot Salad',
		desc: 'Creamy goat cheese, sliced beetroot topped with balsamic vinegar ',
		price: 750,
		src: '/soups/beet-goat.jpg'
	}
];
export const fishList = [
	{
		name: 'Calamari Rings',
		desc: 'Deep fried calamari rings served with a garlic mayonnaise or light soy sauce dip',
		price: 550,
		src: '/fish/calamari.jpg'
	},
	{
		name: 'Fish Skewers',
		desc: 'Well marinated grilled fish served in skewers',
		price: 750,
		src: '/fish/skewers.jpg'
	},
	{
		name: 'Fresh Oyster',
		desc: 'Fresh tasty oyster',
		price: 1200,
		src: '/fish/oysters.jpg'
	},
	{
		name: 'Grilled Garlic Prawns',
		desc: 'Marinated grilled prawns in garlic sauce',
		price: 1450,
		src: '/fish/garlic.jpg'
	},
	{
		name: 'Pan Grilled Fish',
		desc: 'Pan grilled fish fillet with lemon butter sauce aside',
		price: 1250,
		src: '/fish/pan.jpg'
	},
	{
		name: 'Surf and Turf Lobster',
		desc: 'Combination of deliciously well blend of grilled lobster with meat ',
		price: 1800,
		src: '/fish/turf-lobster.jpg'
	},
	{
		name: 'Surf and Turf Prawn',
		desc: 'Combination of deliciously well blend of grilled prawns and meat ',
		price: 1800,
		src: '/fish/turf-prawn.jpg'
	},
	{
		name: 'Lobster Classic',
		desc: 'Freshly bought from coast of well grilled lobster served with a garlic sauce',
		price: 3250,
		src: '/fish/lobster.jpg'
	}
];

export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});
