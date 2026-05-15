function createView() {
  return `
    <main class="max-w-3xl mx-auto px-4 py-10">

      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

        <div class="mb-8">
          <h1 class="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <i class="fas fa-plus-circle text-indigo-600"></i>
            Criar Bolão
          </h1>

          <p class="text-slate-500 mt-2">
            Dê um nome ao seu bolão e compartilhe o código com seus amigos.
          </p>
        </div>

        <div class="space-y-6">

          <!-- Nome -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">
              Nome do Bolão
            </label>

            <input
              id="bolaoName"
              class="w-full border border-slate-300 px-4 py-3 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     focus:border-indigo-500 transition"
              placeholder="Ex: Bolão Copa 2026"
            />
          </div>

          <!-- Botões -->
          <div class="flex flex-col md:flex-row gap-4 pt-4">

            <button
              class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600
                     text-white py-3 rounded-xl font-semibold
                     hover:opacity-90 transition shadow-md"
              onclick="createBolao({
                name: document.getElementById('bolaoName').value
              })">

              <i class="fas fa-check mr-2"></i>
              Criar Bolão
            </button>

            <button
              class="px-6 py-3 rounded-xl bg-slate-200 text-slate-700
                     hover:bg-slate-300 transition font-medium"
              onclick="setView('feed')">

              <i class="fas fa-arrow-left mr-2"></i>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
}