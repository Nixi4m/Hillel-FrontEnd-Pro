let getLink;

document.querySelector('#linkChange').addEventListener('click',() => {
     getLink = prompt('Введите свою ссылку')
})

document.querySelector('#linkChange2').addEventListener('click',() => {
    let linkSplit = getLink.split(':')
    if (linkSplit[0] == 'http'){
        linkSplit.shift()
        linkSplit.unshift('https:')
        location.href = (linkSplit.join(''))
    }else{
        location.href = getLink;
    }   
})