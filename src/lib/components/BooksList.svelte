<script>
	import { operationStore, query } from '@urql/svelte';
	export const books = operationStore(
		`
    {
    queryBook {
      id
      name
      genre
      author {
        name
      }
    }
    }
    `
	);
	query(books);
</script>

<div>
	{#if $books.fetching}
		<h2>Loading...</h2>
	{:else if $books.error}
		<h2>Oh NO Vallin!</h2>
	{:else if !$books.data}
		<h2>No books</h2>
	{:else}
		<div class="grid-container">
			{#each $books.data.queryBook as book}
				<div class="grid-item">
					<div>Name - {book.name}</div>
					<div>Author - {book.author.name}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: auto auto auto;
		background-color: #2196f3;
		padding: 10px;
	}
	.grid-item {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(0, 0, 0, 0.8);
		padding: 20px;
		font-size: 30px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		margin: 8px;
	}
	.grid-item:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
</style>
