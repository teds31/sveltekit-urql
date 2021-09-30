<script>
	import { operationStore, query } from '@urql/svelte';
	export const authors = operationStore(
		`
    {
      queryAuthor {
        id
        name
      }
    }
    `
	);
	query(authors);
	console.log(authors);
</script>

<div>
	{#if $authors.fetching}
		<h2>Loading...</h2>
	{:else if $authors.error}
		<h2>Oh NO Vallin!</h2>
	{:else if !$authors.data}
		<h2>No books</h2>
	{:else}
		{#each $authors.data.queryAuthor as author}
			<a href="/authors/{author.id}">
				<h3>{author.name}</h3>
			</a>
		{/each}
	{/if}
</div>
