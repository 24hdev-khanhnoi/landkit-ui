let btnNavIconElm = document.querySelector("#btnNavIconId");
let bodyElm = document.querySelector("body");
let menuListSmallElm = document.querySelector("#menuListSmallId");
// let menuListSmallChildElm = document.querySelector("#menuListSmallId *");
let btnCloseMenuElm = document.querySelector("#btnCloseMenuId");
let itemMenuInSmallDevicesElms = document.querySelectorAll(
  ".menuSmallItem_full_linkWrapper"
);

let btnFormAboutElm = document.querySelector("#btnFormAboutId");
let formAboutElm = document.querySelector("#formAboutId");

let wrongEmailElm = document.querySelector("#wrongEmailId");
let wrongNameElm = document.querySelector("#wrongNameId");
let wrongPassElm = document.querySelector("#wrongPassId");

// console.log("menuSmallItem_full_linkWrapper", itemMenuInSmallDevicesElms);

// event

// --handle icon Nav
btnNavIconElm.addEventListener("click", () => {
  console.log("Click btnNavIcon");

  let checkMenu = bodyElm.getAttribute("menu");
  //   console.log(checkMenu);
  if (checkMenu === "true") {
    //open body
    bodyElm.style.margin = "";
    bodyElm.style.height = ``;
    bodyElm.style.overflow = "";
    bodyElm.setAttribute("menu", "false");
    // menuListSmallElm.style.display = "none";
    menuListSmallElm.style.width = "0";
    menuListSmallElm.style.height = "0";
    menuListSmallElm.style.opactity = "0";
  } else {
    //dispaly menu
    //lock body
    // console.log("Lock");
    bodyElm.style.margin = 0;
    bodyElm.style.height = `100%`;
    bodyElm.style.overflow = "hidden";
    bodyElm.setAttribute("menu", "true");
    menuListSmallElm.style.display = "flex";
    menuListSmallElm.style.width = `calc(100% - 2rem)`;
    menuListSmallElm.style.height = "100vh";
    menuListSmallElm.style.opacity = "1";

    // menuListSmallChildElm.style.color = "";

    //icon x display
    btnCloseMenuElm.style.display = "block";
  }
});
// --End handle icon Nav

// --handle icon close menu

btnCloseMenuElm.addEventListener("click", () => {
  console.log("close menu");
  bodyElm.style.margin = "";
  bodyElm.style.height = ``;
  bodyElm.style.overflow = "";
  bodyElm.setAttribute("menu", "false");
  //   menuListSmallElm.style.display = "none";
  menuListSmallElm.style.width = "0";
  menuListSmallElm.style.height = "0";
  menuListSmallElm.style.opactity = "0";
  //icon x hide
  btnCloseMenuElm.style.display = "none";
  //   menuListSmallChildElm.style.color = "#fff";
});

// --Endhandle icon close menu

// handle item menu in small devices

for (let i = 0; i < itemMenuInSmallDevicesElms.length; i++) {
  itemMenuInSmallDevicesElms[i].addEventListener("click", (e) => {
    // console.log(i);
    let checkStatus = itemMenuInSmallDevicesElms[i].getAttribute("status");
    if (checkStatus === "default") {
      changeItemMenuSmall(i, "down");
      // itemMenuInSmallDevicesElms[i].classList.add(
      //   "menuSmallItem_full_iconWrapper-down"
      // );
      // itemMenuInSmallDevicesElms[i].setAttribute("status", "down");
    } else {
      changeItemMenuSmall(i, "default");
      // itemMenuInSmallDevicesElms[i].classList.remove(
      //   "menuSmallItem_full_iconWrapper-down"
      // );
      // itemMenuInSmallDevicesElms[i].setAttribute("status", "default");
    }
  });

  const changeItemMenuSmall = (index, statusString) => {
    if (statusString === "down") {
      itemMenuInSmallDevicesElms[i].classList.add(
        "menuSmallItem_full_iconWrapper-down"
      );
      itemMenuInSmallDevicesElms[i].setAttribute("status", "down");
      //rest
      for (let i = 0; i < itemMenuInSmallDevicesElms.length; i++) {
        if (i !== index) {
          itemMenuInSmallDevicesElms[i].classList.remove(
            "menuSmallItem_full_iconWrapper-down"
          );
          itemMenuInSmallDevicesElms[i].setAttribute("status", "default");
        }
      }
    } else {
      itemMenuInSmallDevicesElms[i].classList.remove(
        "menuSmallItem_full_iconWrapper-down"
      );
      itemMenuInSmallDevicesElms[i].setAttribute("status", "default");
    }
  };
}

// End handle item menu in small devices

// Form Event

// btnFormAboutElm.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("hanhle Btn Submit Form");
// });

formAboutId.addEventListener("submit", (e) => {
  e.preventDefault();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // pointer-events: none;
  console.log("--- Form Submit ---");
  let name = e.target.name.value;
  let email = e.target.email.value;
  let password = e.target.password.value;
  let statusDone = 0;

  if (name === "") {
    wrongNameElm.innerHTML = "Name is required !!";
  } else {
    wrongNameElm.innerHTML = "";
    statusDone++;
  }

  if (email === "") {
    wrongEmailElm.innerHTML = "Email is required !!";
  } else if (!validateEmail(email)) {
    wrongEmailElm.innerHTML = "Email is not in the correct format";
  } else {
    wrongEmailElm.innerHTML = "";
    statusDone++;
  }

  if (password === "") {
    wrongPassElm.innerHTML = "Password is required !!";
  } else if (password.length < 8)
    wrongPassElm.innerHTML = "Password must be over 8 characters";
  else {
    wrongPassElm.innerHTML = "";
    statusDone++;
  }

  if (statusDone === 3) {
    console.log(name, email, password);
  }

  // btnFormAboutElm.style.pointerEvents = "none";
  // setTimeout(() => {
  //   btnFormAboutElm.style.pointerEvents = "";
  // }, 400);
});
// End Form Event
// end event
