import styles from "./loader.module.css";
export const MagicLoader = () => {
  return (
    <div className="h-screen w-screen grid place-items-center box-border overflow-hidden ">
      <div className="flex flex-col gap-4 items-center">
        <div className={styles.loader}>
          <div className={styles.loader__bar}></div>
          <div className={styles.loader__bar}></div>
          <div className={styles.loader__bar}></div>
          <div className={styles.loader__bar}></div>
          <div className={styles.loader__bar}></div>
          <div className={styles.loader__ball}></div>
        </div>

        <p>Loggin in with magic link...</p>
      </div>
    </div>
  );
};
