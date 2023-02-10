(window.webpackJsonp=window.webpackJsonp||[]).push([[5,68],{376:function(t,e,l){"use strict";var n=l(2),r=l(75).find,c=l(134),d="find",x=!0;d in[]&&Array(1).find((function(){x=!1})),n({target:"Array",proto:!0,forced:x},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},391:function(t,e,l){"use strict";l.r(e);l(37),l(376),l(16);var n={name:"selectBox",props:["items","placeholder","styles"],data:function(){return{value:{},dropdown:!1}},computed:{is_value:function(){return!Object.keys(this.value).length}},methods:{toggleDropdown:function(){this.dropdown=!this.dropdown},closeDropdown:function(){this.dropdown=!1},selectData:function(t){this.value=this.items.find((function(e){return e.id==t})),this.$emit("value",t),this.dropdown=!1}},mounted:function(){var t=this.items.find((function(t){return!0===t.selected}));t&&(this.value=t)}},r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"relative"},[e("button",{staticClass:"border-b border-brand-gray-300 w-full overflow-hidden font-medium text-brand-yellow-25 whitespace-nowrap text-lg text-left",class:t.styles&&t.styles,on:{click:t.toggleDropdown}},[t.is_value?e("span",{staticClass:"min-h-[50px] flex items-center"},[t._v(t._s(t.placeholder))]):e("span",{staticClass:"min-h-[50px] flex items-center"},[t._v("\n      "+t._s(t.value.title)+"\n    ")]),t._v(" "),e("svg",{staticClass:"w-5 absolute right-0 top-4 stroke-brand-yellow-25 transition-all duration-200 h-5",class:t.dropdown&&"rotate-180",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}})])]),t._v(" "),e("div",{staticClass:"absolute w-full left-0 mt-1 bg-white rounded-xl overflow-y-auto z-30 max-h-[300px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.1)] py-2",class:t.dropdown?"opacity-100 visible":"opacity-0 invisible"},[e("ul",t._l(t.items,(function(l,n){return e("li",{key:n,staticClass:"px-5 py-2 hover:bg-gray-100 text-brand-yellow-25 cursor-pointer text-base",on:{click:function(e){return t.selectData(l.id)}}},[t._v("\n        "+t._s(l.title)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},482:function(t,e,l){"use strict";l.r(e);var n={name:"mainArea",data:function(){return{category:null,region:null,categories:[{id:1,title:"lorem ipsum ",selected:!1},{id:2,title:"lorem ipsum  2",selected:!1},{id:3,title:"lorem ipsum  3",selected:!1},{id:4,title:"lorem ipsum  4",selected:!1}],regions:[{id:1,title:"lorem ipsum ",selected:!1},{id:2,title:"lorem ipsum  2",selected:!1},{id:3,title:"lorem ipsum  3",selected:!1},{id:4,title:"lorem ipsum  4",selected:!1}]}},methods:{getCategoryValue:function(t){this.category=t},getRegionValue:function(t){this.region=t}}},r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sm:px-4 pt-4 pb-14 md:pb-24"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"w-full px-4 md:px-14 lg:px-20 xl:px-24 space-y-12 md:space-y-16"},[e("div",{staticClass:"flex flex-col md:flex-row gap-2.5 md:gap-8 items-end max-w-[1016px] mx-auto"},[e("SelectBox",{staticClass:"w-full",attrs:{items:t.regions,placeholder:"Prix"},on:{value:t.getRegionValue}}),t._v(" "),e("SelectBox",{staticClass:"w-full",attrs:{items:t.categories,placeholder:"Catégorie"},on:{value:t.getCategoryValue}}),t._v(" "),e("div",{staticClass:"relative shrink-0 w-full md:w-[228px] mt-7 md:mt-0"},[e("input",{staticClass:"py-2.5 pl-7 focus:outline-none focus:ring-0 border-b border-0 border-brand-gray-300 text-base bg-transparent 2xl:text-xl text-dark focus:border-dark placeholder:text-brand-gray-100 w-full",attrs:{type:"text",placeholder:"Date"}}),t._v(" "),e("icon-calendar-two",{staticClass:"absolute left-0 top-3.5 stroke-dark"})],1)],1),t._v(" "),e("div",{staticClass:"relative"},[e("ssr-carousel",{staticClass:"culture-carousel",attrs:{"show-dots":"","slides-per-page":1,gutter:30},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}},[e("div",{staticClass:"grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"},[e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-1.png",alt:"image-1"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Expédition "),e("br"),t._v("\n                    Spitzberg\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-2.png",alt:"image-2"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les Féroé, une féérie nordique\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-3.png",alt:"image-3"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Thalasso & découverte de la Tunisie\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-4.png",alt:"image-4"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Crans-Montana\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-5.png",alt:"image-5"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Arosa\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-6.png",alt:"image-6"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les trésors du Nil en dahabieh privée\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-7.png",alt:"image-7"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    En raquette à "),e("br"),t._v("\n                    Montana !\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-8.png",alt:"image-8"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Fin de l’année à "),e("br"),t._v("\n                    Prague\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-9.png",alt:"image-9"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Cuba Perle des "),e("br"),t._v("\n                    Caraïbes\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"},[e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-1.png",alt:"image-1"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Expédition "),e("br"),t._v("\n                    Spitzberg\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-2.png",alt:"image-2"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les Féroé, une féérie nordique\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-3.png",alt:"image-3"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Thalasso & découverte de la Tunisie\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-4.png",alt:"image-4"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Crans-Montana\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-5.png",alt:"image-5"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Arosa\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-6.png",alt:"image-6"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les trésors du Nil en dahabieh privée\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-7.png",alt:"image-7"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    En raquette à "),e("br"),t._v("\n                    Montana !\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-8.png",alt:"image-8"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Fin de l’année à "),e("br"),t._v("\n                    Prague\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-9.png",alt:"image-9"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Cuba Perle des "),e("br"),t._v("\n                    Caraïbes\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"},[e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-1.png",alt:"image-1"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Expédition "),e("br"),t._v("\n                    Spitzberg\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-2.png",alt:"image-2"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les Féroé, une féérie nordique\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-3.png",alt:"image-3"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Thalasso & découverte de la Tunisie\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-4.png",alt:"image-4"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Crans-Montana\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-5.png",alt:"image-5"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Escapade hivernale à Arosa\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-6.png",alt:"image-6"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Les trésors du Nil en dahabieh privée\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-7.png",alt:"image-7"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    En raquette à "),e("br"),t._v("\n                    Montana !\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-8.png",alt:"image-8"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Fin de l’année à "),e("br"),t._v("\n                    Prague\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])]),t._v(" "),e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"relative min-h-[237px]"},[e("img",{staticClass:"absolute inset-0 h-full w-full z-20 object-cover",attrs:{src:"/images/voyages/image-9.png",alt:"image-9"}})]),t._v(" "),e("div",{staticClass:"px-6 lg:px-10 py-6 lg:py-8 space-y-5"},[e("div",{staticClass:"space-y-3"},[e("h2",{staticClass:"text-center font-dm_serif text-dark text-[28px] leading-[33px]"},[t._v("\n                    Cuba Perle des "),e("br"),t._v("\n                    Caraïbes\n                  ")]),t._v(" "),e("time",{staticClass:"text-center block font-medium text-dark text-lg",attrs:{datetime:"Du 27 mai au 03 juin 2023"}},[t._v("Du 27 mai au 03 juin 2023")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("p",{staticClass:"text-center font-medium text-brand-yellow-25 text-lg"},[t._v("\n                    Prix abonnés : dès CHF 6290.-\n                  ")]),t._v(" "),e("p",{staticClass:"text-center font-medium text-brand-gray-600 text-lg"},[t._v("\n                    Prix : dès CHF 6490.-\n                  ")])])])])])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SelectBox:l(391).default,SsrCarousel:l(375).default})}}]);