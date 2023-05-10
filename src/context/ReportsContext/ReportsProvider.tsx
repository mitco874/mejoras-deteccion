import { FC, useCallback, useEffect, useReducer } from 'react';
import { Report } from '../../interfaces';
import { ReportsContext, ReportsReducer } from '..';
import { reports } from '../../data';

export interface ReportsState {
    reports: Report[];
    targetRerportId: string;
}

const REPORTS_INITIAL_STATE: ReportsState = {
    reports: [],
    targetRerportId:""
}

interface Props {
    children: React.ReactNode
}

export const ReportsProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(ReportsReducer, REPORTS_INITIAL_STATE);

    const loadReports = useCallback(async () => {
        //const { data } = await apiMethods.get("/api/v1/report?userId=7");
        const userReports: Report[] = reports;
        dispatch({ type: "[Reports] - load reports", payload: userReports });
    }, [])

    const removeReport = async (reportId: string): Promise<void> => {
        //await apiMethods.remove(`/api/v1/report/${reportId}`);
        dispatch({ type: "[Reports] - remove reports", payload: reportId });
    }

    const setTargetReportId = (id: string) => {
        dispatch({ type: "[Reports] - set target report id", payload: id });
    } 


    useEffect(()=> {
        loadReports();
    },[])

    return (
        <ReportsContext.Provider value={{
            ...state,
            loadReports,
            removeReport,
            setTargetReportId
        }} >
            {children}
        </ReportsContext.Provider>
    )
}