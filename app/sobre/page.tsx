import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-red-900 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yellow-200">
            Sobre nós
          </h1>

          <p className="mt-3 text-yellow-400">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/Sobre-restaurante.png"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-100 w-full object-cover"
            />
          </div>

          <div className="border rounded-2xl bg-yellow-100 p-8 shadow-lg">

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes selecionados e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              A história do Eduardo É Lanche nasceu da personalidade irreverente de Eduardo. Sua homossexualidade inspirou a ideia de criar uma marca autêntica, divertida e acolhedora. Sua antiga profissão como garoto de programa também contribuiu para sua confiança, comunicação e criatividade, ajudando a formar a identidade ousada do restaurante.

            “Eduardo É Lanche — Sabor que faz memórias.”
            </p>
            </div>
            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-yellow-200 p-4 text-center shadow-sm">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-yellow-200 p-4 text-center shadow-sm">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-yellow-200 p-4 text-center shadow-sm">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Programa
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}