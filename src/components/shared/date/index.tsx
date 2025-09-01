"use client";

interface DateTextProps {
  value: Date;
}

const formatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
});

export default function DateText({ value }: DateTextProps) {
  return <>{formatter.format(value)}</>
}
