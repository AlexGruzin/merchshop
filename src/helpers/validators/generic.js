export const required = value => (value ? undefined : 'validations:required');

export const noNumbersThere = (string) => {
  const anyNumber = new RegExp("\\d");
  const match = anyNumber.test(string);
  return match ? 'validations:noNumbersThere' : undefined;
};

export const onlyNumbersAllowed = (string) => {
  const anyNumber = new RegExp("^\\d+$");
  const match = anyNumber.test(string);
  return match ? undefined : 'validations:onlyNumbersThere';
};

export const noSpaceAbuse = (string) => {
  const anySpaceAbuse = new RegExp("^\\S((?!.* {2,}).*\\S)?$");
  const match = anySpaceAbuse.test(String(string));
  return match ? undefined : 'validations:spaceAbuseDetected';
};
