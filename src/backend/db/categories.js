import { v4 as uuid } from "uuid";
import actionFigure from '../../assets/narutoFig.jpg';
import accessories from '../../assets/zoroKeyChain.jpg';
import mug from '../../assets/mug.jpg'
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action Figures",
    imgSource: actionFigure,
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    imgSource: accessories,
  },
  {
    _id: uuid(),
    categoryName: "Mugs",
    imgSource: mug,
  },
];
