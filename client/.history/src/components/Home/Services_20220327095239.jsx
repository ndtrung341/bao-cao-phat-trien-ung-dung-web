import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
      marginTop: '-30px',
      zIndex: 1,
      marginBottom: theme.spacing(3),
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
         textAlign: 'center',
      },
   },
}));

const ServiceItem = ({ title, description, icon }) => {
   const classes = useStyles();

   return (
      <Box className={classes.item}>
         <Box className='icon'>
            <img src={icon} alt='' />
         </Box>
         <Box mt={2} className='content'>
            <Typography variant='subtitle1'>{title}</Typography>

            <Typography variant='caption' component={'p'}>
               {description}
            </Typography>
         </Box>
      </Box>
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
                        title='Hỗ trợ online 24/24'
                        description='Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_2.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='Đổi hàng dễ dàng'
                        description='Miễn phí đổi trả trong vòng 30 ngày đầu tiên cho tất cả các mặt hàng'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_3.svg?1646877276070'
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        title='Quà tặng hấp dẫn'
                        description='Chương trình khuyễn mãi cực lớn và hấp dẫn hàng tháng'
                        icon='https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_4.svg?1646877276070'
                     />
                  </SwiperSlide>
               </Swiper>
            </Box>
         </Container>
      </Box>
   );
};

export default Services;
