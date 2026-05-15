function calculateRanking(bolao) {
  const ranking = [];

  bolao.participants.forEach(email => {
    let points = 0;
    let exact = 0;
    let winner = 0;

    const palpites = bolao.palpites[email] || {};

    bolao.games.forEach(game => {
      const result = game.scores;
      const palpite = palpites[game.id];

      if (!palpite || result.home === undefined) {
        return;
      }

      const exactMatch =
        palpite.homeScore === result.home &&
        palpite.awayScore === result.away;

      if (exactMatch) {
        points += 3;
        exact++;
      } else {
        const predictedWinner =
          palpite.homeScore > palpite.awayScore
            ? 'home'
            : palpite.homeScore < palpite.awayScore
            ? 'away'
            : 'draw';

        const realWinner =
          result.home > result.away
            ? 'home'
            : result.home < result.away
            ? 'away'
            : 'draw';

        if (predictedWinner === realWinner) {
          points += 1;
          winner++;
        }
      }
    });

    ranking.push({
      name: email,
      points,
      exact,
      winner
    });
  });

  ranking.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    return b.exact - a.exact;
  });

  return ranking;
}

function rankingView() {
  const bolao = database.baloes.find(
    b => b.id === state.currentBolaoId
  );

  const ranking = calculateRanking(bolao);

  return `
    <main class="max-w-5xl mx-auto p-6">

      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold">
            Ranking
          </h1>

          <p class="text-slate-500 mt-1">
            ${bolao.name}
          </p>
        </div>

        <button
          class="bg-slate-200 px-4 py-2 rounded-lg"
          onclick="setView('bolao')">
          Voltar
        </button>
      </div>

      <div class="bg-white rounded-xl shadow overflow-hidden">

        <table class="w-full">
          <thead class="bg-slate-100">
            <tr>
              <th class="text-left p-4">#</th>
              <th class="text-left p-4">Participante</th>
              <th class="text-center p-4">Pontos</th>
              <th class="text-center p-4">Exatos</th>
              <th class="text-center p-4">Vencedor</th>
            </tr>
          </thead>

          <tbody>
            ${ranking.map((r, i) => `
              <tr class="border-t">

                <td class="p-4 font-bold">
                  ${i + 1}º
                </td>

                <td class="p-4">
                  ${r.name}
                </td>

                <td class="p-4 text-center font-bold text-indigo-600">
                  ${r.points}
                </td>

                <td class="p-4 text-center">
                  ${r.exact}
                </td>

                <td class="p-4 text-center">
                  ${r.winner}
                </td>

              </tr>
            `).join('')}
          </tbody>
        </table>

      </div>
    </main>
  `;
}