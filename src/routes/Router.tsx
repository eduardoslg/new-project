import { Route, Routes } from 'react-router-dom';
import { TelaPrincipal } from '../pages/TelaPrincipal';
import { TelaSecundaria } from '../pages/TelaSecundaria';
import { Erro } from '../pages/Erro';
import { Favoritos } from '../pages/Favoritos';
import { Filmes } from '../pages/Filmes';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<TelaPrincipal />} />
      <Route path="/filme/:id" element={<Filmes />} />
      <Route path="/favoritos" element={<TelaPrincipal />} />

      <Route path="*" element={<TelaSecundaria />} />
    </Routes>
  );
}