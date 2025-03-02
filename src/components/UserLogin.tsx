"use client";

import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import styles from "@/styles/header.module.scss";

const UserLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [showUserList, setShowUserList] = useState(false);
  const { setUser, currentUser, users } = useUserStore();

  return (
    <div className={styles.userLogin}>
      <span className={styles.heavyborder}>&nbsp;</span>
      <div className={styles.loginSection}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ENTER USERNAME"
        />
        <button onClick={() => setUser(username)} disabled={!username.trim()}>
          LOGIN
        </button>
      </div>
      {currentUser && (
        <div className={styles.userSelection}>
          <span className={styles.currentUser}>
            CURRENT USER <span className={styles.userName}>{currentUser}</span>
          </span>
          <button onClick={() => setShowUserList(!showUserList)}>
            {showUserList ? "HIDE USERS" : "SWITCH USER"}
          </button>
          <div
            className={`${styles.userList} ${showUserList ? styles.show : ""}`}
          >
            {Object.keys(users).map((user) => (
              <button key={user} onClick={() => setUser(user)}>
                {user}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
