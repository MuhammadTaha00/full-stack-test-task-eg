import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../api/axios-config";
import { AxiosError } from "axios";

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await api.post("/auth/signIn", data);
      const { accessToken } = response.data;

      localStorage.setItem("token", accessToken);
      toast.success("Sign in successful");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box p={2}>
          <Typography
            variant="h5"
            style={{ marginBottom: "20px", color: "#007bff" }}
          >
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Email is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      type="email"
                      label="Email"
                      {...field}
                      fullWidth
                      style={{ background: "#fff", marginBottom: "10px" }}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Password is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      type="password"
                      label="Password"
                      {...field}
                      fullWidth
                      style={{ background: "#fff", marginBottom: "10px" }}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </form>
          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "20px" }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
