import { Route, Routes } from 'react-router-dom';
import { Erro } from '../pages/Erro';
import { Favoritos } from '../pages/Favoritos';
import { Filmes } from '../pages/Filmes';
import { Home } from '../pages/Home';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filme/:id" element={<Filmes />} />
      <Route path="/favoritos" element={<Favoritos />} />

      <Route path="*" element={<Erro />} />
    </Routes>
  );
}