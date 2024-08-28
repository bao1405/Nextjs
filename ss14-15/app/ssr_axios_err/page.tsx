import axios from "axios";
import React from "react";

export default async function page() {
  let errMessenge = "";
  try {
    const res = await axios.get("https://example.com/invalid-endpoint");
    return res.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          errMessenge = "404 - Trang không tồn tại";
          break;
        case 500:
          errMessenge = "500 - Lỗi máy chủ";
          break;
        default:
      }
    }
  }

  return (
    <div>
      <b>{errMessenge}</b>
    </div>
  );
}
