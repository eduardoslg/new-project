import { Route, Routes } from 'react-router-dom';
import { TelaPrincipal } from '../pages/TelaPrincipal';
import { TelaSecundaria } from '../pages/TelaSecundaria';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<TelaPrincipal />} />
      <Route path="/secundaria" element={<TelaSecundaria />} />
    </Routes>
  );
}