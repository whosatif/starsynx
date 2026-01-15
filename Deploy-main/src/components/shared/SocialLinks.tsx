import { Linkedin, Facebook, Instagram } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className = "",
  iconSize = 20,
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/starsynx",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/starsynx",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/starsynx",
      icon: Instagram,
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label={`Follow us on ${social.name}`}
          >
            <IconComponent size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
