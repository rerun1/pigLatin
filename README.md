
#### Pig Latin
#### _**by Suzi Rubino — August 29, 2019**_
<br>

## Description

Behavior — Plain English:	Input	/ Output

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels:	3 =	3

The program adds “ay” to single-letter word I:	i	= iay

The program adds “way” to the single letter word a:	a =	aay

The program recognizes multiple-letter word beginning with a vowel and adds “way” to the end of the word:	end =	endway

The program recognizes multiple words in a sentence that begin with a vowel and adds “way” to the end of each word:	end of	= endway ofway

The program recognizes a word beginning with y, treats the y as a consonant and moves it to the end of the word, adding "ay":	yellow = ellowyay

The program recognizes a word beginning with one consonant, moves the consonant to the end, and adds "ay":	talk =	alktay

The program recognizes a word beginning with two consonants, moves the consonants to the end, and adds "ay":	blend =	endblay

The program recognizes a word beginning with three consonants, moves the consonants to the end, and adds "ay":	three =	eethray

The program recognizes if the first consonant in a word includes a “q”, then checks for a following “u” and moves both the “q” and the “u” together to the end of the word followed by “ay”:	quiet	= ietquay

The program recognizes if there is a consonant before a “qu” in the beginning of a word and moves the consonant along with the “qu” to the end of the word followed by “ay”:	squeal = ealsquay

The program adds “ay” to single-letter word I and makes sure it stays a capital I, since that would be the only usage of the single-letter word “I”:	I = Iay

The program keeps capitalization in place for one word:	Pig	= igPay

The program keeps capitalization in place for multiple words:	Pig Latin	= igPay atinLay

The the program keeps punctuation in place in single words:	What’s = at’sWhay
The the program keeps punctuation in place for sentences or clauses:	What’s up?	= at’sWhay upway?


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
