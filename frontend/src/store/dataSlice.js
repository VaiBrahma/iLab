import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      _id: "6544cf3122956f28dc022f3a",
      booking_id: 6064573,
      customer_name: "N KK Mohanty",
      collection_date: "2023-11-03 00:00:00 UTC",
      booking_date: "2023-11-01 00:00:00 UTC",
      lead_id: 5668647,
      uhid: 5190829,
      useruuid: "98a9503a-d78f-4b8b-8543-4b55d26a4457",
      test_id: 5635,
      test_code: "PL94",
      test_name: "Liver Function Test (LFT)",
      test_values: [
        {
          test_method: "Photometric",
          test_parameter_id: 7052155,
          parameter_name: "BILIRUBIN TOTAL",
          parameter_value: "0.4",
          is_highlighted: false,
          lower_bound: "0.2",
          display_value: "0.2 - 1.2",
          upper_bound: "1.2",
          impression: "N",
          unit: "mg/dL",
          "  ": "392",
        },
      ],
      created_at: "2023-11-03 10:45:03.711 UTC",
      updated_at: "2023-11-03 10:45:03.711 UTC",
      __hevo_id:
        "80cf4f6983ce1c7d8906cc83083c10911cb22437675b2f9152b94609f9c561b0",
      __hevo__ingested_at: 1699008614494,
      __hevo__loaded_at: 1699021932207,
      __hevo__marked_deleted: false,
      __hevo__source_modified_at: 1699008303000,
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      const data = action.payload;
      console.log('action payload from data is: ', action);
      state.data.push(data);
    },
    removeData: (state, action) => {
      state.data = state.data.filter((data) => data._id !== action.payload);
    },
  },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;