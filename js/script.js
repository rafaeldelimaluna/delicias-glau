function addSpeaker_in_BackButtons() {
    const back_buttons = [...document.getElementsByClassName('button-back')]
    const menus_selection = [...document.getElementsByClassName("menu-selection")]
    back_buttons.map((el, i) => {
        el.addEventListener('click', () => {
            menus_selection[i + 1].classList.remove('active')
        })
    })
}
addSpeaker_in_BackButtons()
function declare_global_variabes(return_menus_array = false, return_menu_keys = false) {
    const menus_selection = [...document.getElementsByClassName("menu-selection")]
    const dough_btns = [...document.getElementsByClassName('button-dough')]
    const fill_btns = [...document.getElementsByClassName('button-fill')]
    const fruit_btns = [...document.getElementsByClassName('button-fruit')]
    const dinamic_title_fruit = document.getElementById('dinamic-fruit')
    const size_btns = [...document.getElementsByClassName('button-size')]
    const decoration_btns = [...document.getElementsByClassName('button-decoration')]
    const next_buttons = [...document.getElementsByClassName("button-next")]
    if (return_menus_array) {

        return {
            dough: { content: menus_selection[0], next: next_buttons[0], buttons: dough_btns },
            fill: { content: menus_selection[1], next: next_buttons[1], buttons: fill_btns },
            fruit: { content: menus_selection[2], next: next_buttons[2], buttons: fruit_btns, dinamic_title: dinamic_title_fruit },
            size: { content: menus_selection[3], next: next_buttons[3], buttons: size_btns },
            decoration: { content: menus_selection[4], next: next_buttons[4], buttons: decoration_btns },
            revision: { content: menus_selection[5], next: next_buttons[5] },
            finally: { content: menus_selection[6] }
        }
    }
    else if (return_menu_keys) { return Object.keys(menu) }

}

const node = {
    td: document.createElement('td'),
    tr: document.createElement('tr'),
    th: document.createElement('th'),
    tbody: document.createElement('tbody'),
    thead: document.createElement('tfoot'),
    tfoot: document.createElement('thead'),
    text_smok: document.createTextNode(''),
    text_node: function craeteTextNode_node(text) { return document.createTextNode(text) },
}
const menu = declare_global_variabes(true)
const menu_keys_global = declare_global_variabes(false, true)
const final_code = document.getElementById('final-code')
const copy = document.getElementById('copy')
// const history_of_buttons = { dough: [], fill: [], fruit: [], size: [], decoration: [], revision: [] }
const history_of_buttons = { dough: [], fill: [], fruit: [], size: [], decoration: [], revision: [] }
var i = 0
var TBODY = []

const btn_test = document.getElementById("click-test")
btn_test.addEventListener('click', () => {
    menu.dough.content.classList.toggle('active')
})
function translateKeyToPortugueseOrEnglish(entry) {
    const key_translater = (word_english) => {
        switch (word_english) {
            case "dough":
                return "massa"
            case "fill":
                return "recheio"
            case "fruit":
                return "fruta"
            case "size":
                return "tamanho"
            case "decoration":
                return "Decoração"
            case "revision":
                return "Revisão"
            case "massa":
                return "dough"
            case "recheio":
                return "fill"
            case "fruta":
                return "fruit"
            case "tamanho":
                return "size"
            case "Decoração":
                return "decoration"
            case "Revisão":
                return "revision"
        }
    }
    if (typeof entry == 'object') {
        return entry.map((el) => key_translater(el))
    }
    else {
        return key_translater(entry)
    }
}
function getKeys_of_history_of_buttons() {
    return Object.keys(history_of_buttons)
}

function makeThead(text_header) {
    const thead_node = document.createElement('thead')
    const thead_text_node = document.createTextNode(text_header)
    const th_node = document.createElement('th')
    th_node.appendChild(thead_text_node)
    th_node.setAttribute("colspan", 5)
    thead_node.appendChild(th_node)
    return thead_node

}
function getValuesContentOfHistoryButtons() {
    const keys = getKeys_of_history_of_buttons()
    let td_node = node.td
    let tr_node = node.tr
    let th_node = node.th
    let text_node = node.text_smok
    let last_key = ''
    let key_translated = ''
    const tbody_node = document.createElement("tbody")
    keys.map((key) => getValues(key))
    function getValues(key) {
        history_of_buttons[key].map((el, i) => {
            td_node = document.createElement('td')
            text_node = document.createTextNode(el.dataset['content'])

            td_node.appendChild(text_node)
            if (key == last_key) {
                tr_node.appendChild(td_node)
            }
            else {
                if (key == 'decoration') { console.log(el.dataset['content']) }
                tbody_node.appendChild(tr_node)
                tr_node = document.createElement('tr')
                key_translated = translateKeyToPortugueseOrEnglish(key)
                th_text = document.createTextNode(key_translated)
                th_node = document.createElement('th')
                th_node.appendChild(th_text)

                tr_node.appendChild(th_node)
                tr_node.appendChild(td_node)
            }
            last_key = key
        })
    }
    tbody_node.appendChild(tr_node)
    return tbody_node
}

