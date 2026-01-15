import { ReactNode } from "react";

type SkillCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <div className="skill_card technologies--gradient rounded-xl gradient-border /15 bg-white/10 backdrop-blur-md shadow-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {icon}
      </div>

      <div className="mt-2">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
