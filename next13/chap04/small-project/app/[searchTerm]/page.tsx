import getSearchResults from '@/lib/getSearchResults';
import Item from './components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMeatadata({ params: { searchTerm } }: Props) {
  const searchData: Promise<SearchResult> = getSearchResults(searchTerm);
  const data = await searchData;
  const displayTerm = searchTerm.replaceAll('20%', ' ');
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }

  return {
    title: `${displayTerm}`,
    description: `search results for ${displayTerm}`,
  };
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const searchData: Promise<SearchResult> = getSearchResults(searchTerm);
  const data = await searchData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto mx-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          // return <p key={result.pageid}>{JSON.stringify(result)} </p>;
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} not found`} </h2>
      )}
    </main>
  );

  return content;
}
