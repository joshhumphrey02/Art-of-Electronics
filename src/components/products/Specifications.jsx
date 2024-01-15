const Specifications = ({ specs }) => {
  return (
    <div>
      <h1 className=" text-xl font-normal">Specifications</h1>
      <div className=" border-t p-1 flex flex-col gap-2">
        {specs.map((spec) => (
          <div key={spec.key}>{spec.key}</div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
