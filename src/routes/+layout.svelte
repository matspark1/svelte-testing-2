<div class="nav-holder">
  <div class="logo">RGX AI</div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login" class="login">Login</a></li>
    </ul>
  </nav>
  <div class="hamburger-icon" id="mobilebutton">
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
    <ul class="mobile-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/contact"><i class="fa-solid fa-cart-shopping" /></a></li>
      <li><a href="/login" class="login">Login</a></li>
    </ul>
  </div>
</div>
<slot />
<div class="footer">
  <div class="footer-container">
    <div class="copyright">
      <p>2023</p>
    </div>
    <div class="links">
      <a href="/careers">Careers</a>
    </div>
    <div class="socials">
      <a href="/">i</a>
    </div>
  </div>
</div>

<style lang="scss">
  .nav-holder {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #141414;
    overflow: hidden;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }
    .logo {
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      margin-left: 30px;
    }
    .login {
      background-color: #fff;
      text-decoration: none;
      color: #141414;
      font-weight: bold;
      font-size: 20px;
      padding: 7px 12px;
      border-radius: 20px;
      &:hover {
        background-color: #141414;
        border: 1px solid #fff;
        color: #fff;
      }
    }
    nav {
      width: 50%;
      margin-right: 60px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      transition: ease 0.3s;
      li {
        transition: ease 0.2s;
        &:hover {
          transform: scale(1.085);
          transition: ease 0.2s;
        }
      }
    }
    .hamburger-icon {
      margin: auto 0;
      display: none;
      cursor: pointer;
      transition: ease 0.3s;
      div {
        background-color: #fff;
        width: 34px;
        height: 4px;
        margin: 8px 0;
        transition: ease 0.3s;
        border-radius: 10px;
      }
    }
    .open .bar1 {
      transform: rotate(-45deg) translate(-9px, 8px);
    }
    .open .bar2 {
      opacity: 0;
    }
    .open .bar3 {
      transform: rotate(45deg) translate(-9px, -8px);
    }

    .open .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: slide-down 0.25s ease-in-out;
    }

    @keyframes slide-down {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    .mobile-menu {
      display: none;
      position: absolute;
      top: 80px;
      left: 0;
      height: calc(100vh - 80px);
      width: 100%;
      background-color: rgba($color: #202020, $alpha: 0.5);
      transition: ease 0.3s;
      z-index: 9999;
      justify-content: space-evenly;
      li {
        transition: ease 0.2s;
        &:hover {
          transform: scale(1);
          transition: ease 0.2s;
        }
      }
    }
  }

  @media (max-aspect-ratio: 1 / 1) {
    .nav-holder {
      nav {
        display: none;
      }
      .hamburger-icon {
        display: block;
        margin-right: 30px;
      }
    }
  }
</style>
