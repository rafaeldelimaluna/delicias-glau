const tr_node = document.createElement('tr')
const a = [1, 2, 3, 4, 5, 56, 6, 7, 4, 34, 23, 2, 2, 4, 45, 5, 6, 4, 2, 24, 14134]

a.forEach((el) => {
    const text_node = document.createTextNode(el)
    const td_node = document.createElement('td')
    td_node.appendChild(text_node)
    tr_node.appendChild(td_node)
})
console.log(tr_node)