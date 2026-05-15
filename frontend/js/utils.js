function uid(len = 6) {
  return Math.random()
    .toString(36)
    .slice(2, 2 + len)
    .toUpperCase();
}

function getLoggedUser() {
  return state.userSession;
}

function setView(view) {
  state.view = view;

  render();
}

function setCurrentBolao(id) {
  state.currentBolaoId = id;

  setView('bolao');
}

function toggleBusinessView() {
  state.businessVisible = !state.businessVisible;

  render();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  showToast('Código copiado!');
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');

  if (!toastContainer) return;

  const toast = document.createElement('div');

  toast.className = `
    mb-3 px-4 py-3 rounded-lg shadow-lg text-white font-medium
    ${type === 'error'
      ? 'bg-red-500'
      : 'bg-emerald-500'}
  `;

  toast.innerHTML = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'transition');

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

function showModal(content) {
  const modal = document.getElementById('modal-container');

  modal.innerHTML = `
    <div 
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onclick="closeModal()"
    >
      <div
        class="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
        onclick="event.stopPropagation()"
      >
        ${content}
      </div>
    </div>
  `;
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

function header() {
  const user = getLoggedUser();

  return `
    <header class="bg-white border-b border-slate-200 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
            text-white flex items-center justify-center text-xl font-bold">
            ⚽
          </div>

          <div>
            <div class="font-bold text-slate-800 text-lg">
              BolãoPRO
            </div>

            <div class="text-xs text-slate-500">
              Sistema de Bolões
            </div>
          </div>
        </div>

        ${
          user
            ? `
              <div class="flex items-center gap-3">

                <button
                  onclick="toggleBusinessView()"
                  class="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Modelo de Negócio
                </button>

                <div class="text-sm text-slate-600 hidden md:block">
                  ${user.name}
                </div>

                <button
                  onclick="logout()"
                  class="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                >
                  Sair
                </button>
              </div>
            `
            : ''
        }

      </div>
    </header>
  `;
}