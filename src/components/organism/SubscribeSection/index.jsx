/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import "./style.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h3>Subscribe on our newsletter</h3>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <form>
        <div>
          <img src="/assets/email.svg" alt="email icon" />
          <input type="text" placeholder="Email" />
        </div>
        {/* <Input type="text" placeholder="Email"/> */}
        <Button text="Subscribe" color="secondary" variant="primary" />
      </form>
    </div>
  );
};

export default Subscribe;
