import { Form, Route, Routes } from "react-router-dom";
import Klient from "../components/UI/Klient/Klient";
import { Recommend } from "@mui/icons-material";
import Otziv from "../components/UI/Otziv/Otziv";
import Potok from "../components/UI/Potok/Potok";
import Bizness from "../components/UI/Bizness/Bizness";
import Footer from "../components/Footer/Footer";

const Router = () => {
  return (
    <Routes>
      <Route path="#klient" Component={<Klient />} />
      <Route path="#contact" Component={<Form />} />
      <Route path="#recommend" Component={<Recommend />} />
      <Route path="#otziv" Component={<Otziv />} />
      <Route path="#potok" Component={<Potok />} />
      <Route path="#bizness" Component={<Bizness />} />
      <Route path="#footer" Component={<Footer />} />
    </Routes>
  );
};

export default Router;
