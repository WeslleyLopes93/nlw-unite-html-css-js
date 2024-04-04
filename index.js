let participantes = [
  {
    nome: "Solange Barcellos",
    email: "solange@mail.com",
    dataInscricao: new Date(2024, 2, 22, 17, 30),
    dataCheckIn: null
  },
  {
    nome: "Julia Lopes",
    email: "julia@mail.com",
    dataInscricao: new Date(2024, 1, 21, 15, 30),
    dataCheckIn: new Date(2024, 2, 23, 0, 0)
  },
  {
    nome: "Marcos Tadeu",
    email: "marcos@mail.com",
    dataInscricao: new Date(2024, 2, 23, 9, 45),
    dataCheckIn: new Date(2024, 2, 23, 0, 0)
  },
  {
    nome: "Rafaela Silva",
    email: "rafaela@mail.com",
    dataInscricao: new Date(2024, 2, 20, 13, 20),
    dataCheckIn: new Date(2024, 2, 21, 0, 0)
  },
  {
    nome: "Tiago Nunes",
    email: "tiago@mail.com",
    dataInscricao: new Date(2024, 2, 25, 14, 55),
    dataCheckIn: new Date(2024, 2, 25, 0, 0)
  },
  {
    nome: "Ana Carolina",
    email: "ana@mail.com",
    dataInscricao: new Date(2024, 2, 24, 10, 30),
    dataCheckIn: null
  },
  {
    nome: "Pedro Alcântara",
    email: "pedro@mail.com",
    dataInscricao: new Date(2024, 2, 26, 16, 0),
    dataCheckIn: new Date(2024, 2, 26, 0, 0)
  },
  {
    nome: "Fernanda Oliveira",
    email: "fernanda@mail.com",
    dataInscricao: new Date(2024, 2, 22, 11, 10),
    dataCheckIn: new Date(2024, 2, 22, 0, 0)
  },
  {
    nome: "Gustavo Henrique",
    email: "gustavo@mail.com",
    dataInscricao: new Date(2024, 2, 23, 12, 30),
    dataCheckIn: null
  },
  {
    nome: "Larissa Machado",
    email: "larissa@mail.com",
    dataInscricao: new Date(2024, 2, 24, 9, 0),
    dataCheckIn: new Date(2024, 2, 24, 0, 0)
  }
]

const CriarNovoParticipante= (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

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

  return `
  <tr>
      <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const AtualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + CriarNovoParticipante(participante)
  }

  document
  .querySelector('tbody')
  .innerHTML = output
}

AtualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
    
  )

  if (participanteExiste) {
    alert('Participante já cadastro!')
    return
  }

  participantes = [participante, ...participantes]
  AtualizarLista(participantes)
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //Confirmar Check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  // atualizar o checkin do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  AtualizarLista(participantes)
}