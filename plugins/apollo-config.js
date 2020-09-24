export default function () {
  return {
    httpEndpoint: 'https://api.github.com/graphql',
    getAuth: () => `Bearer ${process.env.APP_GH_TOKEN}`,
  }
}
