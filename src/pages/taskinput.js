import React, { useState } from 'react';
import Head from 'next/head';
import Api from 'src/api';
import { Box, Container, TextField, Typography, Button, CircularProgress, Snackbar } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSnackbar,setShowSnackbar] = useState(false);
  const formik = useFormik({
    initialValues: {
      taskDescription: '',
    },
    validationSchema: Yup.object().shape({
      taskDescription: Yup.string().required('Task Description is required'),
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        await Api.post('task/initialize', {
          description: values.taskDescription
        });
        setSuccess(true);
        helpers.resetForm();
      } catch (err) {
        setSuccess(false);
      } finally {
        setLoading(false);
        setShowSnackbar(true);
      }
    }
  }); 
  return (
    <>
      <Head>
        <title>Task Input</title>
      </Head>
      <Box component="main" 
        sx={{ 
          flexGrow: 1, py: 8 
        }}>
        <Container maxWidth="xl">
          <Typography variant="h4" 
            align="center"
          >
            Input your task
          </Typography>
            <Box
             sx={{ pt: 3 }}
            >
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <TextField 
                  fullWidth 
                  label="Task Description" 
                  multiline 
                  minRows={10}
                  name="taskDescription" 
                  value={formik.values.taskDescription} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  error={formik.touched.taskDescription && Boolean(formik.errors.taskDescription)}
                  helperText={formik.touched.taskDescription && formik.errors.taskDescription} 
                />
                {loading ? (
                <CircularProgress size={30} />
                ) : (
                  <Button
                    width="30%"
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Create Task
                  </Button>
                )}
              </form>
            </Box>
        </Container>
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message={success ? 'Successfully created!' : 'There was an error.'}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      />
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Page;