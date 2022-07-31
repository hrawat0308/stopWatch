import classes from "./Header.module.css";

const Header = function (props) {
  return (
    <div>
      <h1 className={classes.header}>Stop Watch</h1>
    </div>
  );
};

export default Header;