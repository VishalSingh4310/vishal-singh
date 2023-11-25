export interface Project {
  title: string;
  desc: React.ReactNode | string;
  image: React.ReactNode | string;
  link: string;
  techs: string[];
  duration?: string;
}
export interface Experience {
  title: React.ReactNode | string;
  desc: React.ReactNode | string;
  link?: string;
  duration?: React.ReactNode | string;
}
export interface ProjectDataType {
  Ubq: Project;
  ADmyBRAND: Project;
  Adify: Project;
  FoodApp: Project;
  MovieApp: Project;
  Appointment: Project;
}
