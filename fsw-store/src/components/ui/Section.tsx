interface ISection {
  children: React.ReactNode;
  label?: string;
}

const Section = ({ children, label }: ISection) => {
  return (
    <section className="flex flex-col gap-3">
      {label && (
        <h2 className="text-xl font-medium lg:text-2xl">{label}</h2>
      )}

      {children}
    </section>
  );
};

export default Section;
