function bolaoView() {
  const bolao = database.baloes.find(
    b => b.id === state.currentBolaoId
  );

  if (!bolao) {
    return `
      <main class="max-w-4xl mx-auto p-6">
        <div class="bg-white p-10 rounded-xl shadow text-center">
          <i class="fas fa-circle-exclamation text-4xl text-red-500 mb-4"></i>

          <h1 class="text-2xl font-bold mb-2">
            Bolão não encontrado
          </h1>

          <p class="text-slate-500 mb-6">
            O bolão selecionado não existe ou foi removido.
          </p>

          <button
            class="bg-slate-700 text-white px-5 py-2 rounded-lg"
            onclick="setView('feed')">
            Voltar
          </button>
        </div>
      </main>
    `;
  }

  const user = getLoggedUser();
  const isOwner = user.email === bolao.ownerEmail;

  function renderGame(game) {
    const palpite =
      bolao.palpites[user.email]?.[game.id] || {
        homeScore: '',
        awayScore: ''
      };

    const result = game.scores || {};

    return `
      <div class="bg-white p-5 rounded-xl shadow border border-slate-200">

        <div class="flex flex-col md:flex-row md:items-center justify-between mb-5">
          <div>
            <div class="font-bold text-xl">
              ${game.home} × ${game.away}
            </div>

            <div class="text-sm text-slate-500 mt-1">
              <i class="far fa-calendar-alt mr-1"></i>
              ${game.date}
            </div>
          </div>

          ${
            result.home !== undefined
              ? `
                <div class="mt-3 md:mt-0 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  Resultado definido
                </div>
              `
              : `
                <div class="mt-3 md:mt-0 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  Aguardando resultado
                </div>
              `
          }
        </div>

        <div class="grid md:grid-cols-2 gap-6">

          <!-- PALPITE -->
          <div class="bg-slate-50 p-4 rounded-xl">

            <div class="font-semibold mb-4 text-slate-700">
              <i class="fas fa-user-edit mr-2"></i>
              Seu Palpite
            </div>

            <div class="flex items-center gap-3">

              <input
                id="ph-${game.id}"
                type="number"
                min="0"
                value="${palpite.homeScore}"
                placeholder="0"
                class="border border-slate-300 p-2 rounded-lg w-20 text-center font-bold"
              />

              <span class="font-bold text-xl">×</span>

              <input
                id="pa-${game.id}"
                type="number"
                min="0"
                value="${palpite.awayScore}"
                placeholder="0"
                class="border border-slate-300 p-2 rounded-lg w-20 text-center font-bold"
              />

              <button
                class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                onclick="submitPalpite(
                  '${bolao.id}',
                  ${game.id},
                  document.getElementById('ph-${game.id}').value,
                  document.getElementById('pa-${game.id}').value
                )">
                <i class="fas fa-save mr-1"></i>
                Salvar
              </button>
            </div>

            ${
              palpite.homeScore !== ''
                ? `
                  <div class="text-sm text-emerald-600 mt-3">
                    <i class="fas fa-check-circle mr-1"></i>
                    Palpite registrado
                  </div>
                `
                : ''
            }
          </div>

          <!-- RESULTADO -->
          <div class="${isOwner ? 'bg-indigo-50' : 'bg-slate-50'} p-4 rounded-xl">

            <div class="font-semibold mb-4 text-slate-700">
              <i class="fas fa-flag-checkered mr-2"></i>
              Resultado Final
            </div>

            ${
              isOwner
                ? `
                  <div class="flex items-center gap-3">

                    <input
                      id="rh-${game.id}"
                      type="number"
                      min="0"
                      value="${result.home ?? ''}"
                      placeholder="0"
                      class="border border-slate-300 p-2 rounded-lg w-20 text-center font-bold"
                    />

                    <span class="font-bold text-xl">×</span>

                    <input
                      id="ra-${game.id}"
                      type="number"
                      min="0"
                      value="${result.away ?? ''}"
                      placeholder="0"
                      class="border border-slate-300 p-2 rounded-lg w-20 text-center font-bold"
                    />

                    <button
                      class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                      onclick="setResult(
                        '${bolao.id}',
                        ${game.id},
                        document.getElementById('rh-${game.id}').value,
                        document.getElementById('ra-${game.id}').value
                      )">
                      Definir
                    </button>
                  </div>

                  <div class="text-sm text-slate-500 mt-3">
                    Apenas o organizador pode definir resultados.
                  </div>
                `
                : `
                  ${
                    result.home !== undefined
                      ? `
                        <div class="text-center py-4">
                          <div class="text-3xl font-bold text-slate-800">
                            ${result.home} × ${result.away}
                          </div>

                          <div class="text-sm text-slate-500 mt-2">
                            Resultado oficial
                          </div>
                        </div>
                      `
                      : `
                        <div class="text-slate-500 italic">
                          Resultado ainda não divulgado.
                        </div>
                      `
                  }
                `
            }
          </div>
        </div>
      </div>
    `;
  }

  return `
    <main class="max-w-5xl mx-auto p-6">

      <!-- TOPO -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">

        <div>
          <h1 class="text-3xl font-bold text-slate-800">
            ${bolao.name}
          </h1>

          <div class="flex gap-3 items-center mt-2 flex-wrap">

            <div class="bg-slate-100 px-3 py-1 rounded-full text-sm">
              Código:
              <span class="font-bold font-mono">
                ${bolao.id}
              </span>

              <button
                onclick="copyToClipboard('${bolao.id}')"
                class="ml-2 text-indigo-600 hover:text-indigo-800">
                <i class="fas fa-copy"></i>
              </button>
            </div>

            ${
              bolao.isPublic
                ? `
                  <div class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                    Público
                  </div>
                `
                : `
                  <div class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Privado
                  </div>
                `
            }
          </div>
        </div>

        <div class="flex gap-3 mt-4 md:mt-0">

          <button
            class="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg"
            onclick="setView('ranking')">
            <i class="fas fa-trophy mr-2"></i>
            Ranking
          </button>

          <button
            class="bg-slate-200 hover:bg-slate-300 px-5 py-2 rounded-lg"
            onclick="setView('feed')">
            Voltar
          </button>
        </div>
      </div>

      <!-- INFO -->
      <section class="bg-white p-6 rounded-xl shadow border border-slate-200 mb-8">

        <h2 class="text-xl font-bold mb-5">
          Informações do Bolão
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div class="bg-slate-50 p-4 rounded-lg">
            <div class="text-sm text-slate-500">
              Organizador
            </div>

            <div class="font-semibold mt-1">
              ${bolao.ownerEmail}
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <div class="text-sm text-slate-500">
              Participantes
            </div>

            <div class="font-semibold mt-1">
              ${bolao.participants.length}
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <div class="text-sm text-slate-500">
              Taxa
            </div>

            <div class="font-semibold mt-1">
              ${bolao.fee || 'Gratuito'}
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <div class="text-sm text-slate-500">
              Premiação
            </div>

            <div class="font-semibold mt-1">
              ${bolao.premiacao?.primeiro || '—'}
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <div class="text-sm text-slate-500">
              Jogos
            </div>

            <div class="font-semibold mt-1">
              ${bolao.games.length} partida(s)
            </div>
          </div>
        </div>
      </section>

      <!-- JOGOS -->
      <section class="space-y-6">
        ${bolao.games.map(game => renderGame(game)).join('')}
      </section>

      <!-- PARTICIPANTES -->
      <section class="bg-white p-6 rounded-xl shadow border border-slate-200 mt-10">

        <h2 class="text-xl font-bold mb-5">
          Participantes
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          ${bolao.participants.map(p => `
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-center gap-3">

              <div class="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">
                ${p.charAt(0).toUpperCase()}
              </div>

              <div>
                <div class="font-medium">
                  ${p}
                </div>

                <div class="text-xs text-slate-500">
                  ${p === bolao.ownerEmail ? 'Organizador' : 'Participante'}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>
  `;
}