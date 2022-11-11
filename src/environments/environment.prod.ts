import { AppConfiguration } from "read-appsettings-json";

export const environment = {
  production: true,
  apiUrl: AppConfiguration.Setting().apiendpoint,
  applicationName:"TODO App",
};
