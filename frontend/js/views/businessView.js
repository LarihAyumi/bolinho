function businessModelView() {
  return `
    <section class="max-w-5xl mx-auto mt-10 px-4 mb-20">

      <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">

        <div class="mb-8">
          <h2 class="text-3xl font-bold text-slate-800">
            <i class="fas fa-chart-line mr-2 text-indigo-600"></i>
            Modelo de Negócio
          </h2>

          <p class="text-slate-600 mt-3">
            Esta seção apresenta uma visão estratégica de como a plataforma
            de bolões pode gerar receita, crescer e se transformar em um
            produto comercial completo.
          </p>
        </div>

        <div class="space-y-8">

          <!-- PREMIUM -->
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 p-6 rounded-2xl">

            <div class="flex items-start gap-4">

              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-xl">
                <i class="fas fa-crown"></i>
              </div>

              <div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">
                  1. Contas Premium
                </h3>

                <p class="text-slate-600 mb-4">
                  Usuários podem assinar planos premium para desbloquear
                  funcionalidades exclusivas.
                </p>

                <ul class="list-disc ml-6 text-slate-700 space-y-2">
                  <li>Criar bolões ilimitados</li>
                  <li>Mais participantes por bolão</li>
                  <li>Exportação de rankings em PDF/Excel</li>
                  <li>Personalização visual dos bolões</li>
                  <li>Estatísticas avançadas</li>
                </ul>

                <div class="mt-4 text-sm text-slate-500">
                  <i class="fas fa-lightbulb mr-1"></i>
                  Sugestão de preço: R$9,90/mês
                </div>
              </div>
            </div>
          </div>

          <!-- TAXAS -->
          <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 p-6 rounded-2xl">

            <div class="flex items-start gap-4">

              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center text-xl">
                <i class="fas fa-percentage"></i>
              </div>

              <div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">
                  2. Taxas sobre Bolões
                </h3>

                <p class="text-slate-600 mb-4">
                  A plataforma pode cobrar pequenas taxas administrativas
                  sobre bolões pagos.
                </p>

                <ul class="list-disc ml-6 text-slate-700 space-y-2">
                  <li>5% sobre o valor arrecadado</li>
                  <li>Taxas fixas para bolões grandes</li>
                  <li>Integração com Mercado Pago e Pix</li>
                  <li>Carteira digital temporária</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- PATROCÍNIOS -->
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 p-6 rounded-2xl">

            <div class="flex items-start gap-4">

              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center text-xl">
                <i class="fas fa-handshake"></i>
              </div>

              <div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">
                  3. Patrocínios e Parcerias
                </h3>

                <p class="text-slate-600 mb-4">
                  Empresas podem divulgar marcas e produtos dentro
                  dos bolões públicos.
                </p>

                <ul class="list-disc ml-6 text-slate-700 space-y-2">
                  <li>Bolões patrocinados</li>
                  <li>Cupons de desconto</li>
                  <li>Prêmios promocionais</li>
                  <li>Publicidade segmentada</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- MARKETPLACE -->
          <div class="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 p-6 rounded-2xl">

            <div class="flex items-start gap-4">

              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white flex items-center justify-center text-xl">
                <i class="fas fa-store"></i>
              </div>

              <div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">
                  4. Marketplace de Prêmios
                </h3>

                <p class="text-slate-600 mb-4">
                  Loja integrada para compra de prêmios e recompensas.
                </p>

                <ul class="list-disc ml-6 text-slate-700 space-y-2">
                  <li>Vale-presentes</li>
                  <li>Produtos oficiais</li>
                  <li>Serviços premium</li>
                  <li>Comissão sobre vendas</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- FASES -->
          <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl">

            <h3 class="text-xl font-bold text-slate-800 mb-5">
              <i class="fas fa-rocket mr-2"></i>
              Etapas de Crescimento
            </h3>

            <div class="grid md:grid-cols-3 gap-5">

              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <div class="text-sm font-bold text-emerald-600 mb-2">
                  FASE 1
                </div>

                <div class="font-semibold text-slate-800">
                  MVP
                </div>

                <div class="text-sm text-slate-600 mt-2">
                  Crescimento orgânico e validação do produto.
                </div>
              </div>

              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <div class="text-sm font-bold text-amber-600 mb-2">
                  FASE 2
                </div>

                <div class="font-semibold text-slate-800">
                  Monetização
                </div>

                <div class="text-sm text-slate-600 mt-2">
                  Assinaturas premium e bolões pagos.
                </div>
              </div>

              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <div class="text-sm font-bold text-indigo-600 mb-2">
                  FASE 3
                </div>

                <div class="font-semibold text-slate-800">
                  Escala
                </div>

                <div class="text-sm text-slate-600 mt-2">
                  Marketplace, expansão e internacionalização.
                </div>
              </div>
            </div>
          </div>

          <!-- OBS -->
          <div class="bg-slate-100 border border-slate-200 rounded-xl p-5 text-center">

            <div class="text-slate-600">
              <i class="fas fa-info-circle mr-1"></i>

              Esta área representa uma demonstração conceitual
              de monetização do sistema.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}