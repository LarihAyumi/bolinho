// cadastroView.js

function registerView() {
  return `
    <main class="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50">

      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

        <div class="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white text-center">
          <div class="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4">
            <i class="fas fa-user-plus"></i>
          </div>
          <h1 class="text-3xl font-bold">Criar Conta</h1>
          <p class="mt-2 text-emerald-100">
            Cadastre-se para participar dos bolões
          </p>
        </div>

        <div class="p-8">
          <div class="space-y-5">

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                <i class="fas fa-user mr-2 text-emerald-600"></i>Nome completo
              </label>
              <input
                id="regName" 
                type="text" 
                placeholder="Digite seu nome"
                class="w-full border border-slate-300 rounded-xl px-4 py-3
                       focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       outline-none transition"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                <i class="fas fa-envelope mr-2 text-emerald-600"></i>E-mail
              </label>
              <input
                id="regEmail" 
                type="email" 
                placeholder="seu@email.com"
                class="w-full border border-slate-300 rounded-xl px-4 py-3
                       focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       outline-none transition"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                <i class="fas fa-lock mr-2 text-emerald-600"></i>Senha
              </label>
              <input
                id="regPass" 
                type="password" 
                placeholder="Crie uma senha"
                class="w-full border border-slate-300 rounded-xl px-4 py-3
                       focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       outline-none transition"
              />
            </div>

            <button
              class="w-full bg-gradient-to-r from-emerald-600 to-teal-600
                     hover:opacity-90 text-white py-3 rounded-xl font-semibold
                     shadow-lg transition"
              onclick="criarConta(
                document.getElementById('regName').value.trim(),
                document.getElementById('regEmail').value.trim(),
                document.getElementById('regPass').value
              )">
              <i class="fas fa-user-check mr-2"></i>Criar Conta
            </button>
          </div>

          <div class="my-6 flex items-center gap-4">
            <div class="flex-1 h-px bg-slate-200"></div>
            <span class="text-sm text-slate-400">ou</span>
            <div class="flex-1 h-px bg-slate-200"></div>
          </div>

          <div class="text-center">
            <p class="text-slate-600 mb-4">Já possui uma conta?</p>
            <button
              class="text-emerald-700 hover:text-emerald-900 font-semibold"
              onclick="setView('login')">
              Fazer login
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
}