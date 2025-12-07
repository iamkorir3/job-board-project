import { useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
export default function Navigation({ cart }) {
  const [searchQerry, setSearchQerry] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [navMouseEvents, setNavMouseEvents] = useState(false);

  function handleNavOpen() {
    setNavOpen(navOpen === true ? false : true);
  }
  function handleNavOpenEnter() {
    setNavMouseEvents(true);
    return navMouseEvents;
  }
  function handleNavOpenLeave() {
    setNavMouseEvents(false);
  }

  function handleSetQuerry(querry) {
    setSearchQerry(querry);
  }

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.sidNav}>
          <button
            className={styles.navBtn}
            onClick={handleNavOpen}
            onMouseEnter={handleNavOpenEnter}
            onMouseLeave={handleNavOpenLeave}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ProductsNav />

        <div className={styles.navBtns}>
          <SearchBar searchQerry={searchQerry} onSetQuerry={handleSetQuerry} />
          {/* <NavLink> */}
          <Link to="signup">
            <Profile />
          </Link>
          <Link to="cart">
            <Cart cart={cart} />
          </Link>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <div>
      <h2 className={styles.heading}>Digistore</h2>
    </div>
  );
}

function SearchBar({ searchQerry, onSetQuerry }) {
  const [searchOpen, SetSearchOpen] = useState(false);
  function handleSearchOpen() {
    SetSearchOpen(searchOpen === true ? false : true);
  }
  return (
    <div className={styles.search}>
      {searchOpen && (
        <input
          type="text"
          placeholder="men's clothings"
          value={searchQerry}
          onChange={(e) => onSetQuerry(e.target.value)}
        />
      )}

      <button
        onMouseEnter={handleSearchOpen}
        onMouseLeave={handleSearchOpen}
        className={styles.navBtn}
      >
        {/* <ion-icon name="search-circle"></ion-icon> */}
        <ion-icon name="search"></ion-icon>
      </button>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <button className={styles.navBtn}>
        {" "}
        <ion-icon name="person"></ion-icon>
      </button>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <button className={styles.navBtn}>
        <ion-icon name="cart"></ion-icon>
      </button>
    </div>
  );
}

function SideMenu({ navOpen, navMouseEvents }) {
  return (
    <>
      {navOpen || navMouseEvents ? (
        <div className={styles.menu}>
          <button>jkcfvvnv</button>
          <button>Korir btn</button>
          <button>code, testing keyboarb</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ProductsNav() {
  return (
    <div className={styles.Productsnav}>
      <Link to="home">
        <p>Home</p>
      </Link>
      <Link to="job">
        <p>Job</p>
      </Link>
      <Link to="explore">
        <p>Explore</p>
      </Link>
      <Link to="contact">
        <p>Contact</p>
      </Link>
      <Link to="furniture">
        <p>Pages</p>
      </Link>
      <Link to="profile"></Link>
    </div>
  );
}
