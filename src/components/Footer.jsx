import React from 'react'
import styles from './Footer.module.css'
import {
    Box,
    Typography,
  } from '@mui/material';
  
const Footer = () => {
  return (
    <Box className={styles.footer}>
        <Typography variant="h7">&copy; Muklis Rambe: 1523649113101-421 </Typography>
    </Box>
  )
}

export default Footer