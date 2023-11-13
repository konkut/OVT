(() => {
  /*ACCION REDIMENSIONAR */
  function ajustarFontSize() {
    const anchoViewport = document.documentElement.clientWidth;
    const heightViewport = document.documentElement.clientHeight;
    const nuevoTamanioX = anchoViewport / 20;
    const nuevoTamanioY = heightViewport / 20;
    document.documentElement.style.fontSize = `${nuevoTamanioX}%`;
    document.documentElement.style.fontSize = `${nuevoTamanioY}%`;
  }

  window.addEventListener("resize", ajustarFontSize);
  window.addEventListener("load", ajustarFontSize);

  /*AMPLIAR IMAGENES*/
  const codigoQr1 = document.querySelector(".main__section-qr");
  document.addEventListener("click", (e) => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const img = document.createElement("IMG");

    const animation = (element) => {
      main.setAttribute("style", "filter: blur(7px);");
      const elementoPadre = element.parentNode;
      const urlImagen = element.src;
      img.src = urlImagen;
      const computedStyleTwo = window.getComputedStyle(elementoPadre);
      const backgroundColor =
        computedStyleTwo.getPropertyValue("background-color");
      img.classList.add("QrGeneralStyles");
      img.style.backgroundColor = backgroundColor;
      setTimeout(() => {
        body.appendChild(img);
      }, 500);
      return;
    };

    if (e.target.matches(".main__section-qr img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-aside-content img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-whatssap img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-telegram img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-content-services img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-content-instructions img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-step-one img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-step-two img")) {
      animation(e.target);
    }
    if (e.target.matches(".main__section-step-three img")) {
      animation(e.target);
    }

    /*REDICCIONAR*/
    if (e.target.matches(".main__section-picture")) {
      window.location.href = "../index.html";
    }

    if (
      e.target.matches(".main__section-title-social-media:nth-child(1) img")
    ) {
      window.location.href = "https://wa.me/message/U2XY76KMS7KOM1";
    }

    if (
      e.target.matches(".main__section-title-social-media:nth-child(2) img")
    ) {
      window.location.href = "http://t.me/bootOvt_bot";
    }

    if (
      e.target.matches(".main__section-title-social-media:nth-child(3) img")
    ) {
      window.location.href =
        "mailto:soporteovt@mintrabajo.gob.bo?Subject=Soporte%20técnico%20de%20la%20Oficina%20Virtual%20de%20Trámites";
    }

    if (body.children[3]) {
      main.removeAttribute("style", "filter: blur(7px);");
      body.removeChild(body.children[3]);
      return;
    }
  });

  /*BUTTON ACCION VOLTEAR */
  const boxButton = document.querySelector(".box");
  const content = document.querySelector(".content-article");
  const content1 = document.querySelector(".content-article-1");

  const mqLarge = window.matchMedia("(min-width: 1250px)");
  mqLarge.addEventListener("change", mqHandler);
  function mqHandler(e) {
    if (e.matches) {
      boxButton.textContent = "Voltear";
    } else {
      boxButton.textContent = "Continuar";
    }
  }
  mqHandler(mqLarge);

  let c = 1,
    computedStyle1,
    transform1;
  boxButton.addEventListener("click", (e) => {
    const frontface = document.querySelector(".content-article-1 .frontface");
    const backface = document.querySelector(".content-article-1 .backface");
    const main__section1 = frontface.children[0];
    const main__section2 = frontface.children[1];
    const main__section3 = backface.children[0];
    const main__section4 = backface.children[1];

    if (boxButton.textContent.trim() == "Voltear") {
      const computedStyle = window.getComputedStyle(content);
      const transform = computedStyle.getPropertyValue("transform");
      if (transform == "none") {
        content.setAttribute("style", "transform: rotateY(180deg)");
        return;
      } else {
        content.removeAttribute("style", "transform: rotateY(180deg)");
        return;
      }
    }

    if (boxButton.textContent.trim() == "Continuar") {
      if (c == 5) {
        c = 1;
      }
      if (c == 1) {
        main__section3.setAttribute(
          "style",
          "display: flex; width: 100% !important;"
        );
        main__section4.setAttribute("style", "display: none");
        computedStyle1 = window.getComputedStyle(content1);
        transform1 = computedStyle1.getPropertyValue("transform");
        if (transform1 != "none")
          content1.removeAttribute("style", "transform: rotateY(180deg)");
        if (transform1 == "none") {
          content1.setAttribute("style", "transform: rotateY(180deg)");
        }
        c++;
        return;
      }
      if (c == 2) {
        main__section2.setAttribute(
          "style",
          "display: flex; width: 100% !important;"
        );
        main__section1.setAttribute("style", "display: none");
        computedStyle1 = window.getComputedStyle(content1);
        transform1 = computedStyle1.getPropertyValue("transform");
        if (transform1 != "none")
          content1.removeAttribute("style", "transform: rotateY(180deg)");
        if (transform1 == "none") {
          content1.setAttribute("style", "transform: rotateY(180deg)");
        }
        c++;
        return;
      }
      if (c == 3) {
        main__section4.setAttribute(
          "style",
          "display: flex; width: 100% !important;"
        );
        main__section3.setAttribute("style", "display: none");
        computedStyle1 = window.getComputedStyle(content1);
        transform1 = computedStyle1.getPropertyValue("transform");
        if (transform1 != "none")
          content1.removeAttribute("style", "transform: rotateY(180deg)");
        if (transform1 == "none") {
          content1.setAttribute("style", "transform: rotateY(180deg)");
        }
        c++;
        return;
      }
      if (c == 4) {
        main__section1.setAttribute(
          "style",
          "display: flex; width: 100% !important;"
        );
        main__section2.setAttribute("style", "display: none");
        computedStyle1 = window.getComputedStyle(content1);
        transform1 = computedStyle1.getPropertyValue("transform");
        if (transform1 != "none")
          content1.removeAttribute("style", "transform: rotateY(180deg)");
        if (transform1 == "none") {
          content1.setAttribute("style", "transform: rotateY(180deg)");
        }
        c++;
        return;
      }
    }
  });
})();
