import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient?: "primary" | "secondary" | "accent";
}

const CategoryCard = ({ title, description, icon: Icon, link, gradient = "primary" }: CategoryCardProps) => {
  const gradientClasses = {
    primary: "bg-white hover:shadow-xl border-gray-200",
    secondary: "bg-white hover:shadow-xl border-gray-200",
    accent: "bg-white hover:shadow-xl border-gray-200",
  };

  return (
    <Link to={link}>
      <div className={`group relative p-6 rounded-xl border ${gradientClasses[gradient]} transition-all duration-300 hover:scale-105`}>
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-black text-white group-hover:bg-gray-800 transition-all">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-black">
              {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
