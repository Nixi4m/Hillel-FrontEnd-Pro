let getLink;

document.querySelector('#linkChange').addEventListener('click',() => {
     getLink = prompt('Введите свою ссылку')
})

document.querySelector('#linkChange2').addEventListener('click',() => {
    if (getLink.startsWith('http:') || getLink.startsWith('https:')){
        location.href = getLink; 
    }else{
        location.href = `https://${getLink}`   
    }   
})