import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.primary.dark,
      marginTop: -2,
   },
}));

const ServiceItem = ({ title, content, icon }) => {
   return (
      <>
         <Box>
            <img src={icon} alt='' />
         </Box>
         <Box>
            <Typography>{title}</Typography>

            <Typography>{content}</Typography>
         </Box>
      </>
   );
};

const Services = () => {
   const classes = useStyles();

   return (
      <Container>
         <Box className={classes.root}>
            <Swiper
               slidesPerView={4}
               pagination={{ clickable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
            >
               <SwiperSlide>
                  <ServiceItem
                     title='GIAO HÀNG TOÀN QUỐC'
                     content='Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ'
                     icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070'
                  />
               </SwiperSlide>
            </Swiper>
         </Box>
      </Container>
   );
};

export default Services;
