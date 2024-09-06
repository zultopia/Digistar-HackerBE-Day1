// index.js

const axios = require('axios');
const { Command } = require('commander');
const express = require('express');
const _ = require('lodash');
const moment = require('moment');

const languages = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  jp: "こんにちは",
  cn: "你好"
};

function greet(name, options = {}) {
  const { lang = 'en', capitalize = false, punctuation = '!' } = options;
  const greeting = languages[lang] || languages['en'];
  let message = `${greeting}, ${name}${punctuation}`;
  if (capitalize) {
    message = message.toUpperCase();
  }
  return message;
}

// Using lodash to capitalize names
function greetWithLodash(name, options = {}) {
  name = _.capitalize(name);
  return greet(name, options);
}

// Using moment to log the current time of greeting
function greetWithTime(name, options = {}) {
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  const greeting = greet(name, options);
  return `${greeting} The current time is ${time}. Welcome to my awesome package.`;
}

// Using axios to fetch a random joke (for demonstration purposes)
async function greetWithJoke(name, options = {}) {
  const joke = await axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.data.setup + ' - ' + response.data.punchline)
    .catch(() => 'Sorry, no joke available.');
  
  return `${greet(name, options)} Here's a joke for you: ${joke}. Welcome to my awesome package.`;
}

module.exports = { greet, greetWithLodash, greetWithTime, greetWithJoke };