export default function ({ $auth, $apolloHelpers }) {
  let token = $auth.getToken("local")
  if (token) {
    token = token.split(" ").pop()
    $apolloHelpers.onLogin(token)
  }
}
