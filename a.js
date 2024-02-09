const Table = {
    table_str: () => {
        Table.table_html.push(`<thead>${Table.thead_html.join('')}</thead>\n`);
        Table.table_html.push(`<tbody>${Table.tbody_html.join('')}</tbody>\n`);
        Table.table_html.push(`<tfoot>${Table.tfoot_html.join('')}</tfoot>\n`);
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

for (let i = 0; i < 2; i++) {
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')

    Table.push.tds_to.tr()
    Table.push.trs_to.tbody()
}
for (let i = 0; i < 2; i++) {
    Table.push.th('olaf')
    Table.push.th('olaf')
    Table.push.th('olaf')
    Table.push.th('olaf')
    Table.push.th('olaf')
    Table.push.th('olaf')

    Table.push.ths_to.tr()
    Table.push.trs_to.thead()
}
for (let i = 0; i < 2; i++) {
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')
    Table.push.td('olaf')

    Table.push.tds_to.tr()
    Table.push.trs_to.tfoot()
}
console.log(Table.table_str())
