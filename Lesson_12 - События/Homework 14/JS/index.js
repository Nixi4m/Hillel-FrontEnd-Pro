let array = [1, 2, [3.1, 3.2, 3.3], 4, 5, [6.1, 6.2, 6.3], 7, 8];
 
listGenerator(array);
 
function listGenerator(arr) {
    let total = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            total += `<li>${arr[i]}</li>`;
        }else{
            total += "<li><ul>";
            for (let j = 0; j < arr[i].length; j++) {
                total += `<li>${arr[i][j]}</li>`;
            }
            total += "</ul></li>";
        }
    }
    total += "</ul>";
    pablo.innerHTML = total;
}
 
listGenerator2(array);
 
function listGenerator2(arr) {
    let mainUl = document.createElement("ul");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        if (!Array.isArray(arr[i])) {
            mainUl.append(li)
            li.textContent = arr[i]
        }else{
            let ul = document.createElement("ul")
            li.append(ul)
            for (let j = 0; j < arr[i].length; j++) {
                let subLi = document.createElement("li")
                ul.append(subLi)
                subLi.textContent = arr[i][j]
            }
            mainUl.append(li)
        }
    }
    pablo2.append(mainUl)
}