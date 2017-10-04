export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  cognito: {
    USER_POOL_ID: 'us-east-1_ZfPspGCtC',
    APP_CLIENT_ID: '32jpblf55r9sgc22tlfk4akeht',
    IDENTITY_POOL_ID: 'us-east-1:54784275-d32c-47db-a316-07df73c0eb39',
    REGION: 'us-east-1'
  },
  s3: {
    BUCKET: 'notes--apps--uploads',
    REGION: 'sa-east-1'
  },
  apiGateway: {
    URL: 'https://ujrht96sc3.execute-api.us-east-1.amazonaws.com/prod',
    REGION: 'us-east-1'
  }
}
