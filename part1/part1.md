## 1a:

### var
1. values added: 20
2. final result: 20
   
### let
1. values added: 20
2. error, because when we use let, it has block scope and the variable is inaccessible outside of the if statement

### const
1. Line 9 will not run because an error will occur in line 7. result cannot be modified because it is a const.
2. Line 13 will error because const, similar to let, has block scope and is inaccessible outside of the if statement.

## 1b
1. Line 12 will print 3, because i is declared as a var so it has no block scope and it is 3 because the loop iterates from 0 to 2 and then increments i one more time before breaking the loop.
2. Line 13 prints 150, because the last iteration in the loop sets discountedPrices to 300*(1-0.5).
3. Line 14 prints 150, because 150 * 100 / 100 = 150.
4. The function returns the array [50, 100, 150], because the function just multiplies all of the prices by (1 - discount), rounds it and returns.
5. This will error, because i has block scope of the for loop and once the loop is done, it is inaccessible.
6. This will error, because discountedPrice has block scope and is inaccessible after the for loop.
7. This will print 150, because 150 is the last price calculated from the for loop.
8. This will return the array [50, 100, 150], because although let is used, the block scope is the entire function.
9. This will error because i is not accessible after the for loop is terminated due to block scope.
10. This line will print 3, because the length of the array prices is 3
11. The function returns [50, 100, 150], because although discounted is a const, it is still possible to manipulate it. You just can't reassign it.
    
### Data Types
12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

### Basic Operators & Type Conversion
13. 
    A. '32', because integers map to their exact string represenation, so 2 becomes '2'
    B. 1, '3' gets cast to an integer the arithmetic occurs
    C. 3, null is equivalent to 0
    D. '3null', null becomes the string 'null' and is added to '3'
    E. 4, in arithmetic, true maps to 1
    F. 0, false maps to 0 and null is equivalent to 0
    G. '3undefined', undefined becomes to string 'undefined' and is added to '3'
    H. NaN, because undefined stays as undefined and any arithmetic done with it becomes NaN
14. 
    A. true, 2 is converted to an integer and the comparison occurs
    B. true, since the length of '12' is greater than '2'
    C. true, '2' is cast to an integer and the comparison occurs
    D. false, because === is a strict equality check and the two elements are different types
    E. false, because true maps to 1 and 1 != 2
    F. true, because Boolean(2) is equivalent to true

15. == allows type casting before the comparison, whereas === is a strict comparison and doesn't allow for that.

### Functions
17. The result is the array [2, 4, 6]. Starting at modifyArray, we see that newArr pushes the result of doSomething for each element in our array. doSomething returns 2 times the element, so modifyArray returns an array where each element in our original array is doubled.

### setInterval(), setTimeout(), clearTimeout()
19. The output is 1 4 3 2