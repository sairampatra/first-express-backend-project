// // src/config/minioClient.js
// import Minio from 'minio';
// import { MINIO_ACCESS_KEY, MINIO_SECRET_KEY, MINIO_ENDPOINT, MINIO_PORT } from './serverConfig.js';

// // Create a MinIO client using the credentials and configuration from the environment variables
// const minioClient = new Minio.Client({
//   endPoint: MINIO_ENDPOINT,   // MinIO server address (127.0.0.1 or hostname)
//   port: parseInt(MINIO_PORT), // Make sure the port is an integer (since process.env values are strings)
//   useSSL: false,              // If you are not using SSL (set true if using HTTPS)
//   accessKey: MINIO_ACCESS_KEY, // MinIO access key
//   secretKey: MINIO_SECRET_KEY  // MinIO secret key
// });

// export default minioClient;
