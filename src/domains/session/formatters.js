export function formatCreateSessionData( payload ) {
  return {
    logInData: {
      email: payload.email,
      password: payload.password,
    },
  };
}
