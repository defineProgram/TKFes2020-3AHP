import React from 'react'
import './TimeTable.css'
import Header from './Header'
import Footer from './Footer'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
        margin: '30px auto',
        width: '100%',
    },
    table: {
        minWidth: 400,
    },
});

function createData(startTime: string, title: string, endTime: string) {
    return { startTime, title, endTime };
}
const rows = [
    createData("10/30 10:00", "パンデミックな彼女", "10/30 10:30"),
    createData("10/30 11:00", "15年越しの絆", "10/30 11:30"),
    createData("10/30 11:55", "パンデミックな彼女", "10/30 12:25"),
    createData("10/30 13:00", "15年越しの絆", "10/30 13:30"),
    createData("10/30 13:50", "パンデミックな彼女", "10/30 14:20"),
    createData("10/30 15:10", "15年越しの絆", "10/30 15:40"),
    createData("10/30 16:00", "パンデミックな彼女", "10/30 16:30"),

    createData("10/31 10:00", "パンデミックな彼女", "10/31 10:30"),
    createData("10/31 11:00", "15年越しの絆", "10/31 11:30"),
    createData("10/31 11:55", "パンデミックな彼女", "10/31 12:25"),
    createData("10/31 13:00", "15年越しの絆", "10/31 10:30"),
    createData("10/31 14:00", "パンデミックな彼女", "10/31 14:30"),
    createData("10/31 15:00", "15年越しの絆", "10/31 15:30"),

    createData("11/01 10:00", "パンデミックな彼女", "11/01 10:30"),
    createData("11/01 11:00", "15年越しの絆", "11/01 11:30"),
    createData("11/01 11:55", "パンデミックな彼女", "11/01 12:25"),
    createData("11/01 13:00", "15年越しの絆", "11/01 13:30"),
    createData("11/01 13:55", "パンデミックな彼女", "11/01 14:25"),
    createData("11/01 14:45", "15年越しの絆", "11/01 15:25"),
    createData("11/01 16:00", "パンデミックな彼女", "11/01 16:30"),
];
function p(s: string) {
    if (s.length === 1) return '0' + s;
    return s;
}
const now = new Date();
const st = p(String(now.getMonth() + 1)) + "/" + p(String(now.getDate())) + " " + p(String(now.getHours())) + ":" + p(String(now.getMinutes()));
const running = rows.map((row) => (
    (row.startTime <= st && st < row.endTime ?
        <TableRow key={row.startTime}>
            <TableCell component="th" scope="row">{row.startTime}</TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.endTime}</TableCell>
        </TableRow>
        : null)
))
const pending = rows.map((row) => (
    (st < row.startTime ?
        <TableRow key={row.startTime}>
            <TableCell component="th" scope="row">{row.startTime}</TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.endTime}</TableCell>
        </TableRow>
        : null)
))
const finished = rows.map((row) => (
    (row.endTime <= st ?
        <TableRow key={row.startTime}>
            <TableCell component="th" scope="row">{row.startTime}</TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.endTime}</TableCell>
        </TableRow>
        : null)
))
function TimeTable() {
    const classes = useStyles();
    return (
        <div>
            <Header name="Time Table" />
            <div className="timetable-content">
                <div className="nakami">
                    {running.every(val => val === null) === false ? (
                        <div>
                            <div className="table-title">上映中</div>
                            <TableContainer component={Paper} className={classes.root}>
                                <Table className={classes.table} alia-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>開始時刻</TableCell>
                                            <TableCell align="left">題名</TableCell>
                                            <TableCell align="left">終了時刻</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {running}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null}
                    {pending.every(val => val === null) === false ? (
                        <div>
                            <div className="table-title">上映予定</div>
                            <TableContainer component={Paper} className={classes.root}>
                                <Table className={classes.table} alia-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>開始時刻</TableCell>
                                            <TableCell align="left">題名</TableCell>
                                            <TableCell align="left">終了時刻</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pending}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null}
                    {finished.every(val => val === null) === false ? (
                        <div>
                            <div className="table-title">上映終了</div>
                            <TableContainer component={Paper} className={classes.root}>
                                <Table className={classes.table} alia-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>開始時刻</TableCell>
                                            <TableCell align="left">題名</TableCell>
                                            <TableCell align="left">終了時刻</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {finished}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : null}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default TimeTable;