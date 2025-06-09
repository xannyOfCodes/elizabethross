import "./Rating.css";

const Rating = (props: any) => {
  return (
    <>
      <div className="rating">
        <img src={props.starRatingOne} alt="" />
        <img src={props.starRatingTwo} alt="" />
        <img src={props.starRatingThree} alt="" />
        <img src={props.starRatingFour} alt="" />
        <img src={props.starRatingFive} alt="" />
      </div>
    </>
  );
};

export default Rating;
