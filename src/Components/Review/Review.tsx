import "./Review.css";
import userOneImageUrl from "../../assets/image (3).webp";
import userTwoImageUrl from "../../assets/image (4).webp";
import userThreeImageUrl from "../../assets/image (5).webp";
import userFourImageUrl from "../../assets/image (6).webp";
import userFiveImageUrl from "../../assets/image (7).webp";
import userSixImageUrl from "../../assets/image (8).webp";
import yellowStarImg from "../../assets/star-yellow.png";
import whiteStarImg from "../../assets/star-white.png";
import Rating from "../Rating/Rating";

const ReviewCard = (props: any) => {
  return (
    <>
      <div className="reviewCard">
        <img src={props.url} alt={props.alt} />
        <p>{props.review}</p>
        <p>{props.userName}</p>
        <p>{props.rating}</p>
      </div>
    </>
  );
};

const Review = () => {
  return (
    <>
      <div className="reviews">
        <p>
            Testimonial
        </p>
        <p>
            Client's Review
        </p>
        <div className="review">
          <div>
            <ReviewCard
            url={userOneImageUrl}
            review="Elizabeth Ross has been a trusted advisor, guiding me through complex financial decisions with clarity. Her support has been key in achieving my financial milestones."
            userName="Sophia L"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={whiteStarImg}
          />
          </p>
          </div>

          <div>
            <ReviewCard
            url={userTwoImageUrl}
            review={`
                I can't recommend Elizabeth Ross enough for business planning. 
                Her strategic approach helped me optimize my finances, leading 
                to increased profits and business growth.
                `}
            userName="Loreta A"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={yellowStarImg}
          />
          </p>
          </div>

          <div>
            <ReviewCard
            url={userThreeImageUrl}
            review={`
                Elizabeth Ross's advice has given me complete confidence in my 
                financial future. She helped me create a diversified portfolio and 
                provided smart tax-saving strategies.
                `}
            userName="Sara M"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={whiteStarImg}
          />
          </p>
          </div>

          <div>
            <ReviewCard
            url={userFourImageUrl}
            review={`
                Thanks to Elizabeth Ross's financial wellness program, 
                I’ve eliminated my debt and gained better control over my 
                finances. Her advice has transformed my financial outlook.
                `}
            userName="Caroline M"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={whiteStarImg}
          />
          </p>
          </div>

          <div>
            <ReviewCard
            url={userFiveImageUrl}
            review={`
                Elizabeth Ross’s expert advice has been instrumental in expanding 
                my wealth. Her recommendations are always on point, and I’ve seen 
                consistent financial growth under her guidance.
                `}
            userName="James B"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={yellowStarImg}
          />
          </p>
          </div>
          <div>
            <ReviewCard
            url={userSixImageUrl}
            review={`
                Elizabeth Ross’s portfolio management skills are exceptional. 
                Her insights have helped me make informed decisions, and I trust 
                her completely with my financial strategy.
                `}
            userName="Peter D"
          />
          <p>
            <Rating
            starRatingOne={yellowStarImg}
            starRatingTwo={yellowStarImg}
            starRatingThree={yellowStarImg}
            starRatingFour={yellowStarImg}
            starRatingFive={yellowStarImg}
          />
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
