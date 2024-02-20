export async function getCityList(name: string) {
  const datas = await fetch(`https://geo.api.gouv.fr/communes?nom=${name}`);
  const response = await datas.json();
  console.log(response);
}
