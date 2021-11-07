import Barchart from "components/BarChart";
import DataTable from "components/DataTable/index.";
import Donutchart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/Navbar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashoard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%) </h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas Vendas</h5>
            <Donutchart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas Vendas</h2>


        </div>


        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
