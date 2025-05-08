import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import FIRDetails from './FIRDetails';
import HearingDetails from './HearingDetails';
import PredictionResult from './PredictionResult';

const steps = ['FIR Details', 'Hearing Details', 'Bail Prediction'];

export default function NewCase() {
  const [activeStep, setActiveStep] = useState(0);
  const [caseData, setCaseData] = useState({});

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const updateCaseData = (newData) => {
    setCaseData({ ...caseData, ...newData });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
      <Typography variant="h4" gutterBottom>New Case Entry</Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === 0 && <FIRDetails data={caseData} onUpdate={updateCaseData} />}
      {activeStep === 1 && <HearingDetails data={caseData} onUpdate={updateCaseData} />}
      {activeStep === 2 && <PredictionResult data={caseData} />}
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setActiveStep(0)}>
            Start New Case
          </Button>
        )}
      </Box>
    </Box>
  );
}
