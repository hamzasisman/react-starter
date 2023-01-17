function Navbar() {
    return (
        <div id="navbar" className="sticky top-0 z-20 flex h-[62px] flex-shrink-0 bg-[#1269db] shadow-lg">
            <button id="menu_mobile" className="ml-4 md:hidden max-sm:z-20" onClick="toggleSidebar();">
                <span className="material-symbols-outlined text-white text-3xl menu-btn">menu</span>
            </button>
            <div className="flex flex-1 justify-between px-4 mx-3">
                <div className="flex flex-1">
                    <form className="w-full md:ml-0 my-3 hidden sm:flex" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">Search</label>
                        <div className="relative w-full text-white focus-within:text-[#BFBFBF]">
                            <label htmlFor="search-field"
                                className="cursor-pointer hover:opacity-80 absolute inset-y-0 left-0 flex items-center px-3">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                            <input id="search-field"
                                className="block h-full w-full border-transparent bg-[#0F5ABC] focus-within:bg-white transition-colors duration-400 py-2 pl-14 pr-3 text-[#BFBFBF] placeholder-white focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm rounded-md"
                                placeholder="Ara ..." type="search" name="search" />
                        </div>
                    </form>
                    <a href="dashboard.html"
                        className="flex sm:hidden flex-shrink-0 items-center justify-center w-full mb-[3px] max-sm:z-20">
                        <img className="h-[33px] w-auto" src="assets/svg/logo/clickivo-prime-logo-yatay-beyaz.svg"
                            alt="ClickIVO Prime" />
                    </a>
                </div>
                <label htmlFor="menu-toggle" className="ml-3 sm:hidden flex items-center max-sm:z-20">
                    <span className="material-symbols-outlined text-white text-3xl font-bold">more_vert</span>
                </label>
                <input type="checkbox" id="menu-toggle" className="hidden peer" />
                <ul id="nav" className="ml-4 hidden sm:flex items-center max-sm:peer-checked:flex animate-slideIn toggle-content">
                    <li>
                        <div id="task" className="relative group">
                            <button onClick="toggleInfo(this.parentNode.id);" type="button"
                                className="h-10 w-10 ml-1 rounded-sm hover:bg-[#0F5ABC] focus:bg-[#0F5ABC] flex items-center justify-center text-white relative">
                                <span className="sr-only">View notifications</span>
                                <span className="material-symbols-outlined">headset_mic</span>
                                <span
                                    className="w-4 h-4 rounded-full text-white absolute bg-[#31ce36] text-xs top-1 right-1">0</span>
                            </button>
                            <div className="tooltip">
                                <p>Görevler</p>
                            </div>

                            <div id="info"
                                className="info hidden animate-fadeIn absolute right-0 z-10 mt-[10px] w-72 origin-top-right text-[13px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <p className="px-4 font-bold py-3">Görevler</p>
                                <hr />
                                <div
                                    className="h-64 overflow-y-scroll sm:overflow-y-hidden hover:overflow-y-scroll transition-all duration-300 py-3">
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p>Yeni görev bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p>Yeni görev bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p>Yeni görev bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p>Yeni görev bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p>Yeni görev bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <a className="px-4 py-3 flex justify-between" href="tasks.html">
                                    <p>Tüm görevleri gör</p>
                                    <span className="material-symbols-outlined text-base font-bold">
                                        chevron_right
                                    </span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="request" className="relative group">
                            <button onClick="toggleInfo(this.parentNode.id);" type="button"
                                className="h-10 w-10 ml-1 rounded-sm hover:bg-[#0F5ABC] focus:bg-[#0F5ABC] flex items-center justify-center text-white relative">
                                <span className="sr-only">View notifications</span>
                                <span className="material-symbols-outlined">confirmation_number</span>
                                <span
                                    className="w-4 h-4 rounded-full text-white absolute bg-[#ea4d56] text-xs top-1 right-1">4</span>
                            </button>
                            <div className="tooltip">
                                <p>Talepler</p>
                            </div>

                            <div id="info"
                                className="info hidden animate-fadeIn absolute right-0 z-10 mt-[10px] w-72 origin-top-right text-[13px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <p className="px-4 font-bold py-3">Talepler</p>
                                <hr />
                                <div
                                    className="h-64 overflow-y-scroll sm:overflow-y-hidden hover:overflow-y-scroll transition-all duration-300 py-3">
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Hamza Şişman</p>
                                            <p>Yeni talep bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Hamza Şişman</p>
                                            <p>Yeni talep bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Hamza Şişman</p>
                                            <p>Yeni talep bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Hamza Şişman</p>
                                            <p>Yeni talep bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="px-4 flex gap-2" href="">
                                        <div className="w-10 h-10 flex shrink-0">
                                            <img src="assets/img/ko-logo-papagan.png" width="40" height="40" alt="KO logo" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Hamza Şişman</p>
                                            <p>Yeni talep bilgisini içeriyor</p>
                                            <p>10/21/2022 14:30:14</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <a className="px-4 py-3 flex justify-between" href="tickets.html">
                                    <p>Tüm talepleri gör</p>
                                    <span className="material-symbols-outlined text-base font-bold">
                                        chevron_right
                                    </span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="reminder" className="relative group">
                            <button onClick="toggleInfo(this.parentNode.id);" type="button"
                                className="h-10 w-10 ml-1 rounded-sm hover:bg-[#0F5ABC] focus:bg-[#0F5ABC] flex items-center justify-center text-white relative">
                                <span className="sr-only">View notifications</span>
                                <span className="material-symbols-outlined">notifications</span>
                                <span
                                    className="w-4 h-4 rounded-full text-white absolute bg-[#ffc107] text-xs top-1 right-1">3</span>
                            </button>
                            <div className="tooltip">
                                <p>Hatırlatmalar</p>
                            </div>

                            <div id="info"
                                className="info hidden animate-fadeIn absolute right-0 z-10 mt-[10px] w-72 origin-top-right pb-4 text-[13px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <p className="px-4 font-bold pt-3">Hatırlatmalar</p>
                                <hr className="my-3" />
                                <a className="px-4 flex justify-between" href="reminders.html">
                                    <p>Tüm hatırlatmaları gör</p>
                                    <span className="material-symbols-outlined text-base font-bold">
                                        chevron_right
                                    </span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="profile" className="relative ml-3">
                            <button onClick="toggleInfo(this.parentNode.id);" type="button"
                                className="group flex max-w-xs items-center rounded-full" id="user-menu-button"
                                aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-10 w-10 rounded-full" src="assets/img/gandalf.jpg" alt="Profil" />
                            </button>
                            <div id="info"
                                className="hidden info animate-fadeIn absolute right-0 z-10 mt-[14px] w-72 origin-top-right py-4 text-[13px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                <div className="flex px-4">
                                    <img className="rounded-lg" src="assets/img/gandalf.jpg" width="60" height="60" alt="" />
                                    <div className="ml-2">
                                        <p className="my-1">Hamza Şişman</p>
                                        <p className="text-[12px] text-[#6c757d] mb-1">email@konusarakogren.com</p>
                                    </div>
                                </div>

                                <hr className="mb-3 mt-4 px-4" />
                                <a href="#" className="block px-5 py-[3px] hover:bg-[#F8F9FA] focus:bg-[#F8F9FA]" role="menuitem"
                                    tabIndex="-1" id="user-menu-item-0">Profilim</a>

                                <a href="#" className="block px-5 py-[3px] hover:bg-[#F8F9FA] focus:bg-[#F8F9FA]" role="menuitem"
                                    tabIndex="-1" id="user-menu-item-1">Çıkış Yap</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar