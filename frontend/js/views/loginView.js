function loginView() {
  return `
    <main class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-100">

      <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

        <!-- Topo -->
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">

          <div class="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
            <i class="fas fa-trophy text-4xl"></i>
          </div>

          <h1 class="text-3xl font-bold">
            Bolinho App
          </h1>

          <p class="text-indigo-100 mt-2">
            Faça palpites e dispute com seus amigos
          </p>
        </div>

        <!-- Formulário -->
        <div class="p-8">

          <div class="space-y-5">

            <!-- Email -->
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                E-mail
              </label>

              <div class="relative">
                <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

                <input
                  id="loginEmail"
                  class="w-full border border-slate-300 rounded-xl py-3 pl-12 pr-4
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500 transition"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <!-- Senha -->
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Senha
              </label>

              <div class="relative">
                <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

                <input
                  id="loginPassword"
                  type="password"
                  class="w-full border border-slate-300 rounded-xl py-3 pl-12 pr-4
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500 transition"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            <!-- Botão -->
            <button
              class="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                     text-white py-3 rounded-xl font-semibold
                     hover:opacity-90 transition shadow-md"
              onclick="login(
                document.getElementById('loginEmail').value,
                document.getElementById('loginPassword').value
              )">

              <i class="fas fa-sign-in-alt mr-2"></i>
              Entrar
            </button>

            <!-- Divisor -->
            <div class="flex items-center gap-3 py-2">
              <div class="flex-1 h-px bg-slate-200"></div>
              <span class="text-sm text-slate-400">ou</span>
              <div class="flex-1 h-px bg-slate-200"></div>
            </div>

            <!-- Criar conta -->
            <button
              class="w-full border border-indigo-200 text-indigo-600 py-3 rounded-xl
                     font-semibold hover:bg-indigo-50 transition"
              onclick="setView('register')">

              <i class="fas fa-user-plus mr-2"></i>
              Criar Conta
            </button>

            <!-- Esqueci senha -->
            <div class="text-center pt-2">
              <button
                class="text-sm text-slate-500 hover:text-indigo-600 transition"
                onclick="showForgotPasswordModal()">

                Esqueceu a senha?
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  `;
}