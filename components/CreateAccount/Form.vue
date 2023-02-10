<template>
  <div class="py-10 sm:py-16 border-y border-brand-gray-300">
    <div class="flex gap-5 sm:gap-10 flex-col md:flex-row">
      <div class="space-y-8 sm:space-y-14 w-full">
        <div
          class="
            flex flex-col
            lg:flex-row lg:items-center lg:divide-x
            divide-brand-gray-50
            gap-2
            sm:gap-0
          "
        >
          <h2
            class="
              text-[29px]
              leading-[34px]
              md:leading-none
              xl:text-[47px]
              text-dark
              font-dm_serif
              lg:pr-6
            "
          >
            Créer votre compte
          </h2>
          <a
            href="#"
            class="
              lg:pl-6
              inline-bloack
              text-brand-yellow-25
              underline
              font-normal
            "
            >Je possède déjà un compte</a
          >
        </div>
        <div class="space-y-6 sm:y-8">
          <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
            Mes informations
          </h3>
          <div class="space-y-5">
            <div class="divide-y divide-brand-gray-50 pb-2">
              <div class="pb-5 flex gap-14">
                <div class="">
                  <input
                    type="radio"
                    name="typeone"
                    id="type-1"
                    class="hidden peer"
                  />
                  <label
                    for="type-1"
                    class="
                      relative
                      text-dark
                      pl-8
                      text-base
                      sm:text-xl
                      before:w-[22px]
                      before:h-[22px]
                      before:border
                      before:border-brand-gray-300
                      before:rounded-full
                      before:absolute
                      before:left-0
                      before:top-1/2
                      before:-translate-y-1/2
                      after:w-3
                      after:h-3
                      after:bg-brand-yellow
                      after:absolute
                      after:left-[5px]
                      after:top-1.5
                      leading-none
                      h-6
                      flex
                      items-center
                      after:rounded-full after:opacity-0
                      peer-checked:after:opacity-100
                    "
                    >Privé</label
                  >
                </div>
                <div class="">
                  <input
                    type="radio"
                    name="typeone"
                    id="type-2"
                    class="hidden peer"
                    checked
                  />
                  <label
                    for="type-2"
                    class="
                      relative
                      text-dark
                      pl-8
                      text-base
                      sm:text-xl
                      before:w-[22px]
                      before:h-[22px]
                      before:border
                      before:border-brand-gray-300
                      before:rounded-full
                      before:absolute
                      before:left-0
                      before:top-1/2
                      before:-translate-y-1/2
                      after:w-3
                      after:h-3
                      after:bg-brand-yellow
                      after:absolute
                      after:left-[5px]
                      after:top-1.5
                      leading-none
                      h-6
                      flex
                      items-center
                      after:rounded-full after:opacity-0
                      peer-checked:after:opacity-100
                    "
                    >Société</label
                  >
                </div>
              </div>
              <div class="pt-5 flex gap-14">
                <div class="">
                  <input
                    type="radio"
                    name="typetwo"
                    id="type-3"
                    class="hidden peer"
                  />
                  <label
                    for="type-3"
                    class="
                      relative
                      text-dark
                      pl-8
                      text-base
                      sm:text-xl
                      before:w-[22px]
                      before:h-[22px]
                      before:border
                      before:border-brand-gray-300
                      before:rounded-full
                      before:absolute
                      before:left-0
                      before:top-1/2
                      before:-translate-y-1/2
                      after:w-3
                      after:h-3
                      after:bg-brand-yellow
                      after:absolute
                      after:left-[5px]
                      after:top-1.5
                      leading-none
                      h-6
                      flex
                      items-center
                      after:rounded-full after:opacity-0
                      peer-checked:after:opacity-100
                    "
                    >Madame</label
                  >
                </div>
                <div class="">
                  <input
                    type="radio"
                    name="typetwo"
                    id="type-4"
                    class="hidden peer"
                    checked
                  />
                  <label
                    for="type-4"
                    class="
                      relative
                      text-dark
                      pl-8
                      text-base
                      sm:text-xl
                      before:w-[22px]
                      before:h-[22px]
                      before:border
                      before:border-brand-gray-300
                      before:rounded-full
                      before:absolute
                      before:left-0
                      before:top-1/2
                      before:-translate-y-1/2
                      after:w-3
                      after:h-3
                      after:bg-brand-yellow
                      after:absolute
                      after:left-[5px]
                      after:top-1.5
                      leading-none
                      h-6
                      flex
                      items-center
                      after:rounded-full after:opacity-0
                      peer-checked:after:opacity-100
                    "
                    >Monsieur</label
                  >
                </div>
              </div>
            </div>
            <div class="relative">
              <label
                for="Entreprise"
                class="
                  relative
                  z-20
                  inline-block
                  text-sm
                  sm:text-base
                  md:text-lg
                  ml-3
                  px-2
                  bg-white
                  leading-none
                  py-1
                  text-brand-gray-800
                "
                >Entreprise</label
              >
              <div class="relative -mt-3 sm:-mt-4">
                <input
                  placeholder="Hôtel de la poste"
                  type="text"
                  name="Entreprise"
                  id="Entreprise"
                  class="
                    placeholder:text-brand-gray-600
                    text-lg
                    z-10
                    text-brand-gray-600
                    md:text-xl
                    py-3
                    pl-5
                    w-full
                    pr-10
                    border border-brand-gray-400
                    focus:outline-none focus:ring-0
                    appearance-none
                  "
                />
                <icon-info
                  class="absolute top-4 right-5"
                  title="Write some info here"
                ></icon-info>
              </div>
            </div>
            <div class="relative">
              <label
                for="Nom"
                class="
                  relative
                  z-20
                  inline-block
                  text-sm
                  sm:text-base
                  md:text-lg
                  ml-3
                  px-2
                  bg-white
                  leading-none
                  py-1
                  text-brand-gray-800
                "
                >Nom</label
              >
              <div class="relative -mt-3 sm:-mt-4">
                <input
                  placeholder="Demont"
                  type="text"
                  name="Nom"
                  id="Nom"
                  class="
                    placeholder:text-brand-gray-600
                    text-lg
                    z-10
                    text-brand-gray-600
                    md:text-xl
                    py-3
                    px-5
                    w-full
                    border border-brand-gray-400
                    focus:outline-none focus:ring-0
                    appearance-none
                  "
                />
              </div>
            </div>
            <div class="relative">
              <div class="relative">
                <input
                  placeholder="Demont"
                  type="text"
                  name="Nom"
                  id="Nom"
                  class="
                    placeholder:text-brand-red
                    text-brand-red text-lg
                    z-10
                    md:text-xl
                    py-3
                    px-5
                    w-full
                    border border-brand-red
                    focus:outline-none focus:ring-0
                    appearance-none
                  "
                />
                <p class="ml-5 text-xl text-brand-red mt-3">
                  Le prénom est obligatoire
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-7">
              <div class="relative lg:col-span-5">
                <label
                  for="Rue"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Rue</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="Rue du Moulin"
                    type="text"
                    name="Rue"
                    id="Rue"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-1">
                <label
                  for="N°"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >N°</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="27"
                    type="text"
                    name="N°"
                    id="N°"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-2">
                <label
                  for="NPA"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >NPA</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="1872"
                    type="text"
                    name="NPA"
                    id="NPA"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-4">
                <label
                  for="Lieu"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Lieu</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="1872"
                    type="text"
                    name="Lieu"
                    id="Lieu"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-6">
                <label
                  for="Pays"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Pays</label
                >
                <div class="-mt-4">
                  <SelectBoxTwo
                    class="w-full max-w-full"
                    :items="titles"
                    placeholder=""
                    @value="getPaysValue"
                  />
                </div>
              </div>
              <div class="relative lg:col-span-6">
                <label
                  for="Téléphone"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Téléphone</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="079 234 56 78"
                    type="text"
                    name="Téléphone"
                    id="Téléphone"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-6">
                <div class="">
                  <input
                    type="checkbox"
                    name="address"
                    id="address"
                    class="hidden peer"
                  />
                  <label
                    for="address"
                    class="
                      relative
                      text-dark
                      pl-8
                      text-base
                      sm:text-xl
                      before:w-[22px]
                      before:h-[22px]
                      before:border
                      before:border-brand-gray-300
                      before:absolute
                      before:left-0
                      before:top-1/2
                      before:-translate-y-1/2
                      after:w-3.5
                      after:h-3.5
                      after:bg-brand-yellow
                      after:absolute
                      after:left-[4px]
                      after:top-[5px]
                      leading-none
                      h-6
                      flex
                      items-center
                      after:opacity-0
                      peer-checked:after:opacity-100
                    "
                    >L’adresse de livraison est différente à l’adresse de
                    facturation</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6 sm:space-y-8 pt-6">
          <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
            Adresse de livraison
          </h3>
          <div class="space-y-5">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-7">
              <div class="relative lg:col-span-6">
                <label
                  for="Rue"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Rue</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="Métrailler"
                    type="text"
                    name="Rue"
                    id="Rue"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-5">
                <label
                  for="Rue"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Rue</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="Gabrielle"
                    type="text"
                    name="Rue"
                    id="Rue"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-1">
                <label
                  for="N°"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >N°</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="27"
                    type="text"
                    name="N°"
                    id="N°"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-2">
                <label
                  for="NPA"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >NPA</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="1872"
                    type="text"
                    name="NPA"
                    id="NPA"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-4">
                <label
                  for="Lieu"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Lieu</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="1872"
                    type="text"
                    name="Lieu"
                    id="Lieu"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-6">
                <label
                  for="Pays"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Pays</label
                >
                <div class="-mt-3 sm:-mt-4">
                  <input
                    placeholder="Suisse"
                    type="text"
                    name="Pays"
                    id="Pays"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
              <div class="relative lg:col-span-6">
                <label
                  for="Téléphone"
                  class="
                    relative
                    z-20
                    inline-block
                    text-sm
                    sm:text-base
                    md:text-lg
                    ml-3
                    px-2
                    bg-white
                    leading-none
                    py-1
                    text-brand-gray-800
                  "
                  >Téléphone</label
                >
                <div class="relative -mt-3 sm:-mt-4">
                  <input
                    placeholder="079 234 56 78"
                    type="text"
                    name="Téléphone"
                    id="Téléphone"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <label
            for="email"
            class="
              relative
              z-20
              inline-block
              text-base
              md:text-lg
              ml-3
              px-2
              bg-white
              leading-none
              py-1
              text-brand-gray-400
            "
            >E-mail</label
          >
          <div class="relative -mt-3 sm:-mt-4">
            <input
              placeholder="demontjp@gmail.com"
              type="text"
              name="email"
              id="email"
              class="
                placeholder:text-brand-gray-400
                text-lg
                z-10
                text-brand-gray-400
                md:text-xl
                py-3
                px-5
                w-full
                border border-brand-gray-400
                focus:outline-none focus:ring-0
                appearance-none
              "
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-6 gap-7">
          <div class="relative lg:col-span-6">
            <div class="relative">
              <input
                placeholder="E-mail*"
                type="email"
                name="mail"
                id="mail"
                class="
                  placeholder:text-brand-gray-600
                  text-base
                  sm:text-lg
                  z-10
                  text-brand-gray-600
                  md:text-xl
                  py-3
                  px-5
                  w-full
                  border border-brand-gray-400
                  focus:outline-none focus:ring-0
                  appearance-none
                "
              />
            </div>
          </div>
          <div class="relative lg:col-span-6">
            <div class="relative">
              <input
                placeholder="Mot de passe*"
                type="password"
                name="password"
                id="password"
                class="
                  placeholder:text-brand-gray-600
                  text-base
                  sm:text-lg
                  z-10
                  text-brand-gray-600
                  md:text-xl
                  py-3
                  px-5
                  w-full
                  border border-brand-gray-400
                  focus:outline-none focus:ring-0
                  appearance-none
                "
              />
            </div>
          </div>
          <div class="relative lg:col-span-6">
            <div class="relative">
              <input
                placeholder="Confirmation du mot de passe*"
                type="password"
                name="cpass"
                id="cpass"
                class="
                  placeholder:text-brand-gray-600
                  text-base
                  sm:text-lg
                  z-10
                  text-brand-gray-600
                  md:text-xl
                  py-3
                  px-5
                  w-full
                  border border-brand-gray-400
                  focus:outline-none focus:ring-0
                  appearance-none
                "
              />
            </div>
          </div>
          <div class="relative lg:col-span-6">
            <p class="text-brand-gray-600 text-base">
              *La création d’un compte est obligatoire pour passer la commande
              et accéder en tout temps au magazine E-paper, ainsi qu’a
              l’ensemble du contenu en ligne, et garantir un meilleur suivi de
              votre abonnement.
            </p>
          </div>
        </div>
      </div>
      <!-- for desktop -->
      <div class="space-y-6 shrink-0 md:block hidden">
        <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
          Mes informations
        </h3>
        <div class="w-full bg-brand-gray-200 p-8">
          <div
            class="
              flex
              justify-between
              gap-2
              pb-4
              border-b border-brand-gray-50
            "
          >
            <h3 class="text-dark text-[17px] font-medium">
              Abonnement 12 mois
            </h3>
            <p class="text-dark text-[17px] font-medium">CHF 74.-/année</p>
          </div>
          <ul class="grid gap-3 py-6">
            <li class="flex items-center justify-between">
              <h4 class="text-[17px] text-brand-gray-600">Sous-total</h4>
              <p class="text-[17px] text-brand-gray-600">CHF 74.-</p>
            </li>
            <li class="flex items-center justify-between">
              <h4 class="text-[17px] text-brand-gray-600">Sous-total</h4>
              <p class="text-[17px] text-brand-gray-600">CHF 74.-</p>
            </li>
          </ul>
          <div
            class="
              pt-4
              flex
              justify-between
              items-center
              border-t border-brand-gray-50
            "
          >
            <h3 class="text-xl font-medium text-dark">Total</h3>
            <p class="text-xl font-medium text-dark">CHF 74.-</p>
          </div>
        </div>
        <div class="flex justify-between items-center flex-col gap-4">
          <div class="flex gap-3 items-center">
            <icon-lock></icon-lock>
            <p class="text-brand-gray-600">Paiement 100% sécurisé</p>
          </div>
          <ul class="flex items-center justify-center gap-4">
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-1.png" alt="pay-logo-1"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-2.png" alt="pay-logo-2"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-3.png" alt="pay-logo-3"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-4.png" alt="pay-logo-4"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-5.png" alt="pay-logo-5"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- for mobile -->
      <div class="bg-brand-yellow-25 p-6 sm:p-8 md:hidden">
        <h4
          class="font-medium text-[17px] pb-3 border-b border-white text-white"
        >
          Ma commande
        </h4>
        <div class="pt-3 flex justify-between gap-2 pb-3 border-b border-white">
          <h3 class="text-white text-[17px] font-medium">Abonnement 12 mois</h3>
          <p class="text-white text-[17px] font-medium">CHF 74.-</p>
        </div>
        <div class="flex justify-between items-center flex-col gap-4 pt-7">
          <div class="flex gap-3 items-center">
            <icon-lock-mobile></icon-lock-mobile>
            <p class="text-white">Paiement 100% sécurisé</p>
          </div>
          <ul class="flex items-center justify-center gap-4">
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-1.png" alt="pay-logo-1"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-2.png" alt="pay-logo-2"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-3.png" alt="pay-logo-3"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-4.png" alt="pay-logo-4"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/images/pay-logo-5.png" alt="pay-logo-5"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainArea",
  data() {
    return {
      titles: [
        {
          id: 1,
          title: "Suisse",
          selected: true,
        },
        {
          id: 2,
          title: "Suisse two",
          selected: false,
        },
        {
          id: 3,
          title: "Suisse Three",
          selected: false,
        },
        {
          id: 4,
          title: "Suisse Four",
          selected: false,
        },
      ],
      pays: null,
    };
  },
  methods: {
    getPaysValue(val) {
      this.pays = val;
    },
  },
};
</script>

<style>
</style>