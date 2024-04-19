import { Autocomplete, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

export default function TableVeiculo() {

  function createData(id, marca, placa) {
    return { id, marca, placa };
  }

  const rows = [
    createData(1, 'Fiat', 'ABC-1234'),
    createData(2, 'Chevrolet', 'DEF-5678'),
    createData(3, 'Ford', 'GHI-9012'),
    createData(4, 'Volkswagen', 'JKL-3456'),
  ];

  const motoristas = [{ label: 'João' }, { label: 'Maria' }, { label: 'José' }, { label: 'Ana' }]

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
              <TableCell>ID</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell width={300}>Motorista vínculado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.marca}</TableCell>
                <TableCell>{row.placa}</TableCell>
                <TableCell>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={motoristas}
                    sx={{ width: 200}}
                    renderInput={(params) => <TextField {...params} label="Motorista" />}
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
