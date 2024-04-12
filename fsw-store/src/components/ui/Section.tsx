interface ISection {
  children: React.ReactNode;
}

const Section = ({ children }: ISection) => {
  return <section className="flex flex-col gap-2">{children}</section>;
};

export default Section;
