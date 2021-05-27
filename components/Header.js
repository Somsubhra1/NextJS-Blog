import headerStyles from "../styles/Header.module.css";

const Header = () => {
  //   const x = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep updated with latest Web Dev News
      </p>

      {/*
        writing styles within component with conditionals
        <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
        </style>*/}
    </div>
  );
};

export default Header;
