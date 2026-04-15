import { Camera, Video, Palette, Zap } from "lucide-react";
import photo from "../assets/slideshowphoto.mp4";
const portfolioItems = [
  {
    id: 0,
    title: "PT MAKMUR BERKAH AMANDA",
    category: "Video Production | Company Profile",
    desc: "A corporate profile video crafted to strengthen brand credibility and communicate business values through clean visuals, structured storytelling, and a professional tone tailored for stakeholders and clients.",
    videoId: "lnMqEmce-wc",
  },
  {
    id: 1,
    title: "ADMEDIKA",
    category: "Video Production | Company Profile",
    desc: "A modern company profile highlighting healthcare innovation and service excellence, designed to simplify complex offerings into an engaging and trustworthy visual narrative.",
    videoId: "4yzYw9hmZ9Y",
  },
  {
    id: 2,
    title: "TUTORIAL QRIS TAP",
    category: "Video Production | Digital Ads",
    desc: "A fast-paced instructional ad that demonstrates QRIS Tap usage in a simple, intuitive flow—optimized for digital platforms to boost user adoption and understanding instantly.",
    videoId: "tdFq80-2hrs",
  },
  {
    id: 3,
    title: "Book Cabin Call Center",
    category: "Video Production | Digital Ads",
    desc: "A conversion-focused digital ad showcasing call center solutions with clear messaging, dynamic visuals, and a strong call-to-action aimed at business efficiency.",
    videoId: "IWDNJrSd0Yo",
  },
  {
    id: 4,
    title: "PT. Garuda Yamato Steel (GYS)",
    category: "Motion Graphic | Company Profile",
    desc: "A motion graphic-driven company profile transforming industrial processes into visually engaging content, making complex operations accessible and compelling.",
    videoId: "IAG684g8Tv0",
  },
  {
    id: 5,
    title: "PARIVARTANA RASA",
    category: "Film Documentary",
    desc: "A documentary exploring transformation and human experience, captured through cinematic storytelling that emphasizes emotion, authenticity, and cultural depth.",
    videoId: "2dRLw5zRaTI",
  },
  {
    id: 6,
    title: "BEI Pasar Modal",
    category: "Motion Graphic | Explainer Videos",
    desc: "An explainer video breaking down capital market concepts into clear, digestible visuals—designed to educate audiences while maintaining engagement and clarity.",
    videoId: "GNYa6ZOE6zk",
  },
  {
    id: 7,
    title: "Kemakmuran Semesta",
    category: "Film Documentary",
    desc: "A visually rich documentary portraying social and environmental narratives, delivering a meaningful story through strong visuals and immersive pacing.",
    videoId: "PnHfKOg3fI0",
  },
];
const services = [
  {
    name: "Photography",
    icon: Camera,
    description:
      "Portraits, events, and product shots with sharp visual storytelling.",
    iconGradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-pink-900/30 hover:to-pink-800/20",
    cardColor: "bg-slate-800/50",
    videoBg: photo,
  },
  {
    name: "Videography",
    icon: Video,
    description:
      "From script to final edit—event coverage, promos, and social content.",
    iconGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-blue-900/30 hover:to-purple-800/20",
    cardColor: "bg-slate-800/50",
    videoBg: photo,
  },
  {
    name: "Graphic Design",
    icon: Palette,
    description:
      "Branding, posters, and social media assets that speak your message clearly.",
    iconGradient: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-cyan-900/30 hover:to-cyan-800/20",
    cardColor: "bg-slate-800/50",
    videoBg: photo,
  },
  {
    name: "Motion Graphics",
    icon: Zap,
    description:
      "Animated titles, explainer videos, and dynamic visuals that grab attention.",
    iconGradient: "bg-gradient-to-br from-orange-400 to-red-500",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-orange-900/30 hover:to-red-900/20",
    cardColor: "bg-slate-800/50",
    videoBg: photo,
  },
];
export { portfolioItems, services };
