import readingTime from "reading-time"
import { DateTime } from "luxon";

export const getReadingTime = (text: string) => {
    return readingTime(text).text;
}

export const getRelativeDate = (date: string) => {
    return DateTime.fromISO(date).toRelative()?.toString();
}

export const convertRelativeDatoToPersian = (text: string) => {
    return text.replace("seconds", "ثانیه").replace("second", "ثانیه").replace("minutes", "دقیقه")
        .replace("minute", "دقیقه").replace("hours", "ساعت").replace("hour", "ساعت").replace("days", "روز")
        .replace("day", "روز").replace("months", "ماه").replace("month", "ماه").replace("years", "سال")
        .replace("year", "سال").replace("ago", "پیش");
}

export const convertReadingTimeToPersian = (text: string) => {
    return text.replace("seconds", "ثانیه").replace("second", "ثانیه").replace("min", "دقیقه")
        .replace("hours", "ساعت").replace("hour", "ساعت")
        .replace("read", "زمان مطالعه");
}