function makeTfootTotalPrice(total_price) {
    const tfoot_node = document.createElement('tfoot')
    const th_node = document.createElement('th')
    const td_node = document.createElement('td')
    td_node.setAttribute('colspan', 2)
    th_node.appendChild(document.createTextNode('Preço Total'))
    td_node.appendChild(document.createTextNode(`R$ ${total_price}`))
    tfoot_node.appendChild(th_node)
    tfoot_node.appendChild(td_node)
    return tfoot_node
}
function makeTableMakerPrice() {
    const keys = getKeys_of_history_of_buttons()
    const table_node = document.createElement("table")
    const tbody_node = document.createElement('tbody')
    let tr_node = document.createElement('tr')
    let td_0_node = document.createElement('td')
    let td_1_node = document.createElement('td')
    let td_2_node = document.createElement('td')
    let th_node = node.th
    let text_node_0 = node.text_smok
    let text_node_1 = node.text_smok
    let text_node_2 = node.text_smok
    let total_price = 0
    table_node.appendChild(makeThead("Montagem do Preço"))
    let key_translated = ''
    let button_dataset = Object
    keys.map((key) => {
        history_of_buttons[key].forEach((el) => {
            button_dataset = el.dataset
            if (button_dataset['price'] != undefined) {
                td_0_node = document.createElement('td')
                td_1_node = document.createElement('td')
                td_2_node = document.createElement('td')
                th_node = document.createElement('th')
                if (el.parentElement.id == 'special') {
                    tr_node = document.createElement('tr')
                    th_node.appendChild(document.createTextNode(`Recheio Especial `))
                    td_1_node.appendChild(document.createTextNode(`${button_dataset.content}`))
                    td_2_node.appendChild(document.createTextNode(`R$ ${button_dataset.price}`))
                    tr_node.appendChild(th_node)
                    tr_node.appendChild(td_1_node)
                    tr_node.appendChild(td_2_node)

                    tbody_node.appendChild(tr_node)
                }
                else {
                    key_translated = translateKeyToPortugueseOrEnglish(key)
                    th_node.appendChild(document.createTextNode(key_translated))
                    td_0_node.appendChild(document.createTextNode(button_dataset.content))
                    td_1_node.appendChild(document.createTextNode(`R$ ${button_dataset.price}`))
                    tr_node.appendChild(th_node)
                    tr_node.appendChild(td_0_node)
                    tr_node.appendChild(td_1_node)
                }
                tbody_node.appendChild(tr_node)
                text_node_0 = node.text_smok
                td_0_node = node.td
                tr_node = document.createElement('tr')
                total_price += parseInt(button_dataset['price'])
            }
        })
    })
    table_node.appendChild(tbody_node)
    table_node.appendChild(makeTfootTotalPrice(total_price))
    return table_node
}


function makeTableContent() {
    const table_node = document.createElement('table')
    const thead_node = makeThead("Resumo")
    const tbody_node = getValuesContentOfHistoryButtons()

    table_node.appendChild(thead_node)
    table_node.appendChild(tbody_node)
    return table_node
}
function createTablesInDocument() {
    i += 1
    if (i > 1) {
        const table_content_node = makeTableContent()
        const table_maker_price = makeTableMakerPrice()
        const info = document.getElementById('info')
        const table_existents = document.querySelectorAll('#info table')
        table_existents.forEach((table) => table != null ? info.removeChild(table) : null)
        info.appendChild(table_content_node)
        info.appendChild(table_maker_price)

    }
}
function revision() {
    let revision_next = menu.revision.next
    revision_next.classList.add('active')
    revision_next.addEventListener('click', () => {
        menu.finally.content.classList.add('active')
    })
    createTablesInDocument()
}



function generateCode() {
    const keys = getKeys_of_history_of_buttons()
    let code = ''
    keys.forEach(key => {
        history_of_buttons[key].forEach(el => {
            code += el.dataset['code']
        })
    });
    return code
}

