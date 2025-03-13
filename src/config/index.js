import hero from '../assets/images/hero.png'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'

import room1 from '../assets/images/room1.jpg'
import room2 from '../assets/images/room2.jpg'
import room3 from '../assets/images/room3.jpg'

import gall4 from '../assets/images/gall4.jpg'
import gall5 from '../assets/images/gall5.jpg'
import gall6 from '../assets/images/gall6.jpg'
import gall7 from '../assets/images/gall7.jpg'

import { BedDouble, Mountain, Utensils, Activity, ConciergeBell, Wifi } from "lucide-react";


const iconStyle = "text-[#F4694C]";

export const navElements = [{
    name: 'Home',
    path: "/"
},
{
    name: 'About Us',
    path: '/about'
},
{
    name: 'Rooms',
    path: '/rooms'
},
{
    name: 'Facilities',
    path: '/facilities'
},
{
    name: 'Activities',
    path: '/activities'
},

{
    name: 'Contact Us',
    path: '/contact'
},

]


export const slides = [
    {
        id: 1,
        image: hero,
        text: 'WELCOME TO',
        description: 'THE PAHUNA RETREAT',
        para: "Book your elegant stay and enjoy the luxury",
        button: true
    },
    {
        id: 2,
        image: hero2,
        text: "Experience Unmatched Comfort & Style",
      },
      {
        id: 3,
        image: hero3,
        text: "Where Luxury Meets Tranquility",
      },
]

export const gallery = [
    {
        id:1,
        image: room1,
        text: 'hi'
    },
    {
        id:2,
        image: room2,
            text: 'hi'
    },
    {
        id:3,
        image: room3,
            text: 'hi'
    },
    {
        id:4,
        image: gall4,
            text: 'hi'
    },
    {
        id:5,
        image: gall5,
            text: 'hi'
    },
    {
        id:6,
        image: gall6,
            text: 'hi'
    },
    {
        id:7,
        image: gall7,
            text: 'hi'
    }
]





