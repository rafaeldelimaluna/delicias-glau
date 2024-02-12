function a() {
    function b() { return 0 }
    c: b()
}

const cep = a()
console.log(cep.c)