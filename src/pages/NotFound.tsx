import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { DoorClosed } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <DoorClosed className="mx-auto mb-6 h-16 w-16 text-[#22c55e]" />
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-full shadow-md hover:bg-[#16a34a] transition"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
