interface ISection {
  children: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

const Section = ({ children, icon, label }: ISection) => {
  return (
    <section className="flex flex-col lg:gap-3">
      <h2 className="flex items-center gap-1 px-2 text-lg font-medium lg:px-8 lg:text-xl">
        {icon} {label}
      </h2>

      {children}
    </section>
  );
};

export default Section;
