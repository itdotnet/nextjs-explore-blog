import readingTime from "reading-time";
import { DateTime } from "luxon";

export const getReadingTime = (text: string, locale: string) => {
  const minute = readingTime(text).minutes;

  const minutesRounded = Math.floor(minute);
  if (locale === "en") {
    if (minutesRounded === 1) return `${minutesRounded} Minute`;
    else return `${minutesRounded} Minutes`;
  } else {
    return `${minutesRounded} دقيقه`;
  }
};

export const getRelativeDate = (date: string, locale: string) => {
  return DateTime.fromISO(date).setLocale(locale).toRelative()?.toString();
};

export const convertRelativeDatoToPersian = (text: string) => {
  return text
    .replace("seconds", "ثانیه")
    .replace("second", "ثانیه")
    .replace("minutes", "دقیقه")
    .replace("minute", "دقیقه")
    .replace("hours", "ساعت")
    .replace("hour", "ساعت")
    .replace("days", "روز")
    .replace("day", "روز")
    .replace("months", "ماه")
    .replace("month", "ماه")
    .replace("years", "سال")
    .replace("year", "سال")
    .replace("ago", "پیش");
};

export const convertReadingTimeToPersian = (text: string) => {
  return text
    .replace("seconds", "ثانیه")
    .replace("second", "ثانیه")
    .replace("min", "دقیقه")
    .replace("hours", "ساعت")
    .replace("hour", "ساعت")
    .replace("read", "زمان مطالعه");
};
