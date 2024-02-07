const menus_selection = [...document.getElementsByClassName("menu-selection")]
const buttons = [...document.getElementsByClassName('button-option')]
const dough_btns = [...document.getElementsByClassName('button-dough')]
const fill_btns = [...document.getElementsByClassName('button-fill')]
const fruit_btns = [...document.getElementsByClassName('button-fruit')]
const size_btns = [...document.getElementsByClassName('button-size')]
const decoration_btns = [...document.getElementsByClassName('button-decoration')]
const next_buttons = [...document.getElementsByClassName("button-next")]
const menu = {
    dough: menus_selection[0], fill: { content: menus_selection[1], next: next_buttons[0] }, fruit: { content: menus_selection[2], next: next_buttons[1] },
    size: menus_selection[3], decoration: menus_selection[4]
}
let selections = { dough: '', fills: [], fruits: [], size: 0, decoration: '' }

const btn_test = document.getElementById("click-test")
btn_test.addEventListener('click', () => {
    menu.dough.classList.toggle('active')
})

function click_to_next(el_array, next_menu) {
    el_array.map((el) => {
        el.addEventListener("click", () => {
            el.classList.add('active')
            next_menu.classList.add('active')
        })
    })
}


function to_next(next_button, next_menu) {
    next_button.addEventListener('click', () => {
        next_menu.classList.add("active")
        // console.log(`Chamado por ${el.innerHTML}`)
        // console.log("Acionando o prox MENU")
    })
}

function select_last_to_next(el, selection_k, nms, button_next, next_menu) {
    // NMS -> number_max_selections
    el.addEventListener('click', () => {
        console.log("--------------")
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
                console.log("IF")
                selection_k.push(el)
            }
            else {
                console.log("ELSE")
                selection_k[0].classList.toggle('active')
                selection_k.shift()
                selection_k.push(el)
            }
            el.classList.toggle('active')

        }
        if (selection_k.length == nms) {
            console.log("ATIVAR BOTÃO")
            button_next.classList.add("active")
            to_next(button_next, next_menu)
        }
        else {
            button_next.classList.remove('active')
        }
        console.log(selection_k)
    })
}


click_to_next(dough_btns, menu.fill.content)
fill_btns.map((el, i) => select_last_to_next(el, selections.fills, 2, menu.fill.next, menu.fruit.content))
fruit_btns.map((el) => select_last_to_next(el, selections.fruits, 3, menu.fruit.next, menu.decoration))
click_to_next(decoration_btns, menu.size)