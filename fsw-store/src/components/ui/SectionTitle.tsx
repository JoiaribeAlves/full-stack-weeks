interface ISessionTitle {
  label: string;
}

const SectionTitle = ({ label }: ISessionTitle) => {
  return <h2 className="text-2xl font-bold uppercase">{label}</h2>;
};

export default SectionTitle;
