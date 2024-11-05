import Image from "next/image";
import React from "react";

const CtaCard = () => {
  return (
    <div className="relative bg-slate-100 px-6 py-10 rounded-md overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* Image */}
      <Image
        fill
        alt="CTA Card Image"
        className="object-center object-cover"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#جهانگردي</div>
        <h3 className="mt-3 text-4xl font-semibold">جهان را با من تماشا كن</h3>
        <p className="max-w-lg mt-2 text-lg">
          با من دنیا را كشف کنید! من در اطراف 🌍 سفر می کنم. من از اکثر شهرهای
          بزرگ 🇺🇸 بازدید کرده ام و در حال حاضر در حال سفر به 🇪🇺 هستم به من ملحق
          شويد!
        </p>
        <form className="mt-6 flex items-center gap-2 w-full">
          <input
            placeholder="ايميل خود را وارد نماييد"
            className="w-full md:w-auto px-3 py-2 text-base bg-white/80 rounded-md placeholder:text-sm outline-none focus:ring-2 ring-neutral-600"
          />
          <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
};

export default CtaCard;
