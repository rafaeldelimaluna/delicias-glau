let text = "https://wa.me/14997100777?text=Ol%C3%A1%20Glaucia!!!%20Peguei%20como%20referencia%20o%20bolo%231%0Atipo:%20torta%0Arecheio:%20cream%20cheese%20%7C%20geleia%20de%20frutas%20vermelhas%0A"

// %20#
// #23
text.replace('%20#', "%23")
let text_encoded = encodeURI(text)
let text_decoded = decodeURI(text)
console.log(text_decoded)