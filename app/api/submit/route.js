// app/api/submit/route.js
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  const body = await request.json();

  body.report_date = new Date().toISOString();
  body.reporter_nickname = "maizurzu";
  const { store_id, product_name, price, currency, photo_url, report_date, reporter_nickname } = body;

  const { data, error } = await supabase
    .from('price_reports')
    .insert([{ store_id, product_name, price, currency, photo_url, report_date, reporter_nickname }]);

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
