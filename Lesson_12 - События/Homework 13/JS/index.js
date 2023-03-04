linkChange.addEventListener('click',() => {
    location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
})

linkChange2.addEventListener('click',() => {
    location.href='https://www.youtube.com/watch?v=GtL1huin9EE'
})

let link = 'http://www.youtube.com/watch?v=dQw4w9WgXcQ'

function httpsCheck (link) {
    let linkSplit = link.split(':')
    if (linkSplit[0] == 'http'){
        linkSplit.shift()
        linkSplit.unshift('https:')
        console.log(linkSplit.join(''))
    }else{
        console.log(`И так сойдёт ${link}`)
    }   
}

httpsCheck(link)
