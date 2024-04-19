import { customRender } from '../../tests/utilis';
import TableMotorista from './TableMotoristaMotorista';


describe('TableMotorista Componente', () => {

  it('TableMotorista deve exibir o texto "ID" na tela', () => {
    const { screen } = customRender(<TableMotorista />);

    expect(screen.getByText('ID')).toBeInTheDocument();
  })

  it('TableMotorista deve exibir o texto "Nome" na tela', () => {
    const { screen } = customRender(<TableMotorista />);

    expect(screen.getByText('Nome')).toBeInTheDocument();
  })

  it('TableMotorista deve exibir o texto "Documento" na tela', () => {
    const { screen } = customRender(<TableMotorista />);

    expect(screen.getByText('Documento')).toBeInTheDocument();
  })

  it('TableMotorista deve exibir o texto "Vínculo" na tela', () => {
    const { screen } = customRender(<TableMotorista />);

    expect(screen.getByText('Vínculo')).toBeInTheDocument();
  })

  it('Seleção do Checkbox funciona corretamente', () => {
    const { getAllByRole, fireEvent } = customRender(<TableMotorista />);

    const checkboxes = getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

  })
})