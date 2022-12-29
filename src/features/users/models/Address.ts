type Geolocation = {
  lat: string;
  long: string;
};

export type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
};
