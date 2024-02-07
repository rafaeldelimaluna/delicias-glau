const menus_selection = [...document.getElementsByClassName("menu-selection")]
const buttons = [...document.getElementsByClassName('button-option')]
const dough_btns = [...document.getElementsByClassName('button-dough')]
const fill_btns = [...document.getElementsByClassName('button-fill')]
const fruit_btns = [...document.getElementsByClassName('button-fruit')]
const size_btns = [...document.getElementsByClassName('button-size')]
const decoration_btns = [...document.getElementsByClassName('button-decoration')]
const next_buttons = [...document.getElementsByClassName("button-next")]
const menu_question = [...document.getElementsByClassName('menu-question')]
const buttons_question = [...document.querySelectorAll('.menu-question .button-option')]
const box_question = []
let box_temp = []

for (let i; i < buttons.length; i++) {
    box_temp.push(i)
    console.log(box_temp)
    if (box_temp.length == 2) {
        box_question.push(box_temp)
        box_temp = []
    }
}
gcfhk
const menu = {
    dough: { content: menus_selection[0], next: next_buttons[0] }, fill: { content: menus_selection[1], next: next_buttons[1] }, fruit: { content: menus_selection[2], next: next_buttons[2], question: menu_question[0] },
    size: { content: menus_selection[3], next: next_buttons[3] }, decoration: { content: menus_selection[4], next: next_buttons[4], question: menu_question[1] }, revision: { content: menus_selection[5], next: next_buttons[5] }
}
let selections = { massa: [], recheios: [], fruta: [], tamanho: [], decoracao: [] }

var fill_fruitable_name


const btn_test = document.getElementById("click-test")
btn_test.addEventListener('click', () => {
    menu.dough.content.classList.toggle('active')
})

function click_to_next(el_array, next_menu) {
    el_array.map((el) => {
        el.addEventListener("click", () => {
            el.classList.add('active')
            next_menu.classList.add('active')
        })
    })
}

function active_menu(menu, button_next_state) {
    if (button_next_state.contains('active')) {
        menu.classList.add("active")
    }

}
function select_last_to_next(el_array, selection_k, nms, button_next, next_menu, ocasionality) {
    // NMS -> number_max_selections
    el_array.map((el) => {
        if (typeof (ocasionality) != 'string') {
            // gu
        }
        el.addEventListener('click', () => {
            console.log("--------------")
            // console.log(`Selection k -> ${selection_k}`)
            if (el.classList.contains('active')) {
                let i = selection_k.findIndex((element) => element == el)
                if (i >= 0) {
                    selection_k[i].classList.toggle('active')
                    switch (i) {
                        case 0:
                            selection_k.shift()
                            break
                        case 1:
                            selection_k.pop()
                            break
                    }
                }
            }
            else {
                console.log(selection_k.length)
                if (selection_k.length == 0 | selection_k.length < nms) {
                    // console.log("IF")
                    selection_k.push(el)
                }
                else {
                    // console.log("ELSE")
                    selection_k[0].classList.toggle('active')
                    selection_k.shift()
                    selection_k.push(el)
                }
                el.classList.toggle('active')

            }
            // Passou por tudo, só utilizar
            if (selection_k.length == nms) {
                button_next.classList.add("active")

                //---------------Decoration to revision-------------------
                if (next_menu.id == 'revision') {
                    this.info = document.getElementById('info')
                    this.result = []
                    Object.keys(selections).forEach((key) => {
                        if (selections[key].length > 0) { selections[key].forEach((el) => { this.result.push(`<tr><th>${key}</th>`); this.result.push(`${el.innerText}`) }) }

                    })
                    this.info.innerHTML = `<table>${this.result.join('<td>')}</table>`
                }
                //---------------Fruitable-------------------
                if (ocasionality == 'fruitable') {
                    this.fill_opt_frutable = selection_k.findIndex((el) => el.classList.contains('fruitable'))
                    if (this.fill_opt_frutable >= 0) {
                        fill_fruitable_name = selection_k[this.fill_opt_frutable].innerHTML
                        next_menu = menu.fruit.content
                    }
                }
                // console.log(next_menu)
                button_next.addEventListener('click', () => {
                    active_menu(next_menu, button_next.classList)
                })
            }
            else {
                button_next.classList.remove('active')
            }
        })
    })
}



select_last_to_next(dough_btns, selections.massa, 1, menu.dough.next, menu.fill.content)//dough
select_last_to_next(fill_btns, selections.recheios, 2, menu.fill.next, menu.size.content, 'fruitable')//fill
select_last_to_next(fruit_btns, selections.fruta, 1, menu.fruit.next, menu.size.content)//fruit
select_last_to_next(size_btns, selections.tamanho, 1, menu.size.next, menu.decoration.content, '')//size
select_last_to_next(decoration_btns, selections.decoracao, 1, menu.decoration.next, menu.revision.content, '')//decoration
// select_last_to_next(decoration_btns, menu.revision.next, selections.decoration, 1, menu.decoration.next, false)