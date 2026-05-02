export enum ProjectType {
  InteriorVisualization = 0,
  ExteriorVisualization = 1,
  ProductVisualization = 2,
  ARInteractiveModel = 3,
  Modelling3D = 4,
}

export const ProjectTypeLabels: Record<ProjectType, string> = {
  [ProjectType.InteriorVisualization]: "Interior Visualization",
  [ProjectType.ExteriorVisualization]: "Exterior Visualization",
  [ProjectType.ProductVisualization]: "Product Visualization",
  [ProjectType.ARInteractiveModel]: "AR / Interactive Model",
  [ProjectType.Modelling3D]: "3D Modelling",
};

export enum NeedType {
  Question = 0,
  Strategy = 1,
}

export enum FormikContactKeys {
  Name = "name",
  Email = "email",
  Message = "message",
  ProjectType = "projectType",
  NeedType = "needType",
}

export type ContactFormFormik = {
  name: string;
  email: string;
  message: string;
  projectType: ProjectType | null;
  needType: NeedType | null;
};
