import { Button } from '@mui/material'
import { FC, useContext } from 'react'
import { ReportsContext } from '../../../context'

interface Props {
    id: string
}

export const ReportTableOptions: FC<Props> = ({ id }) => {
    const { removeReport } = useContext(ReportsContext);

    const removeReportFromTable = () => {
        removeReport(id);
    }

  return (
        <Button variant="contained" color="error" onClick={removeReportFromTable}>Eliminar</Button>
  )
}
