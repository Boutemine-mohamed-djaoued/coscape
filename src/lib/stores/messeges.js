import { writable } from "svelte/store";


export let messeges = writable([
  {
    owner: "bot",
    text: "Hello Founder, How can i assist you today?",
  },
  {
    owner: "you",
    text: "I want some help to check my idea",
  }
])