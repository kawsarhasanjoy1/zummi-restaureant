import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface PaginationProps {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  onPageChange: (newPage: number) => void;
  edit?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  edit,
  meta,
  onPageChange,
}) => {
  const { page, totalPage } = meta;

  // Function to get the range of pages to display
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    let startPage = Math.max(1, page - 5); // Show pages around the current page
    let endPage = Math.min(totalPage, page + 2);

    if (endPage - startPage < 8) {
      startPage = Math.max(1, endPage - 8);
    }

    for (let i: number = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between mt-4 py-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={`px-2 py-2 bg-blue-500 text-white rounded-full ${
          page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        <MdNavigateBefore size={20} />
      </button>

      <div className="flex space-x-2">
        {/* Previous page ellipsis */}
        {page > 6 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              1
            </button>
            <span className="px-4 py-2 text-gray-500">...</span>
          </>
        )}

        {getPageNumbers().map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-4 py-2 rounded-full ${
              p === page
                ? `bg-blue-700 text-white`
                : `bg-gray-200 hover:bg-gray-300 ${edit}`
            }`}
          >
            {p}
          </button>
        ))}

        {/* Next page ellipsis */}
        {totalPage - page > 5 && (
          <>
            <span className="px-4 py-2 text-gray-500">...</span>
            <button
              onClick={() => onPageChange(totalPage)}
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              {totalPage}
            </button>
          </>
        )}
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
