const tamanhos_dado = {
    Pequeno: { Pequeno: "Pequeno", rendimento: "25/30", preco: 180 },
    Médio: { Médio: "Médio", rendimento: "30/40", preco: 280 },
    Grande: { Grande: "Grande", rendimento: "40/50", preco: 380 }
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
let selections_client_all_steps = { massa: [], recheios: [], fruta: [], tamanho: [], decoracao: [], price: [] }

const btn_test = document.getElementById("click-test")
btn_test.addEventListener('click', () => {
    menu.dough.content.classList.toggle('active')
})


const Table = {
    table_str: () => {
        Table.table_html.push(`<thead>${Table.thead_html.join('')}</thead>`);
        Table.table_html.push(`<tbody>${Table.tbody_html.join('')}</tbody>`);
        Table.table_html.push(`<tfoot>${Table.tfoot_html.join('')}</tfoot>`);
        return (`<table>${Table.table_html.join('')}</table>`);
    },
    table_reset: () => {
        Table.table_html = [],
            Table.thead_html = [],
            Table.tbody_html = [],
            Table.tfoot_html = [],
            Table.tr_html = [],
            Table.th_html = [],
            Table.td_html = []
    },
    // table_a: () => Table.table_str(),
    table_html: [],
    thead_html: [],
    tbody_html: [],
    tfoot_html: [],
    tr_html: [],
    th_html: [],
    td_html: [],
    push: {
        td: (td_content, colspan) => { Table.td_html.push(`<td colspan="${colspan}">${td_content}</td>`) },
        tr: (tr_content) => { Table.tr_html.push(`<tr>${tr_content}</tr>`) },
        th: (th_content, colspan = '') => { Table.th_html.push(`<th colspan="${colspan}">${th_content}</th>`) },
        ths_to: { tr: () => { Table.tr_html.push(Table.th_html.join('')); Table.th_html = [] } },
        tds_to: { tr: () => { Table.tr_html.push(`<tr>${Table.td_html.join('')}</tr>`); Table.td_html = [] } },
        // lkedmaluna da silva sauroo
        trs_to: {
            tbody: () => { Table.tbody_html.push(`${Table.tr_html.join('')}`); Table.tr_html = [] },
            thead: () => { Table.thead_html.push(`${Table.tr_html.join('')}`); Table.tr_html = [] },
            tfoot: () => { Table.tfoot_html.push(`${Table.tr_html.join('')}`); Table.tr_html = [] }
        }
    }
}

function active_menu(menu, button_next_state) {
    if (button_next_state.contains('active')) {
        menu.classList.add("active")
    }

}
function select_last_to_next(name_step, button_array_step, selection_client_step, numberMaxSelections, numberMinSelections, button_next, next_menu, ocasionality) {
    let btns_actived = {
        update_array: function () {
            let array_ = [...document.querySelectorAll(`.button-option.button-${name_step}.active`)]
            return array_
        }
    }
    button_array_step.map((el) => {

        el.addEventListener('click', () => {
            console.log("--------------")
            if (el.classList.contains('active')) {
                let i = selection_client_step.findIndex((element) => element == el)
                if (i >= 0) {
                    selection_client_step[i].classList.toggle('active')
                    switch (i) {
                        case 0:
                            selection_client_step.length == 2 ? selection_client_step[0] = selection_client_step[1] : null
                            selection_client_step.length == 1 ? selection_client_step[0] = null : null
                            break
                        case 1:
                            selection_client_step.pop()
                            break
                    }
                }
            }
            else {
                if (selection_client_step.length == 0 | selection_client_step.length < numberMaxSelections) {
                    selection_client_step.push(el)
                }
                else {
                    if (selection_client_step[0] != null) {
                        selection_client_step[0].classList.remove('active')
                    }
                    selection_client_step.push(el)
                    selection_client_step.shift()
                }
                el.classList.toggle('active')

            }
            // Passou por tudo, só utilizar-----------------------------------------
            const btn_actived = btns_actived.update_array()
            if (btn_actived.length >= numberMinSelections && btn_actived.length <= numberMaxSelections) {
                button_next.classList.add("active")
                if (next_menu.id == 'revision') { button_next.addEventListener("click", revision) }

                function revision() {
                    Table.table_reset()
                    selections_client_all_steps.fruta = [...document.querySelectorAll('.button-option.button-fruit.active')]
                    Table.push.th("Resumo", "5")
                    Table.push.ths_to.tr()
                    Table.push.trs_to.thead()
                    let price = 0
                    let tamanho_selecionado
                    function create_table_array(key) {
                        selections_client_all_steps[key].forEach((el) => {
                            const IteractSizeAndPushToTableArray = () => {
                                Object.keys(tamanho_selecionado).map((chave_tamanho_selecionado) => {
                                    this.output = tamanho_selecionado[chave_tamanho_selecionado]
                                    if (typeof (this.output) == "number") {
                                        price += parseInt(this.output)
                                        this.output = (`R$ ${this.output},00`)
                                    }
                                    else if (chave_tamanho_selecionado.toLowerCase() == 'rendimento') {
                                        this.output = (`Rendimento ${this.output}`)
                                    }
                                    Table.push.td(this.output)
                                })
                            }
                            const search_additional_dataset = () => {
                                filter_dataset("additional")
                                function filter_dataset(searchable) {
                                    this.dataset_array = el.dataset
                                    this.dataset_key_array = Object.keys(el.dataset)
                                    this.dataset_key_array.forEach((dataset_key) => {
                                        if (dataset_key == searchable) {
                                            console.log("Additional new price -> " + (this.dataset_array[dataset_key]));
                                            price += parseInt(this.dataset_array[dataset_key])
                                            return this.dataset_array[dataset_key]
                                        }
                                    })
                                }
                            }
                            function get_elements_dataset() {
                                switch (el.dataset['content']) {
                                    case 'Pequeno':
                                        console.log('Pequeno')
                                        tamanho_selecionado = tamanhos_dado.Pequeno
                                        IteractSizeAndPushToTableArray()
                                        break
                                    case "Médio":
                                        console.log("Médio")
                                        tamanho_selecionado = tamanhos_dado.Médio
                                        IteractSizeAndPushToTableArray()
                                        break
                                    case "Grande":
                                        console.log("Grande")
                                        tamanho_selecionado = tamanhos_dado.Grande
                                        IteractSizeAndPushToTableArray()
                                        break
                                    default:
                                        el.parentElement.classList.contains('additional') ? Table.push.td(`${el.dataset['content']} (+R$${el.dataset['additional']})`) : Table.push.td(`${el.dataset['content']}`)
                                        break
                                }
                            }
                            get_elements_dataset()
                            search_additional_dataset()
                        })
                    }
                    const getAllValues_selections_client = () => {
                        Object.keys(selections_client_all_steps).forEach((key) => {
                            if (selections_client_all_steps[key].length > 0) {
                                if (key == 'decoracao') {
                                    Table.push.th("Decoração")
                                    Table.push.ths_to.tr()
                                    Table.push.trs_to.tbody()
                                }
                                else {
                                    Table.push.th(key)
                                    Table.push.ths_to.tr()
                                    Table.push.trs_to.tbody()
                                }
                                create_table_array(key)
                            }
                        })
                    }
                    getAllValues_selections_client()
                    Table.push.tds_to.tr()
                    Table.push.trs_to.tbody()
                    console.log(Table.table_str())
                    document.getElementById('info').innerHTML = `${Table.table_str()}`
                }

                //---------------Fruitable-------------------
                if (ocasionality == 'fruitable') {
                    this.fill_opt_frutable = selection_client_step.findIndex((el) => el.classList.contains('fruitable'))
                    if (this.fill_opt_frutable >= 0) {
                        this.fill_fruitable_name_step = selection_client_step[this.fill_opt_frutable].innerHTML
                        next_menu = menu.fruit.content
                        this.dinamic_fruit = `Alguma Fruta no ${this.fill_fruitable_name_step}?`
                    }
                    else {
                        next_menu = menu.size.content
                        selections_client_all_steps.fruta.map((el) => el.classList.remove('active'))
                    }
                }
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
}))

select_last_to_next("dough", dough_btns, selections_client_all_steps.massa, 1, 1, menu.dough.next, menu.fill.content)//dough
select_last_to_next("fill", fill_btns, selections_client_all_steps.recheios, 2, 1, menu.fill.next, menu.size.content, 'fruitable')//fill
select_last_to_next("fruit", fruit_btns, selections_client_all_steps.fruta, 1, 1, menu.fruit.next, menu.size.content)//fruit
select_last_to_next("size", size_btns, selections_client_all_steps.tamanho, 1, 1, menu.size.next, menu.decoration.content, '')//size
select_last_to_next("decoration", decoration_btns, selections_client_all_steps.decoracao, 1, 1, menu.decoration.next, menu.revision.content, '')//decoration