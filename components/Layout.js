import styles from "../styles/Layout.module.css";

// Layouts are used to wrap around pages

// children are the components this layout will wrap around
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Hello</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
