<script>
	// urql initialization
	import { initClient } from '@urql/svelte';
	initClient({
		url: 'https://throbbing-field-190014.us-west-2.aws.cloud.dgraph.io/graphql'
	});
	// store and query initialization
	import { operationStore, query } from '@urql/svelte';
	const author = operationStore(
		`
    {
      queryAuthor {
        name
        id
        books {
          name
          id
        }
      }
    }
    `
	);
	query(author);
	console.log(author);
</script>

<h4>Back to <a href="/">Home</a></h4>
<br />
<h1>slug page</h1>
