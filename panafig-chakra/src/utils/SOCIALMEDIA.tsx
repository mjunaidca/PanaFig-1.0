import { BsFacebook, BsTwitter, BsPlayBtnFill, BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";


import { SocialMedia } from "@/types/SocialMedia";

export const SOCIALMEDIA:Array<SocialMedia>=[
    {
        name: 'Facebook',
        link: "https://www.facebook.com/piaic/",
        icon:  <BsFacebook />     
    },
    {
        name: 'Twitter',
        link: "https://twitter.com/piaicofficial",    
        icon: <BsTwitter /> 
    },
    {
        name: 'Instagram',
        link: "https://www.instagram.com/piaicofficial/",
        icon: <BsInstagram />  
    },
    {
        name: 'YouTube',
        link: "https://www.youtube.com/@PIAIC",
        icon: <BsPlayBtnFill />     
    },
    {
        name: 'Discord',
        link: "https://discord.com/channels/790484092772548613/928284551988518912",
        icon: <BsDiscord />      
    },
    {
        name: 'GitHub',
        link: "https://github.com/panaverse",
        icon: <BsGithub />      
    },
   
]

