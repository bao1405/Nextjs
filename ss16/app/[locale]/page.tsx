"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const route = useRouter();
  const change = (value: string) => {
    route.push(value);
    
  };
  return (
    <>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
      <select  onChange={(e) => change(e.target.value)} >
        <option value="2">Chọn ngôn ngữ</option>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </>
  );
}