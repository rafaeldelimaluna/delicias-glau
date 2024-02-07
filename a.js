Object.keys(selections).forEach((key) => {
    if (selections[key].length > 0) {
        selections[key].forEach((el) => {
            this.result.push(`${el.dataset['content']}`)
        })
    }
})