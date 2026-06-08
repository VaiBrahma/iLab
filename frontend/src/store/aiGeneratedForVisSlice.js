import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aiGeneratedForVis : 
    [
        {
            "body_part": "Blood",
            "problem": "Anemia, a condition where the blood lacks sufficient healthy red blood cells to carry oxygen to the body's tissues, can result in fatigue, weakness, shortness of breath, and pale skin.",
            "reason": "Inadequate iron, vitamin B12, or folate intake, or a problem with the body's absorption or use of these nutrients.",
            "tips": ["Increase intake of iron-rich foods like red meat, spinach, and fortified cereals.", "Consume foods rich in vitamin B12, such as fish, poultry, and dairy products.", "Include folate-rich foods like leafy green vegetables, beans, and citrus fruits in the diet."]
        },
    ]
};

const aiGeneratedForVisSlice = createSlice({
  name: "aiGeneratedForVis",
  initialState,
  reducers: {
    addAiGeneratedForVis: (state, action) => {
      const aiGeneratedForVis = action.payload;
      console.log('action payload from aiGeneratedForVis is: ',action);
      state.aiGeneratedForVis.push(aiGeneratedForVis);
    },
  },
});

export const { addAiGeneratedForVis } = aiGeneratedForVisSlice.actions;

export default aiGeneratedForVisSlice.reducer;