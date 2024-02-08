const bolo_tamanho_dado = {
    Pequeno: { preco: 180, rendimento: "25/30" },
    Médio: { preco: 280, rendimento: "30/40" },
    Grande: { preco: 380, rendimento: "40/50" }
}

const menus_selection = [...document.getElementsByClassName("menu-selection")]
const buttons = [...document.getElementsByClassName('button-option')]
const dough_btns = [...document.getElementsByClassName('button-dough')]
const fill_btns = [...document.getElementsByClassName('button-fill')]
const fruit_btns = [...document.getElementsByClassName('button-fruit')]
const size_btns = [...document.getElementsByClassName('button-size')]
const decoration_btns = [...document.getElementsByClassName('button-decoration')]

const next_buttons = [...document.getElementsByClassName("button-next")]
const back_buttons = [...document.getElementsByClassName('button-back')]

const menu = {
    dough: { content: menus_selection[0], next: next_buttons[0] },
    fill: { content: menus_selection[1], next: next_buttons[1] },
    fruit: { content: menus_selection[2], next: next_buttons[2] },
    size: { content: menus_selection[3], next: next_buttons[3] },
    decoration: { content: menus_selection[4], next: next_buttons[4] },
    revision: { content: menus_selection[5], next: next_buttons[5] }
}
let selections = { massa: [], recheios: [], fruta: [], tamanho: [], decoracao: [] }

var fill_fruitable_name

const btn_test = document.getElementById("click-test")
btn_test.addEventListener('click', () => {
    menu.dough.content.classList.toggle('active')
})

