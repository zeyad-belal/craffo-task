document.addEventListener("DOMContentLoaded", () => {
  const menuMapping = [
    { itemClass: "device-item", menuClass: "device-menu" },
    { itemClass: "category-item", menuClass: "category-menu" },
    { itemClass: "collections-item", menuClass: "collections-menu" },
  ];

  menuMapping.forEach((mapping) => {
    const items = document.querySelectorAll(`.${mapping.itemClass}`);
    const menu = document.querySelector(`.${mapping.menuClass}`);

    items.forEach((item) => {
      item.addEventListener("mouseover", () => {
        menu.style.display = "flex";
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
      });

      item.addEventListener("mouseout", () => {
        menu.style.display = "hidden";
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
      });
    });
  });

  const texts = [
    "Discover : The Heritage Collection Learn more",
    "Informations about COVID19. Learn more",
  ];
  let currentIndex = 0;
  const textDisplay = document.getElementById("textDisplay");
  let interval; // Declare interval variable

  function updateText(index) {
    textDisplay.textContent = texts[index];
  }

  function nextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText(currentIndex);
  }

  // Function to start automatic rotation
  function startRotation() {
    interval = setInterval(nextText, 3000); // Change text every 3 seconds
  }

  // Initial setup
  updateText(currentIndex);
  startRotation(); // Start automatic rotation

  // Event listeners for manual control
  document.getElementById("leftArrow").addEventListener("click", () => {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateText(currentIndex);
    startRotation();
  });

  document.getElementById("rightArrow").addEventListener("click", () => {
    clearInterval(interval);
    nextText();
    startRotation();
  });

  const menuToggle = document.querySelectorAll(".menuTogglebtn");
  const sideMenu = document.getElementById("sideMenu");
  const menuItems = document.querySelectorAll("#menuItems > li");

  // Toggle side menu visibility
  menuToggle.forEach((btn) => {
    btn.addEventListener("click", () => {
      sideMenu.classList.toggle("left-[63%]");
    });
  });

  // Toggle submenu visibility on menu item click
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  const swiper = new Swiper(".swiper", {
    speed: 300,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const Myswiper = document.querySelector(".swiper").swiper;

  // Now you can use all slider methods like
  Myswiper.slideNext();
});
