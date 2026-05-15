function joinView() {
  return `
    ${header()}
    <main class="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">
          <div class="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4">
            <i class="fas fa-ticket-alt"></i>
          </div>
          <h1 class="text-3xl font-bold">Entrar em Bolão</h1>
          <p class="mt-2 text-indigo-100">Digite o código do bolão para participar</p>
        </div>

        <div class="p-8">
          <div class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                <i class="fas fa-hashtag mr-2 text-indigo-600"></i>Código do bolão
              </label>
              <input
                id="joinCode"
                type="text"
                placeholder="Ex: ABC123"
                class="w-full border border-slate-300 rounded-xl px-4 py-3 uppercase
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                       outline-none transition tracking-widest text-lg font-bold text-center"
                oninput="this.value = this.value.toUpperCase()"
              />
            </div>

            <button
              class="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                     hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg transition"
              onclick="joinBolaoByCode(document.getElementById('joinCode').value.trim())">
              <i class="fas fa-sign-in-alt mr-2"></i>Entrar no Bolão
            </button>

            <button
              class="w-full border border-slate-300 text-slate-600 py-3 rounded-xl
                     font-semibold hover:bg-slate-50 transition"
              onclick="setView('feed')">
              <i class="fas fa-arrow-left mr-2"></i>Voltar
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
}
