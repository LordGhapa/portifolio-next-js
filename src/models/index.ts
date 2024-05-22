interface Tag {
  name: string;
}

interface Block {
  style: string;
  _key: string;
  markDefs: any[]; // Aqui você pode adicionar a definição do tipo apropriado para markDefs se necessário
  children: Child[];
  _type: string;
}

interface Child {
  _type: string;
  marks: any[]; // Aqui você pode adicionar a definição do tipo apropriado para marks se necessário
  text: string;
  _key: string;
}

export interface ProjectsModel {
  urlforimage: string;
  youtubeLink: string;
  projectLink: string;
  priority: boolean;
  tags: Tag[];
  fullDescription: Block[];
  githubLink: string;
  projectName: string;
  slug: string;
  category: Tag[];
}
