import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface PaginationProps {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ meta, onPageChange }) => {
  const { page, totalPage } = meta;

  return (
    <div className="flex items-center justify-between mt-4 py-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={`px-2 py-2 bg-blue-500 text-white rounded-full ${
          page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        <MdNavigateBefore size={20}/>
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-4 py-2 rounded-full ${
              p === page
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        disabled={page === totalPage}
        onClick={() => onPageChange(page + 1)}
        className={`px-2 py-2 bg-blue-500 text-white rounded-full ${
          page === totalPage
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-600"
        }`}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export default Pagination;
