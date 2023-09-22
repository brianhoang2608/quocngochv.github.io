"use strict";
function subMit() {
  // Dua email dinh dang in hoa ve in thuong
    const emailValue = document.getElementById("email").value.toLocaleLowerCase();
    const errorEmail = document.getElementById("error-email");
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // kiem tra mail co dung dinh dang chua
    const checK = emailValue.match(checkMail);

    const inFo = document.querySelector(".infomation");

    const submitBtn = document.getElementById("submit-email");
    // kiem tra mail va show thong tin ca nhan
    if(checK){
        inFo.style.display = "block";
        submitBtn.style.display = "none";
        errorEmail.innerHTML = "";
    } else {
        errorEmail.innerHTML = "Định dạng Email chưa chính xác"
    }
}

// Click viewmore va viewless
function handleOnMouseOver(element) {
    const viewMore = element.querySelector(".control-view");
    viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
    const viewMore = element.querySelector(".control-view");
    if (!viewMore.classList.value.includes("view-less"))
      viewMore.style.display = "none";
}
// ham show thong tin kinh nghiem va dong
function handleViewMore(element) {
    const parentElement = element.closest(".parent");
    const viewMore = parentElement.querySelector(".control-view");
    const hide = parentElement.querySelectorAll(".hide");
    // click chuyen tu viewmore sang viewless
    if (viewMore.classList.value.includes("view-more")) {
      hide.forEach((element) => {
        element.style.display = "block";
      });
  
      viewMore.classList.remove("view-more");
      viewMore.classList.add("view-less");
      viewMore.innerHTML = " View less";
    } 
    // dua ve trang thai ban dau
    else {
      hide.forEach((element) => {
        element.style.display = "none";
      });
      viewMore.classList.remove("view-less");
      viewMore.classList.add("view-more");
      viewMore.innerHTML = "View more";
    }
}