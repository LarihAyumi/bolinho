// bolaoController.js

// --- FLUXO: CRIAR BOLÃO (sd Criar Bolão) ---

function registraBolao(name) {
  // Passo 4 do diagrama
  const bolao = {
    id: uid(), // Gera o código
    name: name,
    ownerEmail: getLoggedUser().email,
    participants: [getLoggedUser().email],
    games: [],
    palpites: {},
    isPublic: false
  };
  database.baloes.unshift(bolao);
  return bolao;
}

function createBolao({ name }) {
  // Passo 3: Valida nome
  if (!name || name.trim() === "") {
    // Passo 3.1: Erro
    showToast('Nome inválido.', 'error');
    return;
  }

  // Passo 4: Registra Bolão
  registraBolao(name);

  // Passo 5: Abre Menu Principal
  showToast('Bolão criado com sucesso!');
  setView('feed');
}

// --- FLUXO: ENTRAR NO BOLÃO (sd Entrar no Bolão) ---

function joinBolaoByCode(code) {
  // Passo 3: Busca Bolão
  const bolao = database.baloes.find(b => b.id === code.toUpperCase());

  // Passo 4: Valida Código
  if (!bolao) {
    // Passo 4.1: Mensagem exata do diagrama
    showToast('Código inválido.', 'error');
    return;
  }

  const email = getLoggedUser().email;

  // Passo 5: Adiciona Participante
  if (!bolao.participants.includes(email)) {
    bolao.participants.push(email);
  }

  // Passo 6: Abre Menu Principal
  showToast('Você entrou no bolão!');
  setView('feed');
}