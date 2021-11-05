import BarChart from "componentes/BarChart";
import DataTable from "componentes/DataTable";
import DonutChart from "componentes/DonutChart";
import Footer from "componentes/Footer";
import NavBar from "componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
            <BarChart />

          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas vendas</h5>
            <DonutChart />

          </div>

        </div>
    <div className="py-3">
      <h2 className="text-primary">Todas Vendas</h2>
    </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
