import axios from "axios";
import * as LogInterceptor from "./log";
import AppConfig from "../utils/AppConfig";
import ApiHelper from "../utils/ApiHelper";
import BaseResponse from "../model/BaseResponse";

const apiClient = axios.create({
  baseURL: AppConfig.baseURL,
  responseType: "json",
  withCredentials: true,
  timeout: 20000,
});

apiClient.interceptors.request.use(
  config => LogInterceptor.requestLog(config),
  error => LogInterceptor.requestError(error),
);

apiClient.interceptors.response.use(
  response => LogInterceptor.responseLog(response),
  error => LogInterceptor.responseError(error),
);

function setAccessToken(accessToken?: string) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken || ""}`;
}

function addOnUnAuthorizeListener(onUnAuthorize: () => void) {
  apiClient.interceptors.response.use(
    (res) => {
      if (ApiHelper.isTokenFail(res)) {
        onUnAuthorize();
      }
      return res;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

function signUpAPI(fullName: string, email: string, password: string) {
  return apiClient.post<BaseResponse<any>>("/user/signup", {
    fullName,
    email,
    password,
  });
}

function logInAPI(email: string, password: string) {
  return apiClient.post<BaseResponse<any>>("/user/login", {
    email,
    password,
  });
}

function verifyEmailAPI(userId: string, otp: string) {
  return apiClient.post("/user/verify-email", {
    userId,
    otp,
  });
}

function forgotPassword(email: string) {
  return apiClient.post("/user/forgot-password", {
    email,
  });
}

function verifyOTPResetPass(email: string, otp: string) {
  return apiClient.post("/user/verify-otp-reset-pass", {
    email, otp,
  });
}

function resetPassword(email: string, password: string) {
  return apiClient.post("/user/reset-password", {
    email,
    password,
  });
}

export {
  setAccessToken,
  addOnUnAuthorizeListener,
  logInAPI,
  signUpAPI,
  verifyEmailAPI,
  forgotPassword,
  verifyOTPResetPass,
  resetPassword,
};

export default apiClient;
