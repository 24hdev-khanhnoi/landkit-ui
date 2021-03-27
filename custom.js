let btnNavIconElm = document.querySelector("#btnNavIconId");
let bodyElm = document.querySelector("body");
let menuListSmallElm = document.querySelector("#menuListSmallId");
let menuListSmallChildElm = document.querySelector("#menuListSmallId *");
let btnCloseMenuElm = document.querySelector("#btnCloseMenuId");

menuListSmallChildElm.style.color = "red";

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

// end event
