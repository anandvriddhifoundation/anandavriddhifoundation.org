// import { defineConfig } from '@hey-api/openapi-ts';
import { defineConfig } from '@hey-api/openapi-ts'

const config = defineConfig({
  client: 'fetch',
  exportCore: true,
  input: 'http://127.0.0.1:8000/openapi.json',
  // name: 'Backend',
  output: {
    path: 'src/client',
    format: 'prettier'
  },
  services: {
    export: true
  },
  types: {
    enums: 'javascript',
    dates: false
  }
});


export default config;