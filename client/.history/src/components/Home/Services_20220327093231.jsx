import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: '-20px',
   },
   wrapper: {
      backgroundColor: '#3f3fdb',
      padding: theme.spacing(2),
   },
   item: {
      padding: theme.spacing(0, 1),
      '& .icon': {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      },
      '& .content': {
         color: '#fff',
         marginTop: theme.spacing(2),
      },
   },
}));

const ServiceItem = ({ title, description, icon }) => {
   return (
      <>
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={icon} alt='' />
         </Box>
         <Box mt={2}>
            <Typography variant='subtitle1' color='white' align='center'>
               {title}
            </Typography>

            <Typography variant='caption' color='white' align='center' component={'p'}>
               {description}
            </Typography>
         </Box>
      </>
   );
};

const Services = () => {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <Container>
            <Box className={classes.wrapper}>
               <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
               >
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        description='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        description='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        description='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='GIAO HÀNG TOÀN QUỐC'
                        description='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                     />
                  </SwiperSlide>
               </Swiper>
            </Box>
         </Container>
      </Box>
   );
};

export default Services;
