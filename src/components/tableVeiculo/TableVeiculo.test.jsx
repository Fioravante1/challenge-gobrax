import { customRender } from '../../tests/utilis';
import TableVeiculo from './TableVeiculo';


describe('TableVeiculo Componente', () => {

  it('TableVeiculo deve exibir o texto "ID" na tela', () => {
    const { screen } = customRender(<TableVeiculo />);

    expect(screen.getByText('ID')).toBeInTheDocument();
  })

  it('TableVeiculo deve exibir o texto "Marca" na tela', () => {
    const { screen } = customRender(<TableVeiculo />);

    expect(screen.getByText('Marca')).toBeInTheDocument();
  })

  it('TableVeiculo deve exibir o texto "Placa" na tela', () => {
    const { screen } = customRender(<TableVeiculo />);

    expect(screen.getByText('Placa')).toBeInTheDocument();
  })

  it('TableVeiculo deve exibir o texto "Motorista vínculado" na tela', () => {
    const { screen } = customRender(<TableVeiculo />);

    expect(screen.getByText('Motorista vínculado')).toBeInTheDocument();
  })
})