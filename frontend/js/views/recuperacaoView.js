function feedView() {
  const user = getLoggedUser();

  const myBaloes = database.baloes.filter(
    b => b.participants.includes(user.email)
  );

  return `
    <main class="max-w-6xl mx-auto p-6">

      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold">
            Olá, ${user.name}
          </h1>

          <p class="text-slate-500 mt-1">
            Bem-vindo ao sistema de bolões
          </p>
        </div>

        <button
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          onclick="logout()">
          <i class="fas fa-sign-out-alt mr-2"></i>
          Sair
        </button>
      </div>

      <div class="flex flex-wrap gap-3 mb-8">

        <button
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
          onclick="setView('create')">
          <i class="fas fa-plus mr-2"></i>
          Criar Bolão
        </button>

        <button
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg"
          onclick="showJoinBolaoModal()">
          <i class="fas fa-ticket-alt mr-2"></i>
          Entrar por Código
        </button>

        <button
          class="bg-slate-700 hover:bg-slate-800 text-white px-5 py-3 rounded-lg"
          onclick="toggleBusinessView()">
          <i class="fas fa-chart-line mr-2"></i>
          Modelo de Negócio
        </button>

      </div>

      ${
        myBaloes.length > 0
          ? `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          ${myBaloes.map(b => `
            <div class="bg-white p-5 rounded-xl shadow border border-slate-200 card-hover">

              <div class="flex justify-between items-start mb-3">
                <h3 class="font-bold text-lg">
                  ${b.name}
                </h3>

                ${
                  b.isPublic
                    ? `
                    <span class="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">
                      Público
                    </span>
                  `
                    : `
                    <span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                      Privado
                    </span>
                  `
                }
              </div>

              <div class="text-sm text-slate-500 mb-2">
                Código: ${b.id}
              </div>

              <div class="text-sm text-slate-500 mb-4">
                ${b.participants.length} participante(s)
              </div>

              <button
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                onclick="setCurrentBolao('${b.id}')">

                Abrir Bolão
              </button>
            </div>
          `).join('')}

        </div>
      `
          : `
        <div class="bg-white p-10 rounded-xl shadow text-center">
          <i class="fas fa-futbol text-5xl text-slate-300 mb-4"></i>

          <h2 class="text-xl font-bold mb-2">
            Nenhum bolão encontrado
          </h2>

          <p class="text-slate-500 mb-6">
            Crie um novo bolão ou entre com um código.
          </p>

          <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg"
            onclick="setView('create')">

            Criar Primeiro Bolão
          </button>
        </div>
      `
      }

    </main>
  `;
}

function showJoinBolaoModal() {
  const html = `
    <div class="p-6">

      <h2 class="text-2xl font-bold mb-4">
        Entrar em um Bolão
      </h2>

      <input
        id="joinBolaoCode"
        class="w-full border p-3 rounded-lg mb-4"
        placeholder="Digite o código do bolão"
      />

      <button
        class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg"
        onclick="joinBolaoByCode(
          document.getElementById('joinBolaoCode').value
        )">

        Entrar
      </button>

    </div>
  `;

  showModal(html);
}

function toggleBusinessView() {
  state.businessVisible = !state.businessVisible;
  render();
}