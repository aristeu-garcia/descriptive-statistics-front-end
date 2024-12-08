export default function Table({ data = [], simpleFrequency = [] }) {
  if (simpleFrequency.frequency?.length)
    return (
      <div className="overflow-x-auto bg-tekhelet p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-white mb-4">
          Tabela de Frequência Simples
        </h1>
        <div className="relative max-h-[400px] overflow-y-auto">
          <table className="min-w-full table-auto text-sm text-left text-gray">
            <thead className="bg-gradient-to-r from-tekhelet to-tekheletSecond text-white">
              <tr>
                <th className="px-6 py-4 font-semibold text-center sticky top-0 z-10 bg-gradient-to-r from-tekhelet to-tekheletSecond">
                  Valor
                </th>
                <th className="px-6 py-4 font-semibold text-center sticky top-0 z-10 bg-gradient-to-r from-tekhelet to-tekheletSecond">
                  Frequência Simples
                </th>
              </tr>
            </thead>

            <tbody>
              {simpleFrequency.frequency.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-tekheletSecond hover:bg-tekheletSecond transition-colors"
                >
                  <td className="px-6 py-4 text-center text-white">
                    {item.value}
                  </td>
                  <td className="px-6 py-4 text-center text-white">
                    {item.frequency}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-gradient-to-r from-tekheletSecond to-tekhelet text-white sticky bottom-0">
              <tr>
                <td className="px-6 py-4 font-semibold text-center">Total</td>
                <td className="px-6 py-4 text-center">
                  {simpleFrequency.total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );

  return (
    <div className="overflow-x-auto bg-tekhelet p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-white mb-4">
        Tabela de Frequências
      </h1>
      <table className="min-w-full table-auto text-sm text-left text-gray">
        <thead className="bg-gradient-to-r from-tekhelet to-tekheletSecond text-white">
          <tr>
            <th className="px-6 py-4 font-semibold text-center">Classe</th>
            <th className="px-6 py-4 font-semibold text-center">Intervalo</th>
            <th className="px-6 py-4 font-semibold text-center">
              Ponto Médio da Classe (Pm)
            </th>
            <th className="px-6 py-4 font-semibold text-center">
              Frequência Absoluta (F)
            </th>
            <th className="px-6 py-4 font-semibold text-center">
              Frequência Acumulada (Fa)
            </th>
            <th className="px-6 py-4 font-semibold text-center">
              Frequência Relativa (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.table.map((item, index) => (
            <tr
              key={index}
              className="border-b border-tekheletSecond hover:bg-tekheletSecond transition-colors"
            >
              <td className="px-6 py-4 text-center text-white">{item.class}</td>
              <td className="px-6 py-4 text-gray">{item.values}</td>
              <td className="px-6 py-4 text-center text-white">
                {item.classMiddlePoint}
              </td>
              <td className="px-6 py-4 text-center text-white">
                {item.absoluteFrequency}
              </td>
              <td className="px-6 py-4 text-center text-gray">
                {item.cumulativeFrequency}
              </td>
              <td className="px-6 py-4 text-center text-olivine">
                {(item.relativeFrequency * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-6 py-4 font-semibold text-center text-white">
              Total
            </td>
            <td className="px-6 py-4 text-center text-gray"></td>
            <td className="px-6 py-4 text-center text-gray"></td>
            <td className="px-6 py-4 font-semibold text-center text-olivine">
              {data.table.absoluteFrequencyTotal}
            </td>
            <td className="px-6 py-4 text-center text-gray"></td>
            <td className="px-6 py-4 text-center text-olivine">
              {data.table.relativeFrequencyTotal}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
