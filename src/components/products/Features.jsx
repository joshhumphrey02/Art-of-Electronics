const Features = ({ features }) => {
  return (
    <div>
      <h1 className=" text-xl font-normal">Features</h1>
      <div className=" border-t p-1 flex flex-col gap-2">
        {features.map((feat) => (
          <div key={feat.key}>{feat.key}</div>
        ))}
      </div>
    </div>
  );
};

export default Features;
