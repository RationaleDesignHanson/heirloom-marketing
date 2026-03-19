/**
 * Sample recipe images for the Heirloom OCR demo
 * These are real analog recipe cards and cookbook pages used to demonstrate extraction
 */

export interface SampleRecipe {
  id: string;
  name: string;
  thumbnailPath: string;
  imagePath: string;
  type: "card" | "cookbook";
  /** Whether this page may contain multiple recipes */
  isMultiRecipe?: boolean;
}

export const SAMPLE_RECIPE_CARDS: SampleRecipe[] = [
  { id: "card-01", name: "Recipe Card 1",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_01.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_01.jpg",  type: "card" },
  { id: "card-02", name: "Recipe Card 2",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_02.jpeg", imagePath: "/assets/heirloom-demo/cards/RecipeCard_02.jpeg", type: "card" },
  { id: "card-03", name: "Recipe Card 3",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_03.jpeg", imagePath: "/assets/heirloom-demo/cards/RecipeCard_03.jpeg", type: "card" },
  { id: "card-04", name: "Recipe Card 4",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_04.jpeg", imagePath: "/assets/heirloom-demo/cards/RecipeCard_04.jpeg", type: "card" },
  { id: "card-05", name: "Recipe Card 5",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_05.jpeg", imagePath: "/assets/heirloom-demo/cards/RecipeCard_05.jpeg", type: "card" },
  { id: "card-06", name: "Recipe Card 6",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_06.jpeg", imagePath: "/assets/heirloom-demo/cards/RecipeCard_06.jpeg", type: "card" },
  { id: "card-07", name: "Recipe Card 7",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_07.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_07.jpg",  type: "card" },
  { id: "card-08", name: "Recipe Card 8",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_08.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_08.jpg",  type: "card" },
  { id: "card-09", name: "Recipe Card 9",  thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_09.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_09.jpg",  type: "card" },
  { id: "card-10", name: "Recipe Card 10", thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_10.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_10.jpg",  type: "card" },
  { id: "card-11", name: "Recipe Card 11", thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_11.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_11.jpg",  type: "card" },
  { id: "card-12", name: "Recipe Card 12", thumbnailPath: "/assets/heirloom-demo/cards/RecipeCard_12.jpg",  imagePath: "/assets/heirloom-demo/cards/RecipeCard_12.jpg",  type: "card" },
];

export const SAMPLE_COOKBOOK_PAGES: SampleRecipe[] = [
  { id: "cookbook-01", name: "Cookbook Page 1",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_01.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_01.jpeg", type: "cookbook" },
  { id: "cookbook-02", name: "Cookbook Page 2",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_02.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_02.jpeg", type: "cookbook" },
  { id: "cookbook-03", name: "Cookbook Page 3",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_03.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_03.jpeg", type: "cookbook" },
  { id: "cookbook-04", name: "Cookbook Page 4",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_04.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_04.jpeg", type: "cookbook" },
  { id: "cookbook-05", name: "Cookbook Page 5",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_05.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_05.jpeg", type: "cookbook" },
  { id: "cookbook-06", name: "Cookbook Page 6",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_06.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_06.jpeg", type: "cookbook" },
  { id: "cookbook-07", name: "Cookbook Page 7",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_07.jpg",  imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_07.jpg",  type: "cookbook" },
  { id: "cookbook-08", name: "Cookbook Page 8",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_08.jpg",  imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_08.jpg",  type: "cookbook" },
  { id: "cookbook-09", name: "Cookbook Page 9",  thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_09.jpg",  imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_09.jpg",  type: "cookbook", isMultiRecipe: true },
  { id: "cookbook-10", name: "Cookbook Page 10", thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_10.jpeg", imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_10.jpeg", type: "cookbook", isMultiRecipe: true },
  { id: "cookbook-11", name: "Cookbook Page 11", thumbnailPath: "/assets/heirloom-demo/cookbooks/Cookbook_11.jpg",  imagePath: "/assets/heirloom-demo/cookbooks/Cookbook_11.jpg",  type: "cookbook", isMultiRecipe: true },
];

export const ALL_SAMPLES: SampleRecipe[] = [
  ...SAMPLE_RECIPE_CARDS,
  ...SAMPLE_COOKBOOK_PAGES,
];
