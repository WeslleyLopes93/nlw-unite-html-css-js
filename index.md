#HTML

*Markup*
-TAG (H1,H2,H3)





##JS
'// Variaveis
const mensagem = 'Oi, tudo bem?'
// Tipos de dados

// Funcao
alert(mensagem)'

const participante = {
  nome: "Solange Barcellos",
  email: "solange@mail.com",
  dataInscricao: new Date(2024, 3, 22, 17, 30),
  dataCheckIn: new Date(2024, 3, 22, 00)
}

//array
let participantes = [
{
  nome: "Solange Barcellos",
  email: "solange@mail.com",
  dataInscricao: new Date(2024, 3, 22, 17, 30),
  dataCheckIn: new Date(2024, 3, 22, 00)
},
]

//condicional

if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar Check-in
    </button>

    `
  }