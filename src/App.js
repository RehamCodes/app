
import Sidebar from "./component/Sidebar"
import Feet from "./component/Feet"
import Rightbar from "./component/Rightbar"
import Navbar from "./component/Navbar";
import Add from "./component/Add"
import { Box,createTheme,Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";


function App() {
const [mode,setMode] = useState("light");

  const darkTheme =createTheme({
    palette:{
      mode:mode,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
<Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feet/>
      <Rightbar/>
      </Stack>
      <Add/>
  
    </Box>
    </ThemeProvider>
      
    
    
  );
}

export default App;
