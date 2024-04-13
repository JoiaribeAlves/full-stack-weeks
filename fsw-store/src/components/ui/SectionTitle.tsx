interface ISessionTitle {
  label: string;
}

const SectionTitle = ({ label }: ISessionTitle) => {
  return <h2 className="text-xl font-bold uppercase lg:text-2xl">{label}</h2>;
};

export default SectionTitle;
