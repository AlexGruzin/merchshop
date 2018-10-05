export function formatProfile(profile) {
  return {
    email: profile.email,
    firstName: profile.first_name,
    lastName: profile.last_name,
    isActive: profile.is_active,
  };
}

export function formatCreateProfileData(profile) {
  return {
    profileData: {
      email: profile.email,
      first_name: profile.firstName,
      last_name: profile.lastName,
      password: profile.password
    }
  };
}
