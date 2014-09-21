#jquery-autocomplete Plugin

A simple and lightweight jQuery plugin to add autocomplete feature to inputs, as in line prediction based in an array of words.

##Settings

| Property        | Default              | Details  |
| ---------------- |:-------------------------:|-----------------------------|
| startChar      | @ | A char to mark the start of the search |
| words      | 'gmail.com', 'hotmail.com', 'live.com' and more | Array of words that the plugin will use |
| onComplete | null | Callback that fires right after prediction is made |
| caseSensitive | true | Case sensitive behaviour |

**Basic example**
````html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<input type="text" id="autocompleteNames"/>
	<input type="text" id="autocompleteMailDomains"/>
	<script>
		$("#autocompleteNames").autocomplete({
			startChar:'',
			words: ['Jack', 'Thomas', 'Joshua', 'William', 'Daniel', 'Matthew', 'James', 'Joseph', 'Harry', 'Samuel']

		});
		$("#autocompleteMailDomains").autocomplete();
	</script>
	<script src="js/jquery-2.1.0.min.js"></script>
	<script src="js/jquery.autocomplete-inline.min.js"></script>

</body>
</html>
````
**Passing a callback function**
````javascript
$("#foo").autocomplete({onComplete: function(){alert('bar');}});
````
