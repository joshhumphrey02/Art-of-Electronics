import Link from "next/link";
import { MdStarRate } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";

const Rate = ({ num }) => {
  let rates = [];
  for (let i = 0; i < num; i++) {
    rates.push(i);
  }
  return (
    <div className="flex gap-1 my-1 text-blue-500">
      {rates.map((rate, index) => (
        <div key={index} className="flex gap-1 items-center">
          <MdStarRate size={24} color="blue" />
        </div>
      ))}
    </div>
  );
};
const Rating = ({ reviews = [] }) => {
  let totalRate = 0;
  reviews.map((rate) => {
    return (totalRate += rate.rating);
  });
  totalRate = totalRate / reviews.length;
  let rates = [];
  for (let i = 0; i < totalRate; i++) {
    rates.push(i);
  }
  return (
    <>
      <span className="flex justify-center text-blue-600 text-2xl">
        {totalRate} {"/"} 5
      </span>
      <div className="flex gap-1 my-1 justify-center items-center text-blue-500">
        {rates.map((rate, index) => (
          <div key={index} className="flex gap-1 ">
            <MdStarRate size={25} color="blue" />
          </div>
        ))}
      </div>
    </>
  );
};
const CheckRates = ({ reviews }) => {
  const nums = [5, 4, 3, 2, 1];
  const totalRev = (num) => {
    let arr = reviews.filter((review) => review.rating === num);
    return arr.length;
  };
  return (
    <>
      {nums.map((num, index) => (
        <div key={index} className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <span>{num}</span>
            <MdStarRate color="blue" />
            <span>({totalRev(num)})</span>
          </div>
          <ProgressBar
            now={totalRev(num)}
            className="w-[7.5rem]"
            max={100}
            min={0}
            variant="info"
          />
        </div>
      ))}
    </>
  );
};

const reviews = ({ reviews }) => {
  return (
    <div className="seg_bg_primary my-3 p-2">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl">Verified Customer Feedback</h2>
        <Link className="text-xl text-blue-700" href="#">
          View all
        </Link>
      </div>
      {reviews ? (
        <div className="flex gap-3">
          <div className="w-[15rem] p-1">
            <h4 className="mb-3">
              VERIFIED RATINGS (<span>{reviews.length}</span>)
            </h4>
            <div className=" bg-gray-300 mb-3 py-3 flex flex-col gap-2">
              <Rating reviews={reviews} />
              <p className="text-center">
                <span>{reviews.length}</span> verified ratings
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <CheckRates reviews={reviews} />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="mb-3">
              COMMENTS FROM VERIFIED PURCHASES(<span>{reviews.length}</span>)
            </h4>
            <div className="flex flex-col gap-2">
              {reviews.map((review) => (
                <div key={review.user_id} className="mb-4">
                  <h1 className="star_plug">
                    <Rate num={review.rating} />
                  </h1>
                  <h1 className="text-xl font-medium my-2">Its great</h1>
                  <h4>{review.comment}</h4>
                  <div className="flex w-full justify-between mt-3">
                    <span>
                      {review.date} by {review.user_name}
                    </span>
                    <h4 className="text-green-400 w-fit">Verified purchase</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-normal">No Reviews Yet</h1>
        </div>
      )}
    </div>
  );
};

export default reviews;
