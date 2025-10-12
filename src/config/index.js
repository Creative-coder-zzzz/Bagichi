import hero from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

import gall4 from "../assets/images/gall4.jpg";
import gall5 from "../assets/images/gall5.jpg";
import gall6 from "../assets/images/gall6.jpg";
import gall7 from "../assets/images/gall7.jpg";
import gall8 from "../assets/images/gall8.jpg";
import gall9 from "../assets/images/gall9.jpg";

import {
  MapPin,
  LeafIcon,
  Users,
  Home,
  Coffee,
  CalendarCheck,
} from "lucide-react";

const iconStyle = "text-[#F4694C]";

export const navElements = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Facilities",
    path: "/facilities",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const slides = [
  {
    id: 1,
    image: hero,
    text: "WELCOME TO",
    description: "BAGICHI VATIKA",
    para: "where Luxury meets Serenity",
    button: true,
  },
  {
    id: 2,
    image: hero2,
    text: "Best Dj in the area",
    para: "Come and enjoy an unforgettable night of music, lights, and celebration with your loved ones.",
    description: "Dance Under the Open Sky",
  },
  {
    id: 3,
    image: hero3,
    text: "Perfect Green Lawn ",
    description: "Celebrate Love Amidst Nature’s Embrace",
    para: "Host your dream wedding surrounded by lush greenery and a serene, enchanting atmosphere.",
  },
];

export const gallery = [
  {
    id: 4,
    image: gall4,
    text: "hi",
  },
  {
    id: 5,
    image: gall5,
    text: "hi",
  },
  {
    id: 6,
    image: gall6,
    text: "hi",
  },
  {
    id: 7,
    image: gall7,
    text: "hi",
  },
  {
    id: 8,
    image: gall8,
    text: "hi",
  },
  {
    id: 9,
    image: gall9,
    text: "hi",
  },
  {
    id: 10,
    image: hero,
    text: "hi",
  },
  {
    id: 11,
    image: hero2,
    text: "hi",
  },
  {
    id: 12,
    image: hero3,
    text: "hi",
  },
];

export const whyUs = [
  {
    id: 1,
    title: "Lush Green Lawn",
    description:
      "A sprawling green lawn perfect for weddings, events, and celebrations.",
    icon: LeafIcon,
  },
  {
    id: 2,
    title: "Prime Location",
    description:
      "Located in Farrukhnagar, Gurugram with easy accessibility for guests.",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Massive Capacity",
    description:
      "Accommodates 3000+ guests with a 6,000 sq. ft. dining hall for grand functions.",
    icon: Users,
  },
  {
    id: 4,
    title: "Separate Bride & Groom Rooms",
    description:
      "Elegant and comfortable rooms for the bride and groom with privacy.",
    icon: Home,
  },
  {
    id: 5,
    title: "Sophisticated Amenities",
    description:
      "Modern washrooms, ample parking, and facilities for a seamless celebration.",
    icon: Coffee,
  },
  {
    id: 6,
    title: "Flexible Booking",
    description:
      "Plan your wedding on your preferred dates with professional assistance.",
    icon: CalendarCheck,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sunny",
    title: "Beautiful and green",
    message:
      "The best and nice place for wedding as well as for destination wedding in farrukhnagar and nearer villages. Aroma of flowers is all over the place. Eating area is very wide to accommodate many people at a time. Parking is also available. The best thing is the atmosphere and design of this place as u feel green because of the greenery inside the park.",
    image:
      "https://cdn.pixabay.com/photo/2021/09/27/11/01/man-6660393_1280.jpg",
  },

  {
    id: 4,
    name: "Swati Nayyar",
    title: "Best wedding venue",
    message:
      "Bagichi Faruknagar is a stunning venue with beautiful surrounding , providing impeccable service, and a serene atmosphere. Perfect place for creating unforgettable moments, making every wedding truly magical and memorable. Highly recommended. Mr Rishi Saini and their team do a great job at providing great support and cooperation and facilitate every thing very effectively",
    image:
      "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Inderjeet Saini",
    title: "Highly Recommended",
    message:
      "Good place. Nice embience The decoration was good with in Nature....Ample parking space with 1500+ gathering...Lot of greenries and flowers....Decoration is superb.",
    image:
      "https://cdn.pixabay.com/photo/2021/03/05/00/32/man-6069944_1280.jpg",
  },
];

export const facilities = [
  { id: 1, name: "Free Parking", icon: "Car" },
  { id: 3, name: "24/7 Security", icon: "ShieldCheck" },
  { id: 4, name: "Premium Rooms", icon: "BedDouble" },
  { id: 7, name: "Great Location", icon: "MapPin" },
];

export const blogs = [
  {
    id: 1,
    title: "Exploring Sikkim: A Traveler’s Paradise",
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_1280.jpg",
    description:
      "Discover the breathtaking landscapes, rich culture, and adventures in Sikkim.",
    date: "March 10, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Top 5 Must-Visit Places in Gangtok",
    image:
      "https://cdn.pixabay.com/photo/2020/02/17/20/38/landscape-4857796_1280.jpg",
    description:
      "Uncover the hidden gems and tourist spots in Gangtok that you shouldn't miss!",
    date: "March 8, 2025",
    author: "Emily Clark",
  },
  {
    id: 3,
    title: "A Guide to Local Food in Sikkim",
    image:
      "https://cdn.pixabay.com/photo/2015/09/08/17/09/girl-930342_1280.jpg",
    description:
      "Taste the unique flavors of Sikkim with our guide to local cuisine.",
    date: "March 5, 2025",
    author: "Rajesh Kumar",
  },
];
