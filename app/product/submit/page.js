'use client';
import { useState } from 'react';

export default function SubmitPrice() {
const [msg, setMsg] = useState('');

async function handleSubmit(e) {
    const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            store_id: "26dd3398-e968-47c5-bd67-ed204f9807f5",
            product_name: '노트북',
            price: 1000000,
            currency: 'JPY',
            photo_url: 'https://picsum.photos/200/300'
        }),
    });

    const result = await res.json();
    setMsg(result.success ? '제보 완료!' : '실패 ㅠ');

}
return (
    <div>
      <button onClick={handleSubmit}>가격 제보하기</button>
      <p>{msg}</p>
    </div>
  );
}