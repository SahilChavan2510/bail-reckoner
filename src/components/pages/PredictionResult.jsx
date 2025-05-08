import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { predictBailAmount } from '../../services/gemini';

export default function PredictionResult({ data }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const result = await predictBailAmount(data);
        setPrediction(result);
      } catch (error) {
        console.error('Prediction failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [data]);

  return (
    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Bail Prediction Result</Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4" sx={{ my: 2 }}>
            ₹{prediction?.predictedAmount || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Rationale:</strong> {prediction?.rationale || 'No rationale provided'}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Confidence:</strong> {prediction?.confidence || 'unknown'}
          </Typography>
        </>
      )}
    </Box>
  );
}
