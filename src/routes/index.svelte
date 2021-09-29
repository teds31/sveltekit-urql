<script>
	// urql initialization
	import { initClient } from '@urql/svelte';
	initClient({
		url: 'https://throbbing-field-190014.us-west-2.aws.cloud.dgraph.io/graphql'
	});
	// components
	import BooksList from '$lib/components/BooksList.svelte';
</script>

<h1>Welcome to Books Review</h1>
<BooksList />
<p>
	Visit
	<a href="/authors">Authors</a>
	to learn more about the authors
</p>