function finallyMenu() {
    const code = generateCode()
    final_code.setAttribute('value', code)
}



function selectLastToNext(name_step, numberMaxSelections, numberMinSelections, alternative_next_menu = undefined) {

    function verifyIfExistsKeyButtons() {
        if (menu_keys_step.includes('buttons')) {
            return menu[name_step].buttons
        }
        else { return null }
    }
    function defineNextMenu() {
        if (index_name_step <= menu_keys_global.length) {
            if (menu_keys_global[index_name_step + 1] == undefined) {
                return menu
            }
            else {
                return menu[(menu_keys_global[index_name_step + 1])].content
            }
        }

        else { return null }
    }
    function declareButtons(el) {
        el.addEventListener('click', () => {
            function activeOrInactiveButtons() {
                console.log('------')
                btns_actived.updateArray()
                const buttonsOptions = () => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                    else if (btns_actived.buttons_step_actived.length >= numberMinSelections && btns_actived.buttons_step_actived.length <= numberMaxSelections || btns_actived.buttons_step_actived.length == 0) {
                        if (btns_actived.buttons_step_actived.length >= numberMinSelections && btns_actived.buttons_step_actived.length < numberMaxSelections) {
                            el.classList.toggle('active')
                            history_of_buttons[name_step].push(el)
                        }
                        else if (btns_actived.buttons_step_actived.length == 0) {
                            el.classList.toggle('active')
                            history_of_buttons[name_step].push(el)
                        }
                        else if (btns_actived.buttons_step_actived.length <= numberMaxSelections) {
                            this.firt_button_in_array = history_of_buttons[name_step].shift()
                            this.firt_button_in_array.classList.remove("active")
                            history_of_buttons[name_step].push(el)
                            el.classList.add('active')
                        }
                    }
                }
                const buttonsNext = () => {
                    addSpeaker()
                    if (numberMinSelections == 0 && numberMaxSelections == 0) {
                        button_next.classList.add('active')

                    }
                    else if (btns_actived.buttons_step_actived.length >= numberMinSelections && btns_actived.buttons_step_actived.length <= numberMaxSelections) {
                        button_next.classList.add('active')
                    }
                    else {
                        button_next.classList.remove('active')
                    }
                    function addSpeaker() {
                        if (menu_keys_global[index_name_step + 1] == 'revision') { button_next.addEventListener('click', revision) }

                        button_next.addEventListener('click', () => {
                            this.contains_fruitable = false
                            this.choice_frutable = null
                            if (button_next.classList.contains('active')) {
                                history_of_buttons[name_step].forEach(choice => {
                                    if (choice.classList.contains('fruitable') != false) {
                                        this.contains_fruitable = true
                                        this.choice_frutable = choice
                                    }
                                });
                                if (this.contains_fruitable) { menu.fruit.dinamic_title.innerHTML = `Alguma fruta no ${this.choice_frutable.innerHTML}?`; next_menu.classList.add("active") }
                                else if (next_menu.id == 'fruit') {
                                    alternative_next_menu.classList.add('active');
                                }
                                else {
                                    next_menu.classList.add('active')
                                }
                            }
                        })
                    }
                }
                buttonsOptions()
                btns_actived.updateArray()
                buttonsNext()
            }
            activeOrInactiveButtons()
        })
    }
    const btns_actived = {
        updateArray: function () {
            btns_actived.buttons_step_actived = [...document.querySelectorAll(`.button-option.button-${name_step}.active`)]
        },
        buttons_step_actived: []
    }
    const data_step = menu[name_step]
    const menu_keys_step = Object.keys(data_step)
    const button_next = data_step.next
    const menu_content = data_step.content
    const index_name_step = menu_keys_global.findIndex((el) => el == name_step)
    const buttons_array_step = verifyIfExistsKeyButtons()
    const next_menu = defineNextMenu()
    if (name_step == 'revision') {
        revision()
    } else {
        buttons_array_step.map((el) => declareButtons(el))
    }
}

menu.revision.next.addEventListener('click', () => {
    finallyMenu()
})



selectLastToNext("dough", 1, 1,)//dough
selectLastToNext("fill", 2, 1, menu.size.content)//fill
selectLastToNext("fruit", 1, 1,)//fruit
selectLastToNext("size", 1, 1,)//size
selectLastToNext("decoration", 1, 1)//decoration
selectLastToNext("revision", 0, 0)//revision
