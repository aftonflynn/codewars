// APR 3, 2023 //
/////// Detect Pangram ///////
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  string.toLowerCase().split("")
    .forEach((letter, i) => {
      if (alphabet.includes(letter) && !arr.includes(letter)) {
        arr.push(letter);
      }
    });

  return (arr.length === 26) ? true : false;
}


// MAR 31, 2023 //
/////// Disemvowel Trolls ///////
/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/
function disemvowel(str) {
  const vowels = 'aeiouAEIOU'
  return str.split("")
    .filter((c) => !vowels.includes(c))
    .join("")
}


// MAR 26, 2023 //
/////// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes ///////
/*
Objective

Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

You are then given a working class Labrador as your initial code.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}

Shorten it so that it meets the strict character count requirements for this Kata.

Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D
*/

class Labrador extends Dog {
  constructor(name,age,gender,master,species,legs,size,loyal) {
    super(name,age,gender)
    this.master = master;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.loyal = true;
  }
}

/////// Parse nice int from char problem ///////
/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

const getAge = parseInt


// MAR 25, 2023 //
/////// JADEN CASE STRINGS ///////
/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  return this.split(" ")
              .map((word,i) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(" ")
};
