import Header from "../components/Header";
import "../styles/Home.css"
import DynamicTable from "../components/Table";

const Home = () => {
    return (
      <div className="homescreen">
        <Header />
        <h1 className="Title">Welcome</h1>
        <DynamicTable />
      </div>
    );
  };
  
  export default Home;