import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const predictBailAmount = async (caseDetails) => {
  try {
    // CORRECTED MODEL CONFIGURATION
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",  // Verified production model name
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 2048
      }
    });

    // OPTIMIZED PROMPT FOR LEGAL ANALYSIS
    const prompt = `As a High Court Registrar with 15+ years experience in bail matters, analyze:
    
    CASE DETAILS:
    ${JSON.stringify(caseDetails, null, 2)}

    CONSIDER:
    1. IPC section severity (bailable/non-bailable)
    2. Accused's criminal antecedents
    3. Probability of witness tampering
    4. Local jurisdictional precedents
    5. Flight risk assessment

    RESPONSE FORMAT (STRICT JSON):
    {
      "amount": "number (INR)",
      "rationale": ["bullet point 1", "bullet point 2"],
      "confidence": "high/medium/low",
      "sectionsApplied": "string[]"
    }`;

    // API CALL WITH PROPER FORMATTING
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // IMPROVED RESPONSE PARSING
    const rawText = response.text();
    const jsonText = rawText
      .replace(/```json|```/g, '')
      .replace(/\n/g, '')
      .trim();

    return JSON.parse(jsonText);

  } catch (error) {
    // ENHANCED ERROR HANDLING
    console.error('Bail Prediction Error:', error);
    
    let userMessage = 'Prediction service unavailable';
    if (error.message.includes('quota')) {
      userMessage = 'Legal API quota exceeded';
    } else if (error.message.includes('404')) {
      userMessage = 'Legal model not found - system error';
    } else if (error.message.includes('400')) {
      userMessage = 'Invalid case details format';
    }

    throw new Error(`[Bail AI] ${userMessage}`);
  }
};