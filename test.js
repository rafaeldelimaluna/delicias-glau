const body = document.querySelector('body')

const table_node = document.createElement('table')
const tr_node = document.createElement('tr')
const th_node = document.createElement('th')
const td_node = document.createElement('td')
const text_node_th = document.createTextNode('EU SOU UM TH')
const text_node_td = document.createTextNode('EU SOU UM TD')

th_node.appendChild(text_node_th)
td_node.appendChild(text_node_td)


tr_node.appendChild(th_node)
tr_node.appendChild(td_node)
table_node.appendChild(tr_node)
body.appendChild(table_node)