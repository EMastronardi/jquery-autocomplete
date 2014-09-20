#jquery-autocomplete

A simple and lightweight jQuery plugin to add autocomplete feature to inputs, as in line prediction based in an array of words.

##Parameters


##Use
-startChar: a char to mark the start of the search. Default: @
-words: the array of words that the plugin will use. Default:  arnet.com.ar','ciudad.com.ar','fibertel.com.ar','gmail.com','hotmail.com','live.com','live.com.ar','speedy.com.ar','yahoo.com','yahoo.com.ar'
-onComplete: to give the plugin a callback function

**Basic example**
```
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
```
**Passing a callback function**
````javascript
$("#foo").autocomplete({onComplete: function(){alert('bar');}});
````