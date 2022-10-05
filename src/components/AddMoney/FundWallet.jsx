import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function FundWallet() {
 const navigate = useNavigate()
  const [paymentDetails, setPaymentDetails] = React.useState({
    amount: "",
    email: "",
  });
  const[token , setToken] = React.useState("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiZW5AZ21haWwuY29tIiwiZXhwIjoxNjY0OTcxNjI2LCJpYXQiOjE2NjQ5MzU2MjZ9.YvxW5dBEM6IVJVkGk8gvHSOgkFp7TEJTKpOkhFXHX0A")
    const processPayment = (e) => {
        e.preventDefault()
      console.log(paymentDetails)
      axios.post('http://localhost:2020/api/make-payment', paymentDetails, { headers: { "Authorization": `Bearer ${token}` } })
      .then(response => {
        console.log(response.data.data.authorization_url)
       navigate(`${response.data.data.authorization_url}`)
    })
    }
  
  // useEffect(() => {
    
    
  // }, [])
  return (
    <>
      <Typography
        variant="h4"
        textAlign="left"
        sx={{ ml: 51, mt: 20, fontSize: "24px" }}
      >
        Fund Your Wallet
      </Typography>
      <Grid container maxWidth="md" sx={{ ml: 50, mt: 5 }}>
        <form onSubmit={processPayment}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="Email"
              fullWidth
              value={paymentDetails.email}
              color="success"
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, email: e.target.value })
                  
              }
              required={true}
            />
            <TextField
              id="filled-basic"
              label="Amount"
              color="success"
              value={paymentDetails.amount}
              fullWidth
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, amount: e.target.value })
              }
              required={true}
            />
          </Box>

          <Button
            variant="contained"
            color="success"
            sx={{ width: "58%", ml: 1, mt: 3 }}
                      endIcon={<SendIcon />}
                      type="submit"
          >
            Fund
          </Button>
        </form>
      </Grid>
    </>
  );
}

export default FundWallet;
