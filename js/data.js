const buttons_data = {
    dough:
        [
            { html: "Chocolate", Attribute: { content: "Chocolate", code: "0" }, img: "icons/chocolate-bar.svg" },
            { html: "Baunilha", Attribute: { content: "Baunilha", code: "1" }, img: "icons/vanilla-flower.svg" },
            { html: "Baunilha c/raspas", Attribute: { content: "Baunilha c/raspas", code: "2" }, img: ["icons/vanilla-flower.svg", "icons/orange.svg"] },
            { html: "Baunilha c/nozes", Attribute: { content: "Baunilha c/nozes", code: "3" }, img: ["icons/vanilla-flower.svg", "icons/nut.svg"] }
        ],
    fill: {
        normal: [
            { html: "Beijinho ", Attribute: { content: "Beijinho ", code: "00" } },
            { html: "Doce de leite ", Attribute: { content: "Doce de leite ", code: "01" } },
            { html: "Dois amores ", Attribute: { content: "Dois amores ", code: "02" } },
            { html: "Brigadeiro de ninho c/ frutas vermelhas", Attribute: { content: "Brigadeiro de ninho c/ frutas vermelhas", code: "03" } },
            { html: "Brigadeiro brulê c/ geleia de frutas vermelhas", Attribute: { content: "Brigadeiro brulê c/ geleia de frutas vermelhas", code: "04" } },
            { html: "Brigadeiro com café", Attribute: { content: "Brigadeiro com café", code: "05" } }
        ],
        special: [
            { html: "Nozes", content: "Nozes", price: "20", code: "10", img: "icons/nut.svg" },
            { html: "Pistache", content: "Pistache", price: "20", code: "11", img: "icons/pistachios.png" },
            { html: "Damasco", content: "Damasco", price: "20", code: "12", img: "icons/damasco.png" },
        ]
    },
    fruit: [
        { html: "Abacaxi", Attribute: { content: "Abacaxi", code: "0" }, img: "icons/back.svg" },
        { html: "Ameixa", Attribute: { content: "Ameixa", code: "1" }, img: "icons/abacaxi.svg" },
        { html: "Morango", Attribute: { content: "Morango", code: "2" }, img: "icons/plum.svg" },
        { html: "Pêssego", Attribute: { content: "Pêssego", code: "3" }, img: "icons/strawberry.svg" },
        { html: "Nenhuma", Attribute: { content: "Nenhuma", code: "4" }, img: "icons/peach.svg" },
    ],
    size: [
        { html: { h3: "Pequeno", ul: { li: ["rende 25/30", "R$180"] } }, Attribute: { content: "Pequeno", code: "0", price: "180" } },
        { html: { h3: "Médio", ul: { li: ["rende 40/50", "R$280"] } }, Attribute: { content: "Médio", code: "1", price: "280" } },
        { html: { h3: "Grande", ul: { li: ["rende 40/50", "R$380"] } }, Attribute: { content: "Grande", code: "2", price: "380" } },
    ],
    decoration: [
        { html: "Kitkat", content: "Kitkat", code: "0" },
        { html: "Kinder", content: "Kinder", code: "1" },
        { html: "Sonho de Valsa", content: "Sonho de Valsa", code: "2" },
        { html: "Hoje não 😢", content: "Hoje não 😢", code: "3" },
    ]
}
// { html: "<h3>Pequeno</h3><ul><li>rende 25/30</li><li> R$180</li></ul> ", Attribute: { content: "Pequeno", code: "0", price: "180" } },
// { html: "<h3>Médio</h3><ul><li>rende 40/50</li><li> R$280</li></ul> ", Attribute: { content: "Médio", code: "1", price: "280" } },
// { html: "<h3>Grande</h3><ul><li>rende 40/50</li><li> R$380</li></ul> ", Attribute: { content: "Grande", code: "2", price: "380" } },



function getKeys_buttons_data() {
    return Object.keys(buttons_data)
}
function findBoxOption(parent_id) {
    return document.querySelector(`#${parent_id} .box-options`)
}
function getKeys(el = Object) {
    return Object.keys(el)
}
function test() {
    const test_zone = document.getElementById('test-zone')
    const size = buttons_data.size[0].html
    const keys = getKeys(size)
    console.log(keys)
}
