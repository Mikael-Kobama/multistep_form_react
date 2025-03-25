import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          <p>Insastisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiSmileFill />
          <p>Sastisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiHeartEyesFill />
          <p> Muito Sastisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua expêriencia com o produto..."
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
