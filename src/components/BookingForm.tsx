"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div className="form-message is-visible">
          预约信息已记录，我们会尽快联系你确认时间。
        </div>
      ) : null}
      <input type="text" name="name" placeholder="你的称呼" required />
      <input type="tel" name="phone" placeholder="联系电话" required />
      <select name="service" required defaultValue="">
        <option value="">选择服务项目</option>
        <option>城市快洗</option>
        <option>全车精护</option>
        <option>季度焕新</option>
        <option>只想先咨询</option>
      </select>
      <textarea name="note" placeholder="车型 / 到店时间 / 特别需求" />
      <button className="button" type="submit">
        提交预约
      </button>
    </form>
  );
}
