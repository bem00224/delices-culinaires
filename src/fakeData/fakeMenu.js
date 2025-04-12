import im1 from '../assets/soup.jpg'
import im2 from '../assets/tomato.jpg'
import im3 from '../assets/chocolate.jpg'
import tarte from '../assets/tarte.jpg'
import saumon from '../assets/saumon.jpg'
import dessert from '../assets/desser.jpg'
/*
const Category = [
    {
        id: 1,
        title: "Rapide",
        imageSource: "src/assets/rapide.jpg",
    },
    {
        id: 2,
        title: "Entrées",
        imageSource: "src/assets/entrées.png"
    },
    {
        id: 3,
        title: "Plats",
        imageSource: "src/assets/plats.png"
    },
    {
        id: 4,
        title: "Desserts",
        imageSource: "src/assets/desserts.png",
    },
    {
        id: 5,
        title: "Apéritifs",
        imageSource: "src/assets/aperitifs.png"
    },
]

const CurrentNews = [
  {
    id: 1,
    imageSource: "src/assets/soup.jpg",
    title: "Velouté de patates douces au curry",
    preparationTime: 10,
    cookingTime: 30,
    ingredients: [
      { name: "Huile", quantity: 1, unit: "CS" },
      { name: "Oignon", quantity: 1, unit: "" },
      { name: "Gingembre frais râpé", quantity: 1, unit: "CS" },
      { name: "Curry en poudre", quantity: 1, unit: "CS" },
      { name: "Coriandre fraîche ciselée", quantity: 1, unit: "petite poignée" },
      { name: "Ail", quantity: 2, unit: "gousses" },
      { name: "Patate douce", quantity: 1000, unit: "g" },
      { name: "Bouillon de volaille", quantity: 1000, unit: "ml" },
      { name: "Lait de coco", quantity: 200, unit: "ml" }
    ],
    instructions: [
      "Faire revenir l'oignon quelques minutes dans l'huile.",
      "Ajouter l'ail, le gingembre et la poudre de curry. Remuer.",
      "Mettre les morceaux de patates douces dans ce mélange.",
      "Verser le bouillon.",
      "Porter à ébullition puis laisser mijoter à couvert pendant 20 à 30 min.",
      "Enlever la casserole du feu.",
      "Laisser un peu refroidir.",
      "Mixer.",
      "Remettre sur le feu.",
      "Ajouter le lait de coco et la coriandre (en garder un peu pour la déco)."
    ],
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "src/assets/tomato.jpg",
    title: "Cocos de Paimpol à la tomate",
    preparationTime: 15,
    cookingTime: 45,
    ingredients: [
      { name: "Haricots coco de Paimpol écossés", quantity: 500, unit: "g" },
      { name: "Huile d’olive", quantity: 2, unit: "CS" },
      { name: "Oignon", quantity: 1, unit: "" },
      { name: "Ail", quantity: 2, unit: "gousses" },
      { name: "Tomates", quantity: 2, unit: "" },
      { name: "Céleri branche", quantity: 1, unit: "brin" },
      { name: "Curcuma", quantity: 1, unit: "pincée" },
      { name: "Thym", quantity: 3, unit: "brins" },
      { name: "Laurier", quantity: 2, unit: "feuilles" },
      { name: "Eau", quantity: 700, unit: "ml" },
      { name: "Sel", quantity: 1, unit: "pincée" }
    ],
    instructions: [
      "Écossez les haricots, rincez et égouttez-les.",
      "Pelez l’oignon et l’ail, coupez-les en dés. Pelez et coupez les tomates.",
      "Coupez le céleri, préparez le thym et le laurier.",
      "Chauffez l’huile d’olive dans une cocotte, ajoutez ail, oignon et céleri.",
      "Laissez cuire 5 min en remuant, ajoutez tomates, thym, laurier, curcuma.",
      "Compotez légèrement 5 min.",
      "Ajoutez les cocos, puis l’eau.",
      "Portez à ébullition, laissez cuire 30 min à frémissement.",
      "Salez, puis laissez cuire 10 min de plus."
    ],
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 3,
    imageSource: "src/assets/chocolate.jpg",
    title: "Mousse au chocolat",
    preparationTime: 20,
    cookingTime: 0,
    ingredients: [
      { name: "Chocolat noir", quantity: 200, unit: "g" },
      { name: "Œufs", quantity: 6, unit: "" },
      { name: "Sel", quantity: 1, unit: "pincée" },
      { name: "Copeaux de chocolat (facultatif)", quantity: 1, unit: "peu" }
    ],
    instructions: [
      "Séparer les blancs des jaunes d’œufs.",
      "Faire fondre le chocolat au bain-marie.",
      "Ajouter les jaunes au chocolat fondu, bien mélanger.",
      "Battre les blancs en neige avec le sel.",
      "Incorporer les blancs au mélange chocolaté sans casser les blancs.",
      "Répartir la mousse dans des verrines.",
      "Réfrigérer au moins 3 heures.",
      "Décorer avec des copeaux de chocolat (optionnel)."
    ],
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
]

const TopFood = [
  {
    id: 1,
    imageSource: "src/assets/tarte.jpg",
    title: "Tarte aux pommes",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "src/assets/saumon.jpg",
    title: "Saumon aux amandes",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 3,
    imageSource: "src/assets/desser.jpg",
    title: "Fondant au chocolat",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  }
]

const News = [
  {
    id: 1,
    //imageSource: "/images/burger-bacon-egg.png",
    title: "Comment conserver les courgettes?",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    //imageSource: "/images/burger-vegan.png",
    title: "Comment conserver les tomates?",
    price: 5.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 3,
    //imageSource: "/images/burger3.png",
    title: "Faut-il décongeler sa viande avant de la cuire ?",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 4,
    //imageSource: "/images/drink1.png",
    title: "Mauvaises odeurs dans une gourde, comment s'en débarrasser?",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 5,
    //imageSource: "/images/drink2.png",
    title: "Astuces efficaces pour éviter que la ratatouille soit trop liquide",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 6,
    //imageSource: "/images/drink2.png",
    title: "Pourquoi a-t-on moins d'appétit quand il fait chaud ?",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 7,
    //imageSource: "/images/drink2.png",
    title: "L'eau citronnée : un trésor pour votre santé",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 8,
    //imageSource: "/images/drink2.png",
    title: "Comment cuisiner un melon fade et sans goût?",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
]

const Recipes = [
    {
      id: 1,
      imageSource: "src/assets/Brioche.jpg",
      title: "Brioche au sucre",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 2,
      imageSource: "src/assets/Chouquettes.jpg",
      title: "Chouquettes au sucre perlé",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 3,
      imageSource: "src/assets/cookies.jpg",
      title: "Cookies aux pépites de chocolat",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
]

const SpecialRecipes = [
    {
      id: 1,
      //imageSource: "/images/burger-bacon-egg.png",
      title: "Sirop de queues de fraises",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 2,
      //imageSource: "/images/burger-vegan.png",
      title: "Tisane de queues de cerises",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 3,
      //imageSource: "/images/burger3.png",
      title: "Chips d'épluchures de pomme",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 4,
      //imageSource: "/images/burger-vegan.png",
      title: "Gommage pour le corps au marc de café",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 5,
      //imageSource: "/images/burger3.png",
      title: "Bouillon de légumes avec épluchures",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 6,
      //imageSource: "/images/burger3.png",
      title: "Hachi-parmentier avec restes de pot-au-feu",
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
]

export const fakeMenu = {
    Category,
    CurrentNews,
    TopFood,
    News,
    Recipes,
    SpecialRecipes
}
*/

