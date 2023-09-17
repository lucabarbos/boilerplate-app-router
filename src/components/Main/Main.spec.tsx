import { render, screen } from "@testing-library/react";

import { Main } from ".";

describe("<Main />", () => {
	it("should render the heading", () => {
		// Renderiza o componente
		const { container } = render(<Main />);

		// Busca o elemento e verifica se ele existe
		expect(
			screen.getByRole("heading", {
				name: /react avançado/i,
			}),
		).toBeInTheDocument();

		// gerar snapshot
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render the colors correctly", () => {
		// Renderiza o componente
		const { container } = render(<Main />);

		// Verifica se o background-color está correto
		expect(container.firstChild).toHaveStyle({
			"background-color": "#06092b",
		});
	});
});
