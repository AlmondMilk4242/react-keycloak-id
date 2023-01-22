import { apiClient } from "./Clients";
import { useReactKeycloackId } from 'react-keycloak-id'

const { token } = useReactKeycloackId();


export const retrieveApi = () =>
  apiClient.get(`/simple-user`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "POST, OPTIONS, PATCH, PUT, GET",
    },
  });

  retrieveApi().then(response => {
    if(response.status >= 200 && response.status < 300) {
        console.log("API call was successful");
    } else {
        console.log("API call was not successful")
    }
});
