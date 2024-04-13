interface IFullDescription {
  description: string;
}

const FullDescription = ({ description }: IFullDescription) => {
  return (
    <div className="flex max-h-[400px] flex-col overflow-y-auto">
      <p className="text-lg font-bold">Descrição:</p>
      <p className="leading-5 opacity-75">{description}</p>
    </div>
  );
};

export default FullDescription;
