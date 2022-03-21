import { v4 as uuid } from "uuid";
import tanjuroFig from "../../assets/tanjuroFig.webp";
import zenitsuFig from "../../assets/zenitsuFig.webp";
import narutoNecklace from "../../assets/narutoNeck.webp";
import zoroKeyChain from "../../assets/zoroKeyChain.jpg";
import mug1 from "../../assets/mugBlack.webp";
import mug2 from "../../assets/mug.jpg";
import gokuFig from "../../assets/gokuFig.webp";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Tanjuro Action Figure | Demon Slayer",
    rating: 4,
    price: 5000,
    discount: 50,
    categoryName: "Action Figures",
    imageSource: tanjuroFig
  },
  {
    _id: uuid(),
    title: "Zenitsu Action Figure | Demon Slayer",
    rating: 4.5,
    price: 4000,
    discount: 40,
    categoryName: "Action Figures",
    imageSource: zenitsuFig
  },
  {
    _id: uuid(),
    title: "Zoro Key Chain | One Piece",
    rating: 5,
    price: 60,
    categoryName: "Accessories",
    imageSource: zoroKeyChain
  },
  {
    _id: uuid(),
    title: "Uzumaki Naruto Precious Necklace | Shippendun",
    rating: 3.5,
    price: 3000,
    discount: 90,
    categoryName: "Accessories",
    imageSource: narutoNecklace
  },
  {
    _id: uuid(),
    title: "Amaterus Coffee Mug | Shippendun",
    rating: 5,
    price: 2500,
    discount: 55,
    categoryName: "Mugs",
    imageSource: mug2
  },
  {
    _id: uuid(),
    title: "Nauro Special Mug | Shippendun",
    rating: 5,
    price: 2500,
    discount: 99,
    categoryName: "Mugs",
    imageSource: mug1
  },
  {
    _id: uuid(),
    title: "Goku Action Figure | Dragon Ball",
    rating: 4.5,
    price: 1000,
    discount: 12,
    categoryName: "Action Figures",
    imageSource: gokuFig
  },
];
