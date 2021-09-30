<script>
	// urql initialization
	import { initClient } from '@urql/svelte';
	initClient({
		url: 'https://throbbing-field-190014.us-west-2.aws.cloud.dgraph.io/graphql'
	});
	// components
	import AuthorsList from '$lib/components/AuthorsList.svelte';
</script>

Go Back to <a href="/">Home</a>
<h1>authors page</h1>
<AuthorsList />
