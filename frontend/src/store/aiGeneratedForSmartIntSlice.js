import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aiGeneratedForSmartInt : 
  [
    {
      "detail": "A deficiency in Hemoglobin can cause anemia, which is a condition in which the blood does not have enough healthy red blood cells. Symptoms of anemia can include fatigue, weakness, shortness of breath, and pale skin. Anemia can be caused by a variety of factors, including blood loss, iron deficiency, and certain chronic diseases. Treatment for anemia typically involves addressing the underlying cause and increasing iron intake."
    },
  ]
};

const aiGeneratedForSmartIntSlice = createSlice({
  name: "aiGeneratedForSmartInt",
  initialState,
  reducers: {
    addAiGeneratedForSmartInt: (state, action) => {
      const aiGeneratedForSmartInt = action.payload;
      console.log('action payload from aiGeneratedForSmartInt is: ',action);
      state.aiGeneratedForSmartInt.push(aiGeneratedForSmartInt);
    },
  },
});

export const { addAiGeneratedForSmartInt } = aiGeneratedForSmartIntSlice.actions;

export default aiGeneratedForSmartIntSlice.reducer;