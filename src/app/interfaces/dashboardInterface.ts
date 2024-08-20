
export interface MobileMenuInterface {
  label: string;
  id: number;
  icon: string;
}

export interface LabelInterface {
  label: string;
  id: number;
}

export interface PropertyInterface {
  property: string;
  id: number;
}

export interface SocialLinksInterface {
  url: string;
  background: string;
  icon: string;
}

export interface AddressInterface {
  id: 2,
  title: string,
  email: string,
  primary_contact: string,
  secondary_contact: string,
  third_contact: null | string
}


export interface ContactLinksInterface {
  id: number;
  link_title: string;
  link_url: string;
}
