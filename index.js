let opsCount = 0
let result = 0
const operators = ['+', '-', '*', '/']


function add(value) {
    document.forms.form.textarea.value += verifyValue(value)
}

function calc() {
    
    try {
        const total = eval(document.forms.form.textarea.value)
        document.forms.form.textarea.value = total
        opsCount = 0

    } catch { }
}

function remove() {
    document.forms.form.textarea.value 
        = document.forms.form.textarea.value.substring(
            0, document.forms.form.textarea.value.length - 1
        )
    opsCount = 0
}

function removeAll() {
    opsCount = 0
    document.forms.form.textarea.value = ''
}

function verifyValue(value) {
    
    let isNumber = new RegExp('[0-9]')

    if (operators.includes(value) && opsCount === 0) {
        opsCount += 1
        return value
    } else if (isNumber.test(value)) {
        opsCount = 0
        return value
    } else {
        return ''
    }
}