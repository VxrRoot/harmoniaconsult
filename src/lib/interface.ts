export interface ISimplyBlogCard {
  id: number;
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: { _type: "image"; asset: any };
}

export interface IFullBlogPost {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}