/* Xử lý thêm - xóa class active vào menu hiện tại dùng Js thuần*/
let allMenus = document.querySelector(".all-menu");
let menus = allMenus.querySelectorAll(".menu"); // Dom tới tất cả các element có class .menu

for (let i = 0; i < menus.length; i++) {
  //Thêm sự kiện click vào tất cả các element đó
  menus[i].addEventListener("click", function () {
    let current = document.querySelector(".active");
    //Bỏ class active của những menu khác khi click 1 menu bất kỳ
    if (current !== this && current !== null)
      current.className = current.className.replace(" active", "");
    // Toggle class active của 1 menu khi được click
    this.classList.toggle("active");

    // Xu ly submenu của menu đang được active hiện tại
    let subMenus = this.querySelectorAll(".sub-menu-1-child");
    for (let j = 0; j < subMenus.length; j++) {
      // Thêm sự kiện mouseover vào tất cả các submenu của menu đang được active
      subMenus[j].addEventListener("mouseover", function () {
        //Bỏ class active2 của các submenu khác khi click 1 submenu bất kỳ
        let current = document.querySelector(".active2");
        if (current !== null)
          current.className = current.className.replace(" active2", "");
        //toggle Class active2 của 1 submenu khi được click
        this.className += " active2";

        // Khi mouseout khỏi submenu thì xóa bỏ class active2 tại submenu đó
        this.addEventListener("mouseout", () => {
          this.className = this.className.replace(" active2", "");
        });
      });
    }
  });
}

//Khi ấn vào những phần khác navigation thì đóng tất cả các submenu lại
window.onclick = function (event) {
  if (!event.target.matches(".menu")) {
    let menuChild = document.querySelector(".active");
    if (menuChild !== null) menuChild.classList.remove("active");
  }
};

// Xử lý dropdown Đào tạo sau đại học section
let afterUniItem = document.querySelectorAll(".after-uni-item"); // Dom đến tất cả các element có class .after-uni-item
for (let i = 0; i < afterUniItem.length; i++) {
  // Thêm sự kiện click vào các element đó
  afterUniItem[i].addEventListener("click", function () {
    // Tìm các element có class .after-uni-item-child có trong element đang dc click
    let afterUniItemChild = this.querySelector(".after-uni-item-child");

    // Xử lí ẩn hiện borderBottom
    if (afterUniItemChild !== null) {
      if (afterUniItemChild.classList.contains("active3")) {
        this.style.borderBottom = "1px solid  rgba(214, 205, 205, 0.8)";
      } else {
        this.style.borderBottom = "none";
      }

      // Xử lý xóa class active3 của những element khác khi click 1 element
      let current = document.querySelector(".active3");
      if (current !== afterUniItemChild && current !== null)
        current.className = current.className.replace(" active3", "");
      // Xử lí toggle class active3 khi click 1 element
      afterUniItemChild.classList.toggle("active3");
    }
  });
}

let hamburger = document.querySelector(".hamburger"); // Dom tới element có class hamburger
// Thêm sự sự click khi click vào hamburger icon
hamburger.addEventListener("click", function () {
  // Xử lý ẩn / hiện menu
  let allMenuSmall = document.querySelector(".all-menu-small");
  if (allMenuSmall.style.display === "none") {
    allMenuSmall.style.display = "block";
  } else {
    allMenuSmall.style.display = "none";
  }
});

// Xử lý menu khi ở small screen
let menuSmall = document.querySelectorAll(".menu-small");
for (let i = 0; i < menuSmall.length; i++) {
  //Thêm sự kiện click vào các menu
  menuSmall[i].addEventListener("click", function () {
    // Xử lý xóa class active4 ở cac1 element khác khi click vào 1 element
    let currentActive = document.querySelector(".active4");
    if (currentActive != null && currentActive !== this) {
      currentActive.className = currentActive.className.replace(" active4", "");
    }
    // toggle class active4 khi click vào 1 element
    this.classList.toggle("active4");
  });
}