export const fakeMenu = {
  CurrentNews: [
    {
      id: 1,
      imageSource: im1,
      title: 'Velouté de patates douces au curry',
      preparationTime: 10,
      cookingTime: 30,
      ingredients: [
        { name: 'Huile', quantity: 1, unit: 'CS' },
        { name: 'Oignon', quantity: 1 },
        { name: 'Gingembre frais râpé', quantity: 1, unit: 'CS' },
        { name: 'Curry en poudre', quantity: 1, unit: 'CS' },
        { name: 'Coriandre fraîche ciselée', quantity: 1, unit: 'petite poignée' },
        { name: 'Ail', quantity: 2, unit: 'gousses' },
        { name: 'Patate douce', quantity: 1000, unit: 'g' },
        { name: 'Bouillon de volaille', quantity: 1000, unit: 'ml' },
        { name: 'Lait de coco', quantity: 200, unit: 'ml' },
      ],
      instructions: [
        "1. Faire revenir l'oignon quelques minutes dans l'huile.",
        "2. Ajouter l'ail, le gingembre et la poudre de curry. Remuer.",
        "3. Mettre les morceaux de patates douces dans ce mélange.",
        "4. Verser le bouillon.",
        "5. Porter à ébullition puis laisser mijoter à couvert pendant 20 à 30 min.",
        "6. Enlever la casserole du feu.",
        "7. Laisser un peu refroidir.",
        "8. Mixer.",
        "9. Remettre sur le feu.",
        "10. Ajouter le lait de coco et la coriandre (en garder un peu pour la déco)."
      ],
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 2,
      imageSource: im2,
      title: 'Cocos de Paimpol à la tomate',
      preparationTime: 15,
      cookingTime: 45,
      ingredients: [
        { name: 'Haricots coco de Paimpol écossés', quantity: 500, unit: 'g' },
        { name: 'Huile d’olive', quantity: 2, unit: 'CS' },
        { name: 'Oignon', quantity: 1 },
        { name: 'Ail', quantity: 2, unit: 'gousses' },
        { name: 'Tomates', quantity: 2 },
        { name: 'Céleri branche', quantity: 1, unit: 'brin' },
        { name: 'Curcuma', quantity: 1, unit: 'pincée' },
        { name: 'Thym', quantity: 3, unit: 'brins' },
        { name: 'Laurier', quantity: 2, unit: 'feuilles' },
        { name: 'Eau', quantity: 700, unit: 'ml' },
        { name: 'Sel', quantity: 1, unit: 'pincée' }
      ],
      instructions: [
        '1. Écossez les haricots, rincez et égouttez-les.',
        '2. Pelez l’oignon et l’ail, coupez-les en dés. Pelez et coupez les tomates.',
        '3. Coupez le céleri, préparez le thym et le laurier.',
        '4. Chauffez l’huile d’olive dans une cocotte, ajoutez ail, oignon et céleri.',
        '5. Laissez cuire 5 min en remuant, ajoutez tomates, thym, laurier, curcuma.',
        '6. Compotez légèrement 5 min.',
        '7. Ajoutez les cocos, puis l’eau.',
        '8. Portez à ébullition, laissez cuire 30 min à frémissement.',
        '9. Salez, puis laissez cuire 10 min de plus.'
      ],
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 3,
      imageSource: im3,
      title: 'Mousse au chocolat',
      preparationTime: 20,
      cookingTime: 0,
      ingredients: [
        { name: 'Chocolat noir', quantity: 200, unit: 'g' },
        { name: 'Œufs', quantity: 6 },
        { name: 'Sel', quantity: 1, unit: 'pincée' },
        { name: 'Copeaux de chocolat (facultatif)', quantity: 1, unit: 'peu' },
      ],
      instructions: [
        '1. Séparer les blancs des jaunes d’œufs.',
        '2. Faire fondre le chocolat au bain-marie.',
        '3. Ajouter les jaunes au chocolat fondu, bien mélanger.',
        '4. Battre les blancs en neige avec le sel.',
        '5. Incorporer les blancs au mélange chocolaté sans casser les blancs.',
        '6. Répartir la mousse dans des verrines.',
        '7. Réfrigérer au moins 3 heures.',
        '8. Décorer avec des copeaux de chocolat (optionnel).'
      ],
      isAvailable: true,
      isAdvertised: false,
    }
  ],
  TopFood : [
    {
      id: 1,
      imageSource: tarte,
      title: "Tarte aux pommes",
      preparationTime: 25,
      cookingTime: 30,
      ingredients: [
        { name: "Pommes", quantity: 6 },
        { name: "Pâte brisée", quantity: 1 },
        { name: "Sucre", quantity: 1, unit: "sachet" },
        { name: "Beurre", quantity: 30, unit: "g" },
        { name: "Cannelle", quantity: 1, unit: "pincée" },
      ],
      instructions: [
        "1. Éplucher et découper en morceaux les pomme.",
        "2. Faire une compote : les mettre dans une casserole avec un peu d'eau (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire.",
        "3. Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux.",
        "4. Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote).",
        "5. Préchauffer le four à 210°C (thermostat 7).",
        "6. Laisser un peu refroidir la compote et étaler la pâte brisée dans un moule et la piquer avec une fourchette.",
        "7. Verser la compote sur la pâte et placer les lamelles de pommes en formant une spirale ou plusieurs cercles, au choix ! Disposer des lamelles de beurre dessus.",
        "8. Mettre au four et laisser cuire pendant 30 min. Surveiller la cuisson. Vous pouvez ajouter un peu de sucre vanillé sur la tarte pendant que çà cuit pour caraméliser un peu.",
      ],
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 2,
      imageSource: saumon,
      title: "Saumon aux amandes",
      preparationTime: 15,
      cookingTime: 20,
      ingredients: [
        { name: "Filets de saumon", quantity: 2 },
        { name: "Amandes effilées", quantity: 50, unit: "g" },
        { name: "Beurre", quantity: 20, unit: "g" },
        { name: "Citron", quantity: 1 },
        { name: "Sel", quantity: 1, unit: "pincée" },
        { name: "Poivre", quantity: 1, unit: "pincée" },
      ],
      instructions: [
        "1. Préchauffez le four à 180°C.",
        "2. Placez les filets de saumon dans un plat.",
        "3. Salez, poivrez et arrosez de jus de citron.",
        "4. Parsemez d’amandes effilées et ajoutez le beurre fondu.",
        "5. Enfournez pour 15-20 minutes.",
      ],
      isAvailable: true,
      isAdvertised: false,
    },
    {
      id: 3,
      imageSource: dessert,
      title: "Fondant au chocolat",
      preparationTime: 15,
      cookingTime: 10,
      ingredients: [
        { name: "Chocolat noir", quantity: 200, unit: "g" },
        { name: "Beurre", quantity: 100, unit: "g" },
        { name: "Sucre", quantity: 80, unit: "g" },
        { name: "Farine", quantity: 50, unit: "g" },
        { name: "Œufs", quantity: 4 },
      ],
      instructions: [
        "1. Préchauffez le four à 200°C.",
        "2. Faites fondre le chocolat avec le beurre.",
        "3. Ajoutez le sucre, la farine, puis les œufs un à un.",
        "4. Versez dans des moules individuels beurrés.",
        "5. Faites cuire 10 minutes.",
        "6. Servez tiède avec une boule de glace vanille si désiré.",
      ],
      isAvailable: true,
      isAdvertised: false,
    }
  ],
  
};