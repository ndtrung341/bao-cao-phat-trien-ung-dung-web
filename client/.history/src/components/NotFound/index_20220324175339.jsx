import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from 'assets/img/404.png';
const NotFound = () => {
   return (
      <Box>
         <Container maxWidth='lg'>
            <Grid container>
               <Grid item md={3}>
                  <img src={img} alt='' width='100%' />
               </Grid>
               <Grid item md={9}>
                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                     }}
                  >
                     <Typography variant='h4' align='center'>
                        Rất tiếc!
                        <br />
                        Chúng tôi không tìm thấy trang mà bạn yêu cầu
                     </Typography>
                     <Button variant='contained' mt={3}>
                        Về trang chủ
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default NotFound;