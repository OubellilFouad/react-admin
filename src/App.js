import { colorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/topBar";
import Sidebar from "./scenes/global/sideBar";
// import { Dashboard } from "./scenes/dashboard";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
import Form from "./scenes/form/index";
import Calendar from "./scenes/calendar";
// import { Bar } from "./scenes/bar";
// import { Line } from "./scenes/line";
// import { Pie } from "./scenes/pie";
// import { FAQ } from "./scenes/faq";
// import { Geo } from "./scenes/geo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geo" element={<Geo/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
