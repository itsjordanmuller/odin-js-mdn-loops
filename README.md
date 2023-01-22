# MDN Web Docs - Looping Code Section
This repository is meant to host my Active Learning practice tasks for the MDN Looping Code section
This section was recommended to me by The Odin Project.

## Active learning: Launch countdown

- [x] Exercise Complete

 In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:

- Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
- For each iteration, create a new paragraph and append it to the output div, which we've selected using const output = document.querySelector('.output');. In comments, we've provided you with three code lines that need to be used somewhere inside the loop:
    - const para = document.createElement('p'); — creates a new paragraph.
    - output.appendChild(para); — appends the paragraph to the output div
    - para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.
- Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple para.textContent = lines):
    - If the number is 10, print "Countdown 10" to the paragraph.
    - If the number is 0, print "Blast off!" to the paragraph.
    - For any other number, print just the number to the paragraph.
- Remember to include an iterator! However, in this example we are counting down after each iteration, not up, so you don't want i++ — how do you iterate downwards?

## Active learning: Filling in a guest list

In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

- Write a loop that will iterate through the people array.
- During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
    - If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
    - If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.

## For More Info, Reference the Below Repository:
[itsjordanmuller/odin-js-mdn-learning-area/javascript/building-blocks/tasks/loops](https://github.com/itsjordanmuller/odin-js-mdn-learning-area)