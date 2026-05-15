// usuarioController.js

function findUserByEmail(email) {
  return database.users.find(u => u.email === email);
}

// --- FLUXO: CADASTRAR-SE (sd Cadastrar-se) ---

function validaDados(nome, email, senha) {
  // Passo 4 do diagrama
  if (!nome || !email || !senha) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function registraUsuario(nome, email, senha) {
  // Passo 5 do diagrama
  database.users.push({ name: nome, email, password: senha });
}

function criarConta(nome, email, senha) {
  // Passo 4: validaDados
  if (!validaDados(nome, email, senha)) {
    // Passo 5.1: Erro
    showToast('Campos inválidos', 'error');
    return;
  }

  // Verificação de e-mail existente
  if (findUserByEmail(email)) {
    showToast('E-mail já cadastrado', 'error');
    return;
  }

  // Passo 5: Registra Usuário
  registraUsuario(nome, email, senha);

  // Passo 6: Abre tela login
  showToast('Conta criada com sucesso!'); 
  setView('login');
}

// --- FLUXO: FAZER LOGIN (sd Fazer Login) ---

function login(email, password) {
  // Passo 3: validaDados (simplificado)
  if (!email || !password) {
    showToast('Preencha todos os campos.', 'error');
    return;
  }

  const u = findUserByEmail(email);

  // Passo 4: Valida Usuário e Senha
  if (!u || u.password !== password) {
    // Passo 4.1: Mensagem de erro no plural conforme diagrama
    showToast('E-mail ou senha inválidos.', 'error');
    return;
  }

  // Passo 5: Autentica Usuário (Cria sessão)
  state.userSession = { name: u.name, email: u.email };
  
  // Passo 6: Abre Menu Principal
  showToast('Login realizado!');
  setView('feed');
}

function logout() {
  state.userSession = null;
  state.currentBolaoId = null;
  showToast('Logout realizado!');
  setView('login');
}