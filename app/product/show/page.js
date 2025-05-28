import { supabase } from '@/lib/supabase';

export default async function SubmitListPage() {
  const { data, error } = await supabase
    .from('price_reports')
    .select('*, stores(*)')
    .order('report_date', { ascending: false });

    console.log(data);
  if (error) {
    console.error(error);
    return <div>❌ 에러: {error.message}</div>;
  }

  return (
    <div>
      <h2>가격 제보 리스트</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            🏪 {item.stores.store_name} | 🧴 {item.product_name} | 💰 {item.price.toLocaleString()}엔
          </li>
        ))}
      </ul>
    </div>
  );
}
