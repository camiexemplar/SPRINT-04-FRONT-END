import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="text-center py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-600 mb-6">Ops! Parece que a página que você procurou não existe.</p>
      <Link to="/" className="text-blue-600 hover:underline">
      <div className='p-4 m-4 w-45 bg-blue-600 rounded-2xl text-white hover:text-blue-200'>
        Voltar para a Home
      </div>
      </Link>
    </div>
  );
}