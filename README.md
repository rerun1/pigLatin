
#### Pig Latin
#### _**by Suzi Rubino — August 29, 2019**_
<br>

## Description


How Pig Latin Works
First, here are the rules of Pig Latin:

For words beginning with a vowel, add "way" to the end.

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

For words beginning with "y", treat "y" as a consonant.

Instructions
Before writing any code, make a list of specs detailing each behavior your program will have. Start with the simplest possible behavior, and slowly move up in complexity. To get you started, the first two specs are provided below.

Have at least two other pairs check your specs before you begin coding. Ensure that each possible behavior is represented by a spec, and that they are ordered from simplest to most complex.

Place your specs (and their example inputs and outputs) in your project's README.

Create a basic user interface that allows your application to accept user input, and display output. This will allow us to manually test each spec.

Slowly add business logic. Begin by focusing on the behavior outlined in your first, most simple spec. Implement the least amount of logic necessary to create this behavior.

Manually test this behaviour by inputting the example input described by the spec into your application, and confirm you receive the correct output.

Once behavior outlined by the first spec is successfully implemented, repeat steps 5 - 7 for each subsequent spec. Do not move onto the next spec until the previous one passes.

Helpful Hints
When you get to consonants, don't try to solve it all at once. Instead, start with an example of a word that only has one consonant; then a word with two consonants; then a word with three; and then tackle the exceptions to the rule, like "qu" and "y". Once your application can successfully translate single words, work on translating entire sentences.

Although you're welcome to solve the problem however you'd like, there are a few methods that would be handy:

String.prototype.slice()
String.prototype.includes()
String.prototype.indexOf()
Take a look at this and other documentation to gather the tools you'll need before you try to fulfill your specs.

Specs
To get you started, below are the first two "plain English" specs:

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3
The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

<br>

## Objectives
- [] JavaScript business logic and user interface logic are separate.
- [] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [] Application implements a for loop and works as expected.
All previous objectives have been met.
- [] Project is broken down into "plain English" specs, listed in README.
- [] Project is in a presentable, portfolio-quality state.
- [] Practice styling with imagery

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/factorial/master/img/screenShot8-20-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
 There are no known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
