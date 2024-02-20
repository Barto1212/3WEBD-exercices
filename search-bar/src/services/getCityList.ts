export type FetchCity = {
  // code: string;
  nom: string;
  // codeDepartement: string;
  //   codeEpci: string;
  //   codeRegion: string;
  //   codesPostaux: string[];
  //   population: number;
  //   siren: string;
};

export async function getCityList(name: string) {
  const datas = await fetch(
    `https://geo.api.gouv.fr/communes?nom=${name}&fields=nom,codeDepartement&limit=10`
  );
  const response = (await datas.json()) as FetchCity[];
  return response.map(city => city.nom)
}
