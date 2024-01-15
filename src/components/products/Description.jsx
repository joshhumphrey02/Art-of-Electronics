const Description = ({ description = "" }) => {
  return (
    <div className="my-3 p-1 seg_bg_primary">
      <h1 className=" text-2xl font-normal mb-2">Product Description</h1>
      <div className=" border-t p-1">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
