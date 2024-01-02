
const mario = document.querySelector('.mario');
const pipe = document.querySelector('pipe');



const  jump = () => {
  mario.classList.add('jump');

setTimeout(() => {
  mario.classList.remove('jump');
},500);
}

const Loop = setInterval(() => {

const pipePosition =  pipe.offsetLefet;
console. log(pepiPosition)

}, 10);

  

document.addEventListener('keydown', jump);