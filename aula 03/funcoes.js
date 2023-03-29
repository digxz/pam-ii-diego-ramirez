function msgteste () {
    console.log("Funcionou minha função")
}

msgteste()

function msgtesteargumento (param) {
    console.log("O parâmetro passado foi:",
     param,
      "e o tipo dele é",
      typeof param
      ) 
}

msgtesteargumento("Olá")
msgtesteargumento(4)

function soma (n1, n2) {
    let result = 0

        if (typeof n1 == "number" && typeof n2 == "number"){
            return result = n1 + n2
        }

        return "Deu bom não"
} 

console.log (soma(4, 7))
//console.log (soma ("oi", 7))

const funcaoArrow = () => {
    console.log ("Isso é uma arrow function!")}

    funcaoArrow()