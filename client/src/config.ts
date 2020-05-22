// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '8k8pct8moh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-mhfl-61l.auth0.com',            // Auth0 domain
  clientId: '32P1en1ch7JB6lz7YILx8mNz37DQ69kd',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
