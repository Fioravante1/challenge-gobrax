import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

export default function TableMotorista() {
  const [checkedId, setChecked] = useState(null);

  function handleCheckboxChange(id) {
    setChecked(id === checkedId ? null : id);
  }

  function createData(id, nome, documento, vinculo) {
    return { id, nome, documento, vinculo };
  }

  const rows = [
    createData(1, 'João', '123.456.789-00', 'sim'),
    createData(2, 'Maria', '987.654.321-00', 'sim'),
    createData(3, 'José', '456.789.123-00', 'sim'),
    createData(4, 'Ana', '654.321.987-00', 'sim'),
  ];

  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        border: '1px solid #ccc',
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Teste de comit</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Vínculo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    id={`checkbox-${row.id}`}
                    checked={row.id === checkedId}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.documento}</TableCell>
                <TableCell>{row.vinculo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
