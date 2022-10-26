import React, {useState, useEffect} from "react";

import { Box, Typography } from "@mui/material";

import styles from "./Art.module.css";
import axios from "axios";


import CardNews from "../components/CardNews";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Art = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(()=>{
    const fetchDataNews = async()=>{
      try {
      const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=4K7ajLOBNSNFJ77BNN1xqFDS7h1ecEEP")
      setNewsData(response.data.results)  
      console.log(response.data.results)
    }catch(err){
      console.log("Error:", err)
    }
    }
    fetchDataNews()
  }
  ,[])
  return (
    <>
      <NavBar />
      <Box className={styles.boxy}>
        <Typography sx={{marginBottom: '1em' , marginTop: '0.5em'}} variant="h6" className={styles.boldText}>Art News</Typography>
        
         {
          newsData.map((news)=>{
            return <CardNews key={news.title} propsNews={news} />
          })
         }
      
      </Box>
      <Footer/>
    </>
  );
};

export default Art;