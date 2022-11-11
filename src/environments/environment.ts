import { AppConfiguration } from "read-appsettings-json";

export const environment = {
  production: false,
  apiUrl: AppConfiguration.Setting().apiendpoint,
  applicationName:"TODO App",
};




