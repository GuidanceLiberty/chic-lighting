import Led from "../assets/hero/led.webp"
import Lamps from "../assets/hero/lamp.webp"
import Wall from "../assets/hero/wall.jpeg"
import Outdoor from "../assets/hero/out.webp"
import Home from "../assets/hero/home.webp"
import Ceiling from "../assets/hero/ceiling.webp"


import Offer1 from "../assets/hero/offer1.jpeg"
import Offer2 from "../assets/hero/offer2.jpeg"
import Offer3 from "../assets/hero/offer3.webp"






export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#tabs",
  },
  {
    id: 4,
    title: "Offers",
    link: "#offers",
  },
  {
    id: 5,
    title: "Gallery",
    link: "#gallery",
  },
  {
    id: 6,
    title: "About",
    link: "#about",
  },
  {
    id: 7,
    title: "FAQ",
    link: "#faq",
  },
  {
    id: 8,
    title: "Contact",
    link: "#contact",
  },
   {
    id: 8,
    title: "Services",
    link: "#equipments",
  },
  {
    id: 9,
    title: "Download",
    link: "#download",
  },
 
];



export const ProductData = [
    {
        id: 1,
        category: "LED",
        image: Led,
        title: "led lights",
        info: "info",
        price: "$400",
    },
    {
        id: 2,
        category: "LAMPS",
        image: Lamps,
        title: "lamp",
        info: "info",
        price: "$100",
    },
    {
        id: 3,
        category: "WALL",
        image: Wall,
        title: "wall light",
        info: "info",
        price: "$100",
    },
    {
        id: 4,
        category: "OUTDOOR",
        image: Outdoor,
        title: "Outdoor",
        info: "info",
        price: "$100",
    },
    {
        id: 5,
        category: "HOME",
        image: Home,
        title: "home lights ",
        info: "info",
        price: "$100",
    },
    {
        id: 6,
        category: "CEILING",
        image: Ceiling,
        title: "ceiling light",
        info: "info",
        price: "$100",
    },
    {
        id: 7,
        category: "WALL",
        image: Wall,
        title: "wall light",
        info: "info",
        price: "$100",
    },
     {
        id: 8,
        category: "HOME",
        image: Home,
        title: "Home Accents",
        info: "info",
        price: "$100",
    },
     {
        id: 9,
        category: "LAMPS",
        image: Lamps,
        title: "Lamp",
        info: "info",
        price: "$100",
    },
     {
        id: 10,
        category: "OUTDOOR",
        image: Outdoor,
        title: "Led Light",
        info: "info",
        price: "$100",
    },
    {
        id: 11,
        category: "LED",
        image: Led,
        title: "Led Light",
        info: "info",
        price: "$100",
    },
    {
        id: 12,
        category: "CEILING",
        image: Ceiling,
        title: "ceiling lights",
        info: "info",
        price: "$100",
    },
];


export const OfferData = [
  {
    "id": "o1",
    "title": "Back\u2011to\u2011School Lighting Sale",
    "discount": 20,
    "details": "Get 20% off on study lamps and desk lighting. Limited time.",
    "imageUrl": Offer2
  },
  {
    "id": "o2",
    "title": "Bundle: Smart Home Starter",
    "discount": 15,
    "details": "Strip + 2 smart bulbs + hub. Voice assistant ready.",
    "imageUrl": Offer3
  },
  {
    "id": "o3",
    "title": "Outdoor Essentials",
    "discount": 25,
    "details": "Outdoor sconces and pathway lights at 25% off.",
    "imageUrl": Offer1
  }
];


export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "The smart bulbs I bought transformed my living room. The colors are vibrant, and I can control everything with my phone. It makes the whole house feel modern and cozy!",
    img: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "I purchased outdoor lights for my garden and the result is amazing. The warm glow creates the perfect ambiance in the evenings. My neighbors keep asking where I got them!",
    img: "https://picsum.photos/id/1012/100/100",
    delay: 0.5
  },
  {
    id: 3,
    name: "Kristen",
    text: "The ceiling lights I ordered are sleek, energy-efficient, and bright enough for my workspace. Definitely a game changer for productivity at home.",
    img: "https://picsum.photos/id/1013/100/100",
    delay: 0.8
  },
  {
    id: 4,
    name: "Ariana",
    text: "I love the bedside lamps I bought here. They’re stylish and give off just the right amount of light for reading at night. Highly recommend to anyone upgrading their lighting!",
    img: "https://picsum.photos/id/1014/100/100",
    delay: 0.2
  }
];

