import TitleBadge from "./TitleBadge";

interface ISection {
  children: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

const Section = ({ children, icon, label }: ISection) => {
  return (
    <section className="flex flex-col gap-2 lg:gap-3">
      <TitleBadge icon={icon} label={label} />

      {children}
    </section>
  );
};

export default Section;
