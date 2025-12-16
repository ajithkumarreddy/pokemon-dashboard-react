/**
 * App
 *
 * Root component of the application.
 * Responsible only for rendering the top-level page component.
 * Keeps application bootstrap minimal and clean.
 *
 * @returns {JSX.Element}
 */

import PokemonPage from "./pages/PokemonPage";

function App() {
  return <PokemonPage />;
}

export default App;
