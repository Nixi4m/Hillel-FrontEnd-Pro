
function randomizer() {
  let random = (Math.floor(Math.random() * 9)+1);
  return `<img src=".\\image\\${random}.jpg" width=700 height= 700>`
}

document.getElementById('randomImg').innerHTML = randomizer()