import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const myConfig = {
    apiUrl: 'https://firebasestorage.googleapis.com/v0/b/threejs-be120.appspot.com/o/threejs-scene.json?alt=media&token=5681d972-4741-4a44-a069-4dcb74e41dd8',
    apiKey: 'your-api-key',
    // Other configuration variables
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __MY_CONFIG__: JSON.stringify(myConfig),
    }
})
