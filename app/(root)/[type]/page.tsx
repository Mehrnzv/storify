import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { convertFileSize, getFileTypesParams, getUsageSummary } from "@/lib/utils";
import { Models } from "node-appwrite";

type Params = {
  params:{
  slug: string
  type: string
  }
}

export async function generateMetadata({ params }: Params) {
  const type = ((params)?.type as string) || "";

  return {
    title: type.charAt(0).toUpperCase() + type.slice(1)
  }
}

const page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];

  // const files = await getFiles({ types, searchText, sort });

  const [files, totalSpace] = await Promise.all([
    getFiles({ types, searchText, sort }),
    getTotalSpaceUsed(),
  ]);

  const usageSummary = getUsageSummary(totalSpace);
  const filteredSummary = usageSummary.find((item) => item.title.toLowerCase() === type.toLowerCase());

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
        {filteredSummary && (
          <p className="body-1">
            Total: <span className="h5">{convertFileSize(filteredSummary.size)}</span>
          </p>
        )}
          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default page;