function active_menu(menu, button_next_state) {
    if (button_next_state.contains('active')) {
        menu.classList.add("active")
    }

}
function select_last_to_next(name, el_array, selection_k, nMax, nMin, button_next, next_menu, ocasionality) {
    // el_array -> array de botões de cada menu
    // selection_k -> dict para inserir os valores que o usuário selecionar, tem várias chaves já de acordo com cada menu
    // nMax -> number_max_selections
    //nMin -> number_min_selections
    //button_next -> Botão que será ativado após certa especificação, para ir para o prox menu
    //ocasionality -> alguma ocasião especifica (se é fruitable)
    let actived = {
        reset: function () {
            let array_ = [...document.querySelectorAll(`.button-option.button-${name}.active`)]
            return array_
        }
    }
    el_array.map((el) => {

        el.addEventListener('click', () => {
            // function verify_array_button() {
            // let array_ = [...document.querySelectorAll(query_name)]
            // return array_
            // }
            // const query_name = `.button-option.button-${name}.active`
            console.log("--------------")
            console.log(selection_k)
            if (el.classList.contains('active')) {
                let i = selection_k.findIndex((element) => element == el)
                if (i >= 0) {
                    selection_k[i].classList.toggle('active')
                    switch (i) {
                        case 0:
                            // selection_k.shift()
                            selection_k.length == 2 ? selection_k[0] = selection_k[1] : null
                            selection_k.length == 1 ? selection_k[0] = null : null
                            break
                        case 1:
                            selection_k.pop()
                            break
                    }
                }
            }
            else {
                // console.log(selection_k.length)
                if (selection_k.length == 0 | selection_k.length < nMax) {
                    // console.log("IF")
                    selection_k.push(el)
                }
                else {
                    // console.log("ELSE")
                    // console.log("REMOVE ->" + selection_k[0].innerHTML)
                    if (selection_k[0] != null) {
                        selection_k[0].classList.remove('active')
                    }
                    selection_k.push(el)
                    selection_k.shift()
                    // console.log(`New ACTIVE -> ${ selection_k[0].innerHTML } | ${ selection_k[1].innerHTML }`)
                }
                el.classList.toggle('active')

            }
            // Passou por tudo, só utilizar-----------------------------------------
            const btn_actived = actived.reset()
            // console.log(`${btn_actived.length} >= ${nMin} && ${btn_actived.length} <= ${nMax}`)
            console.log(`${btn_actived.length >= nMin && btn_actived.length <= nMax}`)
            if (btn_actived.length >= nMin && btn_actived.length <= nMax) {
                console.log(true)
                button_next.classList.add("active")
                button_next.addEventListener("click", revision)
                //---------------Decoration --->  revision-------------------
                function revision() {
                    if (next_menu.id == 'revision') {
                        selections.fruta = [...document.querySelectorAll('.button-option.button-fruit.active')]
                        this.result = ['<thead><th colspan="5">Resumo</th></thead>']
                        Object.keys(selections).forEach((key) => {
                            if (selections[key].length > 0) {
                                if (key == 'decoracao') {
                                    this.result.push(`<tbody><tr><th>Decoração</th>`);
                                }
                                else {
                                    this.result.push(`<tr> <th>${key}</th>`);
                                }
                                selections[key].forEach((el) => {
                                    switch (el.dataset['content']) {
                                        case 'Pequeno':
                                            console.log('Pequeno')
                                            this.bolo_tamanho = bolo_tamanho_dado.Pequeno
                                        case "Médio":
                                            console.log("Médio")
                                            this.bolo_tamanho = bolo_tamanho_dado.Médio
                                        case "Grande":
                                            console.log("Grande")
                                            this.bolo_tamanho = bolo_tamanho_dado.Grande
                                        case "Pequeno":
                                        case "Médio":
                                        case "Grande":
                                            console.log(this.bolo_tamanho.preco)
                                            console.log(this.bolo_tamanho.rendimento)
                                            break
                                        default:
                                            this.result.push(`${el.dataset['content']}`)
                                            break
                                    }
                                })
                            }
                        })
                        // console.log(this.result)
                        let result_str = ''
                        for (let i = 0; i < this.result.length; i++) {
                            if (this.result[i] != '') {
                                result_str += ("<td>" + this.result[i] + "</td>")
                            }
                        }
                        console.log(result_str)
                        document.getElementById('info').innerHTML = `<table>${result_str}</table> `
                    }
                }

                //---------------Fruitable-------------------
                if (ocasionality == 'fruitable') {
                    console.log('FRUTABLE')
                    this.fill_opt_frutable = selection_k.findIndex((el) => el.classList.contains('fruitable'))
                    if (this.fill_opt_frutable >= 0) {
                        fill_fruitable_name = selection_k[this.fill_opt_frutable].innerHTML
                        next_menu = menu.fruit.content
                        console.log("IF")
                    }
                    else {
                        // console.log(selections.fruta)
                        next_menu = menu.size.content
                        console.log("Else")
                        selections.fruta.map((el) => el.classList.remove('active'))
                        // selections.fruta[0] = []
                    }
                }
                console.log("Fruitable name -> " + fill_fruitable_name)
                this.dinamic_fruit = `Qual Fruta no ${fill_fruitable_name}`
                document.getElementById('dinamic-fruit').innerHTML = this.dinamic_fruit

                //------------------------------------
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


back_buttons.map((el, i) => el.addEventListener('click', () => {
    menus_selection[i + 1].classList.remove('active')
    console.log("Arrow -> ", i + 1)
}))

select_last_to_next("dough", dough_btns, selections.massa, 1, 1, menu.dough.next, menu.fill.content)//dough
select_last_to_next("fill", fill_btns, selections.recheios, 2, 1, menu.fill.next, menu.size.content, 'fruitable')//fill
select_last_to_next("fruit", fruit_btns, selections.fruta, 1, 1, menu.fruit.next, menu.size.content)//fruit
select_last_to_next("size", size_btns, selections.tamanho, 1, 1, menu.size.next, menu.decoration.content, '')//size
select_last_to_next("decoration", decoration_btns, selections.decoracao, 1, 1, menu.decoration.next, menu.revision.content, '')//decoration