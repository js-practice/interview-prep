# Interview Questions

This repo is a place to share interview questions and get some practice with them.


# Contributing

To contribute you need to fork the repo to your own GitHub.

Clone the repo to your local machine.

```sh
git clone https://github.com/YOURUSERNAMEHERE/interview-prep
```

Cut a new feature branch

```sh
git checkout -b BRANCHNAME
```

Create a new folder for your practice problem with the name of the problem
and create a new JavaScript file in that folder.

```sh
fizzBuzz-
  fizzBuzz.js
```

Every JavaScript file should have a comment block at the top explaining the prompt
and the basic function with any arguments that it would take.  Run time examples also
must be provided.  For example:

```sh
# /**
#  * This function takes an argument that is a number and
#  * returns true if that number is a perfect square.
#  *
#  * Examples:
#  *  perfectSquareFinder(25); //true
#  *  perfectSquareFinder(26); //false
#  *
#  *
#  */
#
# var perfectSquareFinder = function(num){
#   //TODO implement solution
# };
```
After you have completed the prompt you should add the new JavaScript file you
created but DO NOT include any previous work on other practice problems.  If you
include other code your pull request will be closed.

```sh
git add NEWPROBLEM
git commit
git push origin BRANCHNAME
```

Create a pull request to the original repo and you are done!
