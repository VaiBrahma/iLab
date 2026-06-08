import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy:{
  //     '/api': "https://ilab-mk18.onrender.com",
  //   }
  // },
  plugins: [react()],
})
