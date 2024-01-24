export function calculateAge(birthdateString: string) {
  const birthdate = new Date(birthdateString);

  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthdate.getFullYear();

  // Adjust the age based on the current month and day
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    return age - 1;
  }
  return age;
}
