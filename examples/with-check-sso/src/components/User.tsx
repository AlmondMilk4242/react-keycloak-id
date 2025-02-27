import React, { useEffect } from 'react'
import { useReactKeycloackId } from 'react-keycloak-id'
import Count from './Count'
import CountdonwRefrehToken from './CountdonwRefrehToken'

const User = () => {
  const dataKeycloak = useReactKeycloackId()
  const { idTokenParsed, logout, loadUserProfile, keycloakOnClick, authenticated, login } = useReactKeycloackId()

  useEffect(() => {
    /* All data keycloak */
    console.log("keycloak ", dataKeycloak)

    /* Load user profile */
    if(authenticated) {
      loadUserProfile().then((data) => {
        console.log(data)
      }).catch((e) => { console.log(e) })
    }
  }, [])

  const testClick1 = () => {
    console.log("1")
  }
  const testClick2 = () => {
    console.log("2")
  }

  return (
    <div style={{ display: 'block', width: '300px', margin: '100px auto' }}>
      <br />
      {
        authenticated ?
          <>
            <h2>Welcome: {idTokenParsed?.name}</h2>
            <button onClick={() => {
              logout();
            }}>Logout</button>
            <br />
            <br />
            <button onClick={() => keycloakOnClick(testClick1, testClick2)}>Click Me For Refresh Token (If token is expired and refresh token not expired)</button>
            <br />
            <br />
            Token expiration countdown: <br />
            <Count />
            <br />
            Refresh Token expiration countdown: <br />
            <CountdonwRefrehToken />
          </>
          :
          <>
          <h1>Login with keycloak</h1>
          <button onClick={() => login()}>Click to Login</button>
          </>
      }
    </div>
  )
}


export default React.memo(User);