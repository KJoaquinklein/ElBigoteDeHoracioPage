/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_CFQuIbiN.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FiInstagram, FiPhone } from 'react-icons/fi';
import { SlSocialSpotify } from 'react-icons/sl';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logobigotefinal.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>El Bigote de Horacio</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 h-screen flex flex-col justify-center"> <h1 class="font-titles text-5xl sm:text-6xl md:text-8xl text-center text-gray-300">EL BIGOTE DE HORACIO</h1> <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 justify-center mt-3 mb-20"> <a href="#discografia" class="links">
Discografía
</a> <a href="#biografia" class="links">
Biografía
</a> <a href="#contacto" class="links">
Contacto
</a> </div> </div>`;
}, "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/components/Hero.astro", void 0);

const $$Biografy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="biografia" class="bg-gray-700 pt-10 flex flex-col items-center pb-10"> <h2 class="font-subtitles text-4xl text-gray-300 mb-10">Biografía</h2> <div class="flex w-4/5 flex-col md:flex-row items-center justify-center"> <div class="font-subtitles text-2xl md:text-lg lg:text-2xl text-gray-300 w-full xl:w-5/12 mb-5 space-y-5 md:space-y-3 md:mr-4 lg:space-y-5 xl:space-y-7"> <p>El Bigote de Horacio se formó en Villa María (Córdoba) en el año 2018.</p> <p>
Sus composiciones están influenciadas por el Rock/Funk y su sonoridad por el Rock Indie. Entre
                sus canciones se perciben gran variedad de dinámicas, pasando de momentos cargados de ritmo, a
                otros con un tinte más “atmosférico”.
</p> <p>
Esta formación está integrada por: Agustín Chanquía (Guitarra y Voz), Santiago De Nicola
                (Guitarra y Voz), Gustavo Lafuente (Bajo) y Joaquín Klein (Batería).
</p> </div> <img src="src/assets/imgBio.jpg" alt="Foto de la banda" class="w-full sm:w-80"> </div> </div> <!--  w-5/12  -->`;
}, "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/components/Biografy.astro", void 0);

const $$Discografy = createComponent(($$result, $$props, $$slots) => {
  const discografyArray = [
    {
      id: 1,
      name: "Alunizar demos",
      year: "2018",
      cover: "src/assets/alunizarDemos.jpg",
      link: null
    },
    {
      id: 2,
      name: "Alunizar",
      year: "2021",
      cover: "src/assets/alunizar.jpg",
      link: "https://open.spotify.com/intl-es/album/6xVw94oR5e3mdRxldnyBLg?si=JM3-H1iHSoScPWHgnOVfVA"
    },
    {
      id: 3,
      name: "Popotitos",
      year: "2022",
      cover: "src/assets/popotitos.jpg",
      link: "https://open.spotify.com/intl-es/album/3r6EMSzFBu71859ulSf3Ra?si=SyAG7u3gSwKBo2tSXmKpqA"
    },
    {
      id: 4,
      name: "En Vivo Ccclf",
      year: "2022",
      cover: "src/assets/vivoCCCLF.jpg",
      link: "https://open.spotify.com/intl-es/album/0GHC08czswhWdMAwd0sXaF?si=TS67PLjDQRaUmfgHBeXfdg"
    },
    {
      id: 5,
      name: "Amores Rotos",
      year: "2023",
      cover: "src/assets/amoresRotos.jpg",
      link: "https://open.spotify.com/intl-es/album/778Wq86JDArtf24iqM6yQ7?si=4G7IIuwCQ5KefoBMeQqghA"
    },
    {
      id: 6,
      name: "Las Cosas Que Hoy Vendran",
      year: "2023",
      cover: "src/assets/lasCosasQueHoyVendran.jpg",
      link: "https://open.spotify.com/intl-es/album/3S9rWrFxUBLhVtHfKL3RVG?si=idpiQcBtSiCWOk7o4JtRpA"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="discografia" class="flex flex-col items-center bg-gray-300 pb-5"> <h2 class="mt-10 font-subtitles text-4xl text-gray-900">Discografía</h2> <div class="flex flex-wrap justify-center w-[90%] xl:w-4/5"> ${discografyArray.map((disc) => renderTemplate`<div class="my-5 w-80 flex flex-col items-center duration-200 hover:scale-105" data-aos="fade-up"> <a${addAttribute(disc.link, "href")} target="_black"> <img class="w-60 sm:w-40 md:w-52 xl:w-60 shadow-lg shadow-gray-800 mb-2"${addAttribute(disc.cover, "src")}> </a> <p class="font-subtitles text-2xl text-gray-900">${disc.name}</p> <p class="font-subtitles text-1xl text-gray-900">${disc.year}</p> </div>`)} </div> </div>`;
}, "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/components/Discografy.astro", void 0);

const Contact = () => {
  return /* @__PURE__ */ jsxs("div", { id: "contacto", className: "flex flex-col items-center bg-gray-300", children: [
    /* @__PURE__ */ jsx("h2", { className: "mt-10 font-subtitles text-4xl text-gray-900", children: "Contacto" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap grow justify-center content-start m-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-400 p-3 m-5 w-96 h-16 items-center", children: [
        /* @__PURE__ */ jsx(BiLogoGmail, { className: "text-4xl mr-3" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "elbigote.contacto@gmail.com" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/elbigotedehoracio/", target: "_blanck", children: /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-400 p-3 m-5 w-96 h-16 items-center", children: [
        /* @__PURE__ */ jsx(FiInstagram, { className: "text-4xl mr-3" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "@elbigotedehoracio" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://open.spotify.com/intl-es/artist/7r6I9Sd8gyxqkVyZJiYlKn?si=e8FfPop4Saa-O1dB4nKqAQ",
          target: "_blanck",
          children: /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-400 p-3 m-5 w-96 h-16 items-center", children: [
            /* @__PURE__ */ jsx(SlSocialSpotify, { className: "text-4xl mr-3" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "El Bigote de Horacio" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@elbigotedehoracio2018", target: "_blanck", children: /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-400 p-3 m-5 w-96 h-16 items-center", children: [
        /* @__PURE__ */ jsx(AiOutlineYoutube, { className: "text-4xl mr-3" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "El Bigote de Horacio" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-400 p-3 m-5 w-96 h-16 items-center", children: [
        /* @__PURE__ */ jsx(FiPhone, { className: "text-4xl mr-3" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "358 439-6332" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "h-16", children: "Página diseñada y creada por Joaquín Klein" })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Discografy", $$Discografy, {})} ${renderComponent($$result2, "Biografy", $$Biografy, {})} ${renderComponent($$result2, "Contact", Contact, {})} </main> ` })}`;
}, "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/ElBigoteDeHoracioPage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
