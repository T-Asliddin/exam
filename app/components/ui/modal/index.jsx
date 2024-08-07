"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInValidationSChame } from "@/app/utils/validation";
import auth from "@/service/auth.service";
import { saveAccessToken } from "@/helpers/auth-helpers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, toggle }) {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);

    try {
      const response = await auth.sigIn(values);
      if (response.status === 200) {
        console.log(response);
        saveAccessToken(response.data.access_token);
        toggle();
        window.location.reload()
      }
    } catch (error) {}
  };
  return (
    <div>
      <Modal
        className="pt-[200px]"
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-semibold text-[36px]">Вход в аккаунт</h1>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={signInValidationSChame}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="email"
                    type="email"
                    as={TextField}
                    label="Eamil"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-[red] text-[15px]"
                      />
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p className="flex justify-end mb-[30px]">Забыли пароль ?</p>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    fullWidth
                    className="bg-[#FBD029] px-[10px] py-3 rounded-[5px] mt-5 text-[16px] text-[#000] "
                  >
                    {isSubmitting ? "Submitting" : "Войти"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
