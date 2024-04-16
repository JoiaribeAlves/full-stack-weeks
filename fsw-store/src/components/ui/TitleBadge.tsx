import { Badge } from "./shadcn/badge";

interface ITitleBadge {
  icon?: React.ReactNode;
  label?: string;
}

const TitleBadge = ({ icon, label }: ITitleBadge) => {
  return (
    <div>
      <Badge
        className="flex w-fit items-center gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
        variant={"outline"}
      >
        {icon}
        {label}
      </Badge>
    </div>
  );
};

export default TitleBadge;
