const programsData = [
  {
      title: "Наши продукты",
      text: "Плов — блюдо восточной кухни, основу которого составляет варёный рис (в исключительных случаях — другая крупа или мелкие макаронные изделия).",
      image: "./images/main-services/main-product-1.png",
  },
  {
    title: "Наши продукты",
      text: "Жаркое — это всем известное вкусное и питательное блюдо, похожее на венгерский гуляш. Мягкое разваренное мясо, тушенное с картофелем, овощами и специями, обильно поливается наваристой подливой и подается в горшочке.",
      image: "./images/main-services/main-product-2.png",
  },
  {
    title: "Наши продукты",
    text: "Лапша – это макаронное изделие в виде длинных узких полос теста. Изготавливают ее из различной муки, поэтому есть пшеничная и рисовая лапша. Если в качестве добавки к тесту используются яйца, то это, так называемая, яичная лапша.",
    image: "./images/main-services/main-product-3.png",
  },
  {
    title: "Наши продукты",
    text: "Суп — жидкое блюдо, в составе которого содержится не менее 50 % жидкости. Жидкую часть супа называют основой, плотную — гарниром.",
    image: "./images/main-services/main-product-4.png",
  },
  {
    title: "Наши продукты",
    text: "Гречка, или гречневая крупа, является зерновым продуктом, получаемым из семян растения гречихи (Fagopyrum esculentum). Гречка широко распространена и популярна во многих странах, особенно в Восточной Европе и России.",
    image: "./images/main-services/main-product-5.png",
  },
  {
    title: "Наши продукты",
    text: "Пюре (фр. puree) — перетёртые либо размятые пищевые продукты.",
    image: "./images/main-services/main-product-6.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const programBlocks = document.querySelectorAll(".program-block");
  const programModal = document.getElementById("program-modal");
  const programContent = document.querySelector(".program-content");
  const closeModalButton = document.getElementById("program-close-modal");

  programBlocks.forEach((block, index) => {
      block.addEventListener("click", () => {
          programModal.style.display = "block";
          const programData = programsData[index];
          
          // Обновление контента модального окна
          programContent.innerHTML = `
            <div class="program-content__title">
              <h2>${programData.title}</h2>      
            </div>
            <div class="program-content__block">
              <div class="program-content__description">
                <p>${programData.text}</p>
              </div>
              <div class="program-content__photo">
                <img src="${programData.image}" alt="${programData.title}">
              </div>           
            </div>
          `;
      });
  });

  closeModalButton.addEventListener("click", () => {
      programModal.style.display = "none";
  });
});
