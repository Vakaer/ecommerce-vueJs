<template>
	<div class="flex items-stretch space-x-6 border border-black bg-white">
		<div class="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
			<span>All categorie</span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
		
		<div class="flex h-full p-4 w-80 rounded-lg">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 opacity-30"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<input class="outline-none" type="text" placeholder="What do you need?" />
		</div>

		<div
			class="bg-primary flex items-center max-h-96 py-3 px-5 text-white font-semibold hover:shadow-lg transition duration-3000 cursor-pointer"
		>
			<span>Search</span>
		</div>
	</div>

</template>

<script>
export default {
	name: "SearchBar",
};
</script>