export const whyUs = [
    {
      id: 1,
      title: "Luxury & Comfort",
      description: "Stay in well-furnished rooms with modern amenities and 24/7 room service.",
      icon: BedDouble,
    },
    {
      id: 2,
      title: "Scenic Location",
      description: "Wake up to breathtaking mountain views and enjoy a peaceful retreat.",
      icon: Mountain,
    },
    {
      id: 3,
      title: "Culinary Experience",
      description: "Enjoy authentic Sikkimese cuisine, multi-cuisine dining, and organic ingredients.",
      icon: Utensils,
    },
    {
      id: 4,
      title: "Exciting Activities",
      description: "Explore trekking trails, adventure sports, cultural performances, and bonfire nights.",
      icon: Activity,
    },
    {
      id: 5,
      title: "Exceptional Services",
      description: "Personalized guest experience, concierge service, and top-tier hospitality.",
      icon: ConciergeBell,
    },
    {
      id: 6,
      title: "Seamless Connectivity",
      description: "Enjoy free high-speed Wi-Fi and dedicated workspace for remote work.",
      icon: Wifi,
    },
  ];


  export const rooms = [
    {
      id: 1,
      image: room1,
      title: "Couple Suite",
      description: "A cozy and romantic space designed for couples, featuring a king-size bed, private balcony, and elegant decor.",
      rating: 4.8,
      rate: 120,
      amenities: ["wifi", "tv", "ac"],
    },
    {
      id: 2,
      image: room2,
      title: "Family Room",
      description: "Spacious and comfortable, perfect for families, with multiple beds, a seating area, and a scenic view.",
      rating: 4.6,
      rate: 150,
      amenities: ["wifi", "tv"],
    },
    {
      id: 3,
      image: room3,
      title: "Luxury Suite",
      description: "A premium suite offering top-notch comfort, modern amenities, and a breathtaking view of the mountains.",
      rating: 5.0,
      rate: 250,
      amenities: ["wifi", "ac"],
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg",
      title: "Couple Suite",
      description: "A romantic retreat with a cozy ambiance, perfect for couples.",
      rating: 4.8,
      rate: 130,
      amenities: ["wifi", "tv", "ac"],
    },
    {
      id: 5,
      image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
      title: "Family Deluxe",
      description: "Spacious and comfortable, ideal for a family vacation.",
      rating: 4.6,
      rate: 170,
      amenities: ["wifi", "tv"],
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg",
      title: "Luxury King Suite",
      description: "Experience premium comfort with a breathtaking mountain view.",
      rating: 4.9,
      rate: 300,
      amenities: ["wifi", "ac"],
    },
    {
      id: 7,
      image: "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
      title: "Cozy Single Room",
      description: "Perfect for solo travelers looking for a peaceful stay.",
      rating: 4.5,
      rate: 80,
      amenities: ["wifi"],
    },
    {
      id: 8,
      image: "https://cdn.pixabay.com/photo/2021/12/25/13/08/real-estate-6893060_1280.jpg",
      title: "Modern Twin Room",
      description: "A stylish and modern twin-bed room for friends or colleagues.",
      rating: 4.7,
      rate: 140,
      amenities: ["wifi", "tv"],
    },
    {
      id: 9,
      image: "https://cdn.pixabay.com/photo/2016/11/22/19/11/brick-wall-1850095_1280.jpg",
      title: "Penthouse Retreat",
      description: "An exclusive penthouse suite with luxurious amenities.",
      rating: 5.0,
      rate: 500,
      amenities: ["wifi", "tv", "ac"],
    },
  ];
  

 export  const activities = [
    {
      id: 1,
      title: "Mountain Trekking",
      description: "Explore the beautiful mountain trails and enjoy breathtaking views.",
      image: "https://cdn.pixabay.com/photo/2023/01/11/19/53/hiking-7712678_1280.jpg",
    },
    {
      id: 2,
      title: "Hiking Adventures",
      description: "Go on guided hiking tours through scenic routes and lush landscapes.",
      image: "https://cdn.pixabay.com/photo/2022/12/20/11/17/hiking-7667621_1280.jpg",
    },
    {
      id: 3,
      title: "Sightseeing Tours",
      description: "Visit nearby tourist attractions and immerse yourself in local culture.",
      image: "https://cdn.pixabay.com/photo/2020/06/12/09/15/berlin-5289802_1280.jpg",
    },
    {
      id: 4,
      title: "Camping Under the Stars",
      description: "Enjoy a night of camping in the wilderness with bonfires and storytelling.",
      image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg",
    },
  
  ];


  export const testimonials = [
    {
      id: 1,
      name: "Rohan Mehta",
      title: "Wonderful Experience!",
      message: "The Pahuna Retreat made my stay unforgettable. The staff was incredibly hospitable, and the scenic views were breathtaking!",
      image: "https://cdn.pixabay.com/photo/2020/06/09/10/52/man-5277903_1280.jpg",
    },
    {
      id: 2,
      name: "Sanya Verma",
      title: "A Serene Getaway",
      message: "I loved the peaceful ambiance. The rooms were clean, and the food was delicious. Highly recommended!",
      image: "https://cdn.pixabay.com/photo/2019/08/29/12/10/model-4438821_1280.jpg",
    },
    {
      id: 3,
      name: "Aryan Khurana",
      title: "Exceptional Service!",
      message: "From the warm welcome to the seamless service, everything was top-notch. I can't wait to visit again!",
      image: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Meera Sharma",
      title: "Perfect for a Family Trip",
      message: "The hotel had great amenities for kids and family. The staff ensured we had the best time. Loved the cozy vibe!",
      image: "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  
  export const facilities = [
    { id: 1, name: "Free Parking", icon: "Car" },
    { id: 2, name: "Free Wi-Fi", icon: "Wifi" },
    { id: 3, name: "24/7 Security", icon: "ShieldCheck" },
    { id: 4, name: "Premium Rooms", icon: "BedDouble" },
    { id: 6, name: "Smart TVs", icon: "Tv" },
    { id: 7, name: "Great Location", icon: "MapPin" },
    { id: 8, name: "24/7 Support", icon: "Phone" },
  ];


  export const blogs = [
    {
      id: 1,
      title: "Exploring Sikkim: A Traveler’s Paradise",
      image: "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_1280.jpg",
      description: "Discover the breathtaking landscapes, rich culture, and adventures in Sikkim.",
      date: "March 10, 2025",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Top 5 Must-Visit Places in Gangtok",
      image: "https://cdn.pixabay.com/photo/2020/02/17/20/38/landscape-4857796_1280.jpg",
      description: "Uncover the hidden gems and tourist spots in Gangtok that you shouldn't miss!",
      date: "March 8, 2025",
      author: "Emily Clark",
    },
    {
      id: 3,
      title: "A Guide to Local Food in Sikkim",
      image: "https://cdn.pixabay.com/photo/2015/09/08/17/09/girl-930342_1280.jpg",
      description: "Taste the unique flavors of Sikkim with our guide to local cuisine.",
      date: "March 5, 2025",
      author: "Rajesh Kumar",
    },
  ];
  