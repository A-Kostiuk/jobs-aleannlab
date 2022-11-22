export interface Location {
  lat: number;
  long: number;
}

export interface LocationDetails {
  name?: string;
  country?: string;
  city?: string;
}

export interface JobResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: Location;
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
  responsibilities?: string;
  rating?: number;
  compensation_benefits?: string[];
}

export interface Job extends JobResponse {
  locationDetails: LocationDetails;
}

