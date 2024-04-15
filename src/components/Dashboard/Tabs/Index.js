import React, {useState} from "react";
import Tab from "@mui/material/Tab";
import {createTheme, ThemeProvider } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./styles.css"


export default function TabsComponent({coins}) {
  const [value, setValue] = useState("Grid");
  const theme= createTheme({
    palette:{
        primary:{
main:"#3a80e9",
        },
    },
  })
  const style={
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight: 600,

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>
        <TabPanel value="Grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          {coins.map((item, i) => {
            return (
              <div key={i}>
                <img src={i.image} alt="" />
                <p>
                  {i + 1}, {item.current_price}
                </p>
              </div>
            );
          })}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
