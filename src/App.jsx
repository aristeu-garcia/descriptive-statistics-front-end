import Table from "./components/molecules/table";
import "./index.css";
import BarChart from "./components/molecules/barGraph";
import { init } from "./services/calcServices";
import List from "./components/molecules/list";
const { allDataTable, simpleFrequency } = init();

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-semibold text-white">
            Dashboard de Estatísticas
          </h1>
          <p className="mt-2 text-lg text-gray-400">Análise de Frequências</p>
        </header>
        <div className="flex flex-row w-full gap-x-8">
          <List label="Entrada" items={allDataTable.values || []} />
          <List label="Rol" items={allDataTable.sortedList || []} />
        </div>
        <BarChart barData={allDataTable} />
        <Table data={allDataTable} />
        <Table simpleFrequency={simpleFrequency} />
      </div>
    </div>
  );
}

export default App;
