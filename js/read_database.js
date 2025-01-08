"use strict"
async function loadCakes() {
    const response = await fetch("../js/database.json");
    if (!response.ok) {
        throw new Error(`Failed to fetch database.json: ${response.status}`);
    }
    return response.json();
}

function makeBoloBox() {
    let bolo_box = document.createElement('div')
    bolo_box.setAttribute("class", 'bolo-box')
    return bolo_box
}

function makeNewDiv(Attribute = '', value = '', text_node = '') {
    let div = document.createElement('div')
    div.setAttribute(Attribute, value)
    text_node != '' ? div.appendChild(document.createTextNode(text_node)) : null
    return div
}
function createSrcImage(cake_id) {
    const img = document.createElement('img')
    img.setAttribute('src', `img/${cake_id}.jpeg`)
    img.setAttribute('class', 'bolo-imagem')
    return img
}
function makeButton(class_attribue = 'button', id) {
    const button = document.createElement('button')
    button.setAttribute('class', class_attribue)
    button.appendChild(document.createTextNode(`Pedir #${id}`))
    return button
}

function passToWhatsAppUniversalLink(message, number_people) {
    const universalLink = "https://wa.me/"
    const text_initializer = "?text="
    let message_encoded = encodeURI(message)
    message_encoded = message_encoded.replace('%20#', "%20%23")
    const complete_link = universalLink + number_people + text_initializer + message_encoded
    return complete_link
}
function makeAfull(message) {
    const a = document.createElement('a')
    const WhatsApp_link = passToWhatsAppUniversalLink(message, "14997100777")
    a.setAttribute('class', 'full')
    a.setAttribute('href', WhatsApp_link)
    return a
}
function makeNewMessage(cake_id) {
    cake_id = (cake_id.split('-'))[1]
    let message = `Olá Glaucia!!! Peguei como referência o bolo #${cake_id}\n`
    return message
}
async function main() {
    const cakes = await loadCakes();
    const main = document.createElement('main')
    const body = document.querySelector('body')
    const footer = document.querySelector("footer")
    const keys = Object.keys(cakes)
    let cake_secundary_key
    let result
    let cake_fourt_key
    let button
    let a_full
    let message = ''
    let bolo_box = makeBoloBox()
    let div = document.createElement('div')
    keys.forEach((key) => {
        cake_secundary_key = Object.keys(cakes[key])
        message = makeNewMessage(key)
        cake_secundary_key.forEach((item, i) => {
            result = cakes[key][item]
            i == 0 ? bolo_box.appendChild(createSrcImage(key)) : null
            if ((typeof result) == 'object') {
                result = result.join(' | ')
            }
            if (result != '') {
                if (item == 'texto') {
                    div = makeNewDiv('class', `bolo-${item}`, result)
                    button = makeButton('button', key.split('-')[1])
                    bolo_box.appendChild(div)
                    bolo_box.appendChild(button)
                }
                else {
                    message += (`*${item}*: ${result}\n`)
                }
            }
        })
        console.log(message)
        a_full = makeAfull(message)
        message = ''
        bolo_box.appendChild(a_full)
        main.appendChild(bolo_box)
        bolo_box = makeBoloBox()
    }
    )
    body.insertBefore(main, footer)
}

main()
// console.log(typeof result['massa'])
// console.log(typeof result['decoracao'])