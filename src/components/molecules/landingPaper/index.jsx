import AccountImage from "@/components/atoms/AccountImage";
import Paper from "@/components/atoms/Paper";
import "./style.css"

const LandingPaper = () => {
  return (
    <div className="paper">
      <div className="account__paper">
        <div>
          <AccountImage />
          <p>Hi, user <br /> lets get stated</p>
        </div>
        <button>Join now</button>
        <button>Log in</button>
      </div>
      {/* <Paper textPaper="Get US $10 off with a new supplier" variant="orange" />
      <Paper textPaper="Send quotes with supplier preferences" variant="light-blue" /> */}
      <Paper textPaper="Get US $10 off with a new supplier" />
      <Paper textPaper="Send quotes with supplier preferences" />
    </div>
  );
};

export default LandingPaper;
