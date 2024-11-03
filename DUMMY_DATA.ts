import { Category, Post } from "./types/collection";

export const DUMMY_POSTS: Post[] = [
    {
        id: "1",
        title: "یک شهر سرسبز دوست داشتنی: نیویورک",
        description:
            "نیویورک شهری در ایالات متحده آمریکا است. این شهر پرجمعیت ترین شهر ایالات متحده است.",
        category: { id: "1", title: "شهرها" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "a-lovely-green-city-new-york",
        image:
            "https://cdn.britannica.com/61/93061-004-74AE05AC/Statue-of-Liberty-Island-New-York-Bay.jpg?s=1500x700&q=85",
        body: "نیویورک شهری در ایالات متحده آمریکا است. این شهر پرجمعیت ترین شهر ایالات متحده است.",
        date_created: "2023-07-01T00:00:00.000Z",
        date_updated: "1397/02/03",
    },
    {
        id: "2",
        title: "شهر سرزنده پاریس",
        description:
            "پاریس پایتخت و پرجمعیت ترین شهر فرانسه است. این بر روی رودخانه سن، در شمال کشور، در قلب منطقه ایل دو فرانس واقع شده است.",
        category: { id: "1", title: "شهرها" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "شهر سرزنده پاریس",
        image:
            "https://www.home-hunts.net/wp-content/uploads/2017/10/shutterstock_319945916-1280x640.jpg",
        body: "پاریس به خاطر هنر، فرهنگ و تاریخ خود شناخته شده است. این شهر مکان های دیدنی بسیاری مانند برج ایفل، موزه لوور و کلیسای نوتردام را در خود جای داده است. این شهر همچنین به دلیل مد و غذای خود، با رستوران‌های مشهور جهانی و خانه‌های مد مجلل شناخته شده است. پاریس یک مرکز جهانی برای تجارت، امور مالی و سیاست است و یکی از شهرهای پیشرو جهان در این زمینه ها محسوب می شود.",
        date_created: "2024-07-01T00:00:00.000Z",
        date_updated: "1397/02/04",
    },
    {
        id: "3",
        title: "شهر باشکوه لندن",
        description:
            "لندن پایتخت و بزرگترین شهر انگلستان و بریتانیا است. این شهر بر روی رودخانه تیمز در جنوب شرقی انگلستان واقع شده است.",
        category: { id: "1", title: "Cities" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "the-majestic-city-of-london",
        image:
            "https://www.travelandleisure.com/thmb/IXQSNADNH_MJ-9Bn9GKau0GveFY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-covent-garden-london-BESTCITY0724-00e8cf044486411e8a8e6e9e5467a6d6.jpg",
        body: "لندن یک شهر جهانی و یکی از مراکز پیشرو مالی، فرهنگی و سیاسی جهان است. این شهر به‌خاطر تاریخ، موزه‌ها و مکان‌های شاخصی مانند برج لندن، کاخ باکینگهام و چشم لندن معروف است. این شهر همچنین خانه بسیاری از دانشگاه ها، تئاترها و تیم های ورزشی معتبر است.",
        date_created: "2021-07-01T00:00:00.000Z",
        date_updated: "1397/02/05",
    },
    {
        id: "4",
        title: "ماجراجویی بزرگ آمازون",
        description:
            "آمازون بزرگترین رودخانه جهان است. در آمریکای جنوبی قرار دارد و از برزیل، پرو، کلمبیا و غیره می گذرد.",
        category: { id: "2", title: "تجربیات" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "the-great-adventure-of-the-amazon",
        image:
            "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxMXx8QW1hem9uJTIwZm9yZXN0fGVufDB8fHx8MTY3MDMyMjY1MA&ixlib=rb-4.0.3",
        body: "آمازون بزرگترین رودخانه جهان است. این کشور در آمریکای جنوبی واقع شده است و از برزیل، پرو، کلمبیا، اکوادور، بولیوی، ونزوئلا، گویان، سورینام و گویان فرانسه می گذرد. حوضه رودخانه آمازون 16 درصد از آب شیرین جهان و 10 درصد از گونه های شناخته شده جهان را در خود جای داده است.",
        date_created: "2021-07-01T00:00:00.000Z",
        date_updated: "1397/02/05",
    },
    {
        id: "5",
        title: "سفر به آسمان بیکران: کاپادوکیا",
        description:
            "کاپادوکیا منطقه ای در مرکز ترکیه است. این شهر به دلیل ویژگی‌های زمین‌شناسی منحصربه‌فردش، مانند دودکش‌های پری، که صخره‌ای مخروطی شکل هستند، شناخته شده است.",
        category: { id: "2", title: "تجربیات" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "let-the-wind-take-you-to-the-infinite-sky-cappadocia",
        image:
            "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxN3x8Q2FwcGFkb2NpYXxlbnwwfHx8fDE2NzAzMjI2OTE&ixlib=rb-4.0.3",
        body: "کاپادوکیه منطقه ای در مرکز ترکیه است. این شهر به دلیل ویژگی‌های زمین‌شناسی منحصربه‌فردش، مانند دودکش‌های پری، که صخره‌ای مخروطی شکل هستند، شناخته شده است. این منطقه همچنین به خاطر کلیساهای غارنشین، شهرهای زیرزمینی و غارنشین هایش معروف است. کاپادوکیه یک مقصد توریستی محبوب است و بازدیدکنندگان زیادی برای دیدن شگفتی های طبیعی منطقه می آیند.",
        date_created: "2021-07-01T00:00:00.000Z",
        date_updated: "1397/02/06",
    },
    {
        id: "6",
        title: "ملحق شدن به فیل ها در طبیعت: تایلند",
        description:
            "تایلند کشوری در جنوب شرقی آسیا است. این شهر به‌خاطر سواحل استوایی، کاخ‌های سلطنتی مجلل، ویرانه‌های باستانی، و معابد پرآذینی که مجسمه‌های بودا را به نمایش می‌گذارند، شهرت دارد.",
        category: { id: "2", title: "تجربیات" },
        author: { id: "1", first_name: "امید", last_name: "عباسی" },
        slug: "joining-the-elephants-in-the-wild-thailand",
        image:
            "http://www.mychiangmaitravel.com/wp-content/uploads/2018/11/maetang-elephant-safari1.jpg",
        body: "تایلند کشوری در جنوب شرقی آسیا است. این شهر به‌خاطر سواحل استوایی، کاخ‌های سلطنتی مجلل، ویرانه‌های باستانی، و معابد پرآذینی که مجسمه‌های بودا را به نمایش می‌گذارند، شهرت دارد. همچنین خانه بسیاری از حیوانات عجیب و غریب از جمله فیل، ببر و میمون است. تایلند یک مقصد توریستی محبوب است و بازدیدکنندگان زیادی برای دیدن شگفتی های طبیعی این کشور می آیند.",
        date_created: "2021-07-01T00:00:00.000Z",
        date_updated: "1397/02/07",
    },
];

export const DUMMY_CATEGORIES: Category[] = [
    {
        id: "1",
        title: "شهرها",
        slug: "cities",
        description:
            "به هر شهری که آنجا بوده ام سفر کنید! من جواهرات پنهان را در هر شهر به اشتراک خواهم گذاشت.",
    },
    {
        id: "2",
        title: "تجربیات",
        slug: "experiences",
        description:
            "دنیا را با من تجربه کنید! من ماجراها و تجربیاتم را در هر کشوری به اشتراک خواهم گذاشت.",
    },
];