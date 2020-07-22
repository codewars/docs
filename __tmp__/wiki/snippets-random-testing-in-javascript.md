Unlike Haskell, JavaScript doesn't provide an automatic framework like QuickCheck, although there is an [implementation for node](https://github.com/mcandre/node-quickcheck). Until the Codewars plattform provides an built-in way, you can use the following functions to create random tests in JavaScript.

Note that both expect your solution to be pure (don't change the argument, for example if it's an object or an array) and cannot check side-effects, so you probably edit the functions for your needs. Also note that `randomAssertSimilar` is rather verbose.

`generator` should return an array.

Feel free to edit this page for any improvements.

**NOTE:** The functions haven't been tested thoroughly. Use them with care and feel free to edit them if they contain any errors.

```javascript
/**
 * @brief Tests a user defined function against a reference function.
 * @param generator is a generator for random arguments, it must return an array
 * @param userSolution is the solution provided by the user
 * @param referenceSolution is the solution provided by the original kata author
 * @param tests is the number of tests (optional)
 *
 * The `referenceSolution` should be pure, it shouldn't modify it's arguments, 
 * since `userSolution` will work on the same array afterwards.
 *
 * The values are compared via equality (===), and the number of shown tests is
 * limited to three. 
*/
var randomAssertEquals = function(generator, userSolution, referenceSolution, tests){
	tests = tests || 100;
	var i = 0, user, reference, values;
	while( tests --> 0){
		values = generator();
		reference = referenceSolution.apply(this, values);
		user      = userSolution.apply(this,      values);
		if(i++ < 3){
			Test.assertEquals(user, reference, "didn't work on the following argument array: " + values);
		} else if(reference !== user){
			Test.assertEquals(user, reference, "didn't work on the following argument array: " + values);
		}
	}
}

/**
 * @brief Tests a user defined function against a reference function.
 * @param generator is a generator for random arguments, it must return an array
 * @param userSolution is the solution provided by the user
 * @param referenceSolution is the solution provided by the original kata author
 * @param tests is the number of tests (optional)
 *
 * The `referenceSolution` should be pure, it shouldn't modify it's arguments, 
 * since `userSolution` will work on the same array afterwards.
 *
 * The values are compared via assertSimilar.
*/
var randomAssertSimilar = function(generator, userSolution, referenceSolution, tests){
	tests = tests || 100;
	var user, reference, values;
	while( tests --> 0){
		values = generator();
		reference = referenceSolution.apply(this, values);
		user      = userSolution.apply(this,      values);		
		Test.assertSimilar(user, reference, "didn't work on the following argument array: " + values);		
	}
}
```