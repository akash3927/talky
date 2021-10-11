/** @format */

const socket = io('http://localhost:8000');

const form = document.getElementById('send');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
