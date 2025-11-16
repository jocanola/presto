import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  // timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = getSaveData("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {}
// );

// api.interceptors.response.use(
//   (response) => response,

//   async (error: AxiosError) => {
//     if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
//       ToastMessage(
//         "Connection took too long to respond. Please check your internet connection and try again.",
//         "warning"
//       );
//     }
//     if (
//       error.response?.status === 401 &&
//       error.config &&
//       !error.config?.__isRetryRequest
//     ) {
//       try {
//         // Mark the request as a retry attempt
//         error.config.__isRetryRequest = true;

//         // Request a new accessToken using refreshToken
//         const newAccessToken = await refreshAccessToken();
//         storeData("token", newAccessToken);
//         error.config.headers.Authorization = `Bearer ${newAccessToken}`;

//         // Retry the original request with the new token
//         return api(error.config);
//       } catch (refreshError) {
//         // Log out the user and navigate to the authentication page
//         storeData("token", "");
//         storeData("refreshToken", "");
//         const navigation =
//           require("@react-navigation/native").NavigationContainerRef;
//         navigation.navigate("Authentication"); // Redirect to authentication page
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
// );

// Refresh token function
// const refreshAccessToken = async () => {
//   const refreshToken = getSaveData("refreshToken");
//   try {
//     const response = await axios.post(`${env.API_URL}/auth/refreshToken`, {
//       refreshToken,
//     });
//     const accessToken = response.data.data.accessToken;
//     return accessToken;
//   } catch (error) {
//     // navigate(SCREENS.UNAUTHENTICATION);
//     // throw new Error('Failed to refresh token');
//   }
// };

export default api;
