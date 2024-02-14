function makeMessage() {
    const keys_pt = Object.keys(result_portuguese)
    let message = 'Olá Glaucia!!!!\nGostaria de encomendar um bolo, deste jeitinho:'
    keys_pt.forEach((key) => {
        if (result_portuguese[key].length != 0) {
            message += `\n*${key.toUpperCase()}*: `
            result_portuguese[key].forEach((item, i) => {
                i == 0 ? message += item : message += ` | ${item}`
            })
        }
    })
    const message_encoded = encodeURI(message)
    return message_encoded
}
function passToWhatsAppUniversalLink(message_encoded, number_people) {
    const universalLink = "https://wa.me/"
    const text_initializer = "?text="
    const complete_link = universalLink + number_people + text_initializer + message_encoded
    return complete_link
}

function setUniversalLinkWaIn_send_message() {
    const send_message = document.getElementById('send-message')
    const message_encoded = makeMessage()
    const link = passToWhatsAppUniversalLink(message_encoded, "14997100777")
    send_message.setAttribute('href', link)
}