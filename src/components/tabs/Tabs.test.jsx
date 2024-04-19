import { customRender } from '../../tests/utilis';
import BasicTabs from './Tabs';

describe('Tabs Componente', () => {
  it('Deve exibir o texto "Motorista" na tela', () => {
    const { screen } = customRender(<BasicTabs />);

    expect(screen.getByText('Motorista')).toBeInTheDocument();
  })

  it('Deve exibir o texto "Veículo" na tela', () => {
    const { screen } = customRender(<BasicTabs />);

    expect(screen.getByText('Veículo')).toBeInTheDocument();
  })

  it('Deve exibir o texto "Gobrax" na tela', () => {
    const { screen } = customRender(<BasicTabs />);

    expect(screen.getByText('Gobrax')).toBeInTheDocument();
  })

  it('Deve mudar para a guia "Motorista" ao clicar nela', () => {
    const { fireEvent, screen } = customRender(<BasicTabs />);

    fireEvent.click(screen.getByText('Motorista'));

    expect(screen.getByText('Motorista')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Veículo')).not.toHaveAttribute('aria-selected', 'true');
  });

  it('Deve mudar para a guia "Veículo" ao clicar nela', () => {
    const { screen, fireEvent } = customRender(<BasicTabs />);

    fireEvent.click(screen.getByText('Veículo'))

    expect(screen.getByText('Veículo')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Motorista')).not.toHaveAttribute('aria-selected', 'true');
  });
})
