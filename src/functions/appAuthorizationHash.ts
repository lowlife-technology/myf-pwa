import base64 from 'react-native-base64';

export const appAuthorizationHash = () => {
  const appUuid = 'e2729a3b-8baa-4e0d-b4a9-d055f2eea513';
  const appToken = 'zYqG01ZlRKwjsfBS2VINFRde99huZ0YXgVwH7yFv';

  return base64.encode(`${appUuid}:${appToken}`);
};
