export default async function Page({ params }) {
  const { storeId } = await params;
  return <div>{storeId} 에 오세요</div>;
}
