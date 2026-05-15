function feedView() {
  const user = getLoggedUser();

  const myBaloes = database.baloes.filter(
    b => b.participants.includes(user.email)
  );

  return `
    <main class="max-w-7xl mx-auto px-4 py-8">

      <!-- HEADER -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>
          <div class="flex items-center gap-4">

            <div class="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600
                        text-white flex items-center justify-center text-2xl font-bold shadow-lg">
              ${user.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 class="text-3xl font-bold text-slate-800">
                Olá, ${user.name}
              </h1>

              <p class="text-slate-500 mt-1">
                Bem-vindo ao seu painel de bolões
              </p>
            </div>
          </div>
        </div>

        <button
          class="bg-red-500 hover:bg-red-600 transition
                 text-white px-5 py-3 rounded-xl shadow-md font-medium"
          onclick="logout()">

          <i class="fas fa-sign-out-alt mr-2"></i>
          Sair
        </button>
      </div>

      <!-- AÇÕES -->
      <div class="grid md:grid-cols-3 gap-5 mb-10">

        <!-- Criar -->
        <button
          class="bg-gradient-to-r from-indigo-600 to-purple-600
                 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02]
                 transition text-left"
          onclick="setView('create')">

          <div class="text-3xl mb-4">
            <i class="fas fa-plus-circle"></i>
          </div>

          <div class="font-bold text-xl mb-1">
            Criar Bolão
          </div>

          <div class="text-indigo-100 text-sm">
            Organize um novo bolão com seus amigos
          </div>
        </button>

        <!-- Entrar -->
        <button
          class="bg-gradient-to-r from-emerald-600 to-teal-600
                 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02]
                 transition text-left"
          onclick="setView('join')">

          <div class="text-3xl mb-4">
            <i class="fas fa-sign-in-alt"></i>
          </div>

          <div class="font-bold text-xl mb-1">
            Entrar com Código
          </div>

          <div class="text-emerald-100 text-sm">
            Participe de um bolão existente
          </div>
        </button>

        <!-- Ranking -->
      </div>

      <!-- MEUS BOLÕES -->
      <section>

        <div class="flex items-center justify-between mb-6">

          <div>
            <h2 class="text-2xl font-bold text-slate-800">
              <i class="fas fa-trophy text-amber-500 mr-2"></i>
              Meus Bolões
            </h2>

            <p class="text-slate-500 mt-1">
              ${myBaloes.length} bolão(ões) encontrado(s)
            </p>
          </div>
        </div>

        ${
          myBaloes.length > 0
            ? `
              <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                ${myBaloes.map(b => `
                  <div class="bg-white rounded-2xl shadow-lg border border-slate-200
                              overflow-hidden hover:shadow-xl transition">

                    <!-- Topo -->
                    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white">

                      <div class="flex justify-between items-start">

                        <div>
                          <h3 class="text-xl font-bold">
                            ${b.name}
                          </h3>

                          <div class="text-indigo-100 text-sm mt-1">
                            Código: ${b.id}
                          </div>
                        </div>

                        <div class="bg-white/20 rounded-full w-12 h-12
                                    flex items-center justify-center">
                          <i class="fas fa-futbol text-xl"></i>
                        </div>
                      </div>
                    </div>

                    <!-- Conteúdo -->
                    <div class="p-5 space-y-4">

                      <div class="grid grid-cols-2 gap-3">

                        <div class="bg-slate-50 rounded-xl p-3 text-center">
                          <div class="text-sm text-slate-500">
                            Participantes
                          </div>

                          <div class="text-xl font-bold text-slate-800">
                            ${b.participants.length}
                          </div>
                        </div>

                        <div class="bg-slate-50 rounded-xl p-3 text-center">
                          <div class="text-sm text-slate-500">
                            Jogos
                          </div>

                          <div class="text-xl font-bold text-slate-800">
                            ${b.games.length}
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center justify-between text-sm">

                        <div class="flex items-center gap-2">
                          <i class="fas fa-trophy text-amber-500"></i>
                          <span class="text-slate-600">
                            ${b.premiacao?.primeiro || 'Sem prêmio'}
                          </span>
                        </div>

                        <div class="${
                          b.isPublic
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-purple-100 text-purple-700'
                        } px-3 py-1 rounded-full text-xs font-semibold">

                          ${
                            b.isPublic
                              ? 'Público'
                              : 'Privado'
                          }
                        </div>
                      </div>

                      <button
                        class="w-full bg-indigo-600 hover:bg-indigo-700
                               transition text-white py-3 rounded-xl font-semibold"
                        onclick="setCurrentBolao('${b.id}')">

                        <i class="fas fa-arrow-right mr-2"></i>
                        Abrir Bolão
                      </button>
                    </div>
                  </div>
                `).join('')}

              </div>
            `
            : `
              <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">

                <div class="text-6xl text-slate-300 mb-5">
                  <i class="fas fa-futbol"></i>
                </div>

                <h3 class="text-2xl font-bold text-slate-700 mb-2">
                  Nenhum bolão encontrado
                </h3>

                <p class="text-slate-500 mb-6">
                  Crie seu primeiro bolão ou participe usando um código.
                </p>

                <div class="flex flex-col md:flex-row gap-4 justify-center">

                  <button
                    class="bg-indigo-600 hover:bg-indigo-700 transition
                           text-white px-6 py-3 rounded-xl font-semibold"
                    onclick="setView('create')">

                    Criar Bolão
                  </button>

                  <button
                    class="bg-emerald-600 hover:bg-emerald-700 transition
                           text-white px-6 py-3 rounded-xl font-semibold"
                    onclick="setView('join')">

                    Entrar com Código
                  </button>
                </div>
              </div>
            `
        }

      </section>
    </main>
  `;
}