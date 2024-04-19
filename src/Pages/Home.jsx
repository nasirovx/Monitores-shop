import React, { useState } from 'react';
import s from '../Style/Home.module.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import CardItem from '../Components/CardItem';

const images = [
  'https://cdn1.ozone.ru/s3/multimedia-z/c600/6841711655.jpg',
  'https://ir.ozone.ru/s3/video-30/01HG03H49JYSEX50NSMG4DGAMM/cover/c1000/cover.jpg',
  'https://ir.ozone.ru/s3/video-38/01HRPAM0S8XNMHX08J6DW487WZ/cover/c1000/cover.jpg',
  'https://ir.ozone.ru/s3/video-31/01HG03JASP2SE1A4XFH9PXF003/cover/c1000/cover.jpg',
];

const Home = ({products}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };
  

  return (
    <div className={s.root}>
      <div className="container">
      {products && products.length == 0 ? (           
        <Box sx={{ maxWidth: 1450, height: 650, flexGrow: 1 }}>
            <img
              src={images[activeStep]}
              alt={`Image ${activeStep + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px', // Add border radius here
              }}
            />
            <MobileStepper
              style={{ marginTop: '-300px' }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  style={{ boxShadow: '0px 0px 10px 10px red', backgroundColor: 'red', borderRadius: "20px" }} // Add box shadow here
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  style={{ boxShadow: '0px 0px 10px 10px red', backgroundColor: 'red', borderRadius: "20px" }} // Add box shadow here
                >
                  Back
                </Button>
              }
            />
          </Box>) : (
                        <section id='section'>
                        <div className={s.section_title}>
                          <h3>Monitores</h3>
                        </div>
                        <div className={s.products}>
                          {products.map(elem => (
                            <CardItem {...elem}/>
                          ))}
                        </div>
                      </section>
          )}

      </div>
    </div>
  );
};

export default Home;
