import React from 'react'
import './Home.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header'
import Footer from './Footer'
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '30vw',
        margin: '15px 15px',
        ['@media (max-width:768px)']: {
            width : '70vw',
            margin : '10px 0px',
        },
        ['@media (max-width:425px)']: {
            width : '90vw',
            margin : '10px 0px',
        }
    },
    media: {
        height: '20vw',
        minHeight : 150,
        maxHeight : 300,
    },
});


function Home() {
    const classes = useStyles();
    return (
        <div>
            <Header name="Home" />
            <div className="home-content">
                <div className="welcome">
                    <img src="/assets/thumbnail.webp" className="headerimage" alt="Header Image" />
                </div>
                <Paper elevation={1} className="news">
                    <div className="content-title">News</div>
                    <div className="news-article">
                        <div className="article-date">2020/10/09</div>
                        <div className="article-body">
                            ダミー 1
                        </div>
                    </div>
                    <div className="news-article">
                        <div className="article-date">2020/10/10</div>
                        <div className="article-body">
                            ダミー 2
                        </div>
                    </div>
                </Paper>
                <Paper elevation={1} className="news">
                    <div className="content-title">Schedule</div>
                    <div className="news-article">
                        <div className="article-date">2020/10/30</div>
                        <div className="article-body">
                            映画公開
                        </div>
                    </div>
                </Paper>
                <div className="contents">
                    <div className="content-articles">
                        <Card className={classes.root} onClick={() => { document.location.href = "/About" }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/assets/logo.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        About
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        当デコ、「3年A組　ー今から皆さんは観客ですー　」の紹介ページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={() => { document.location.href = "/Story1" }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/assets/virus_corona.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        「タイトル未定1」
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        映画「タイトル未定1」の上映ページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={() => { document.location.href = "/Story2" }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/assets/bessou_log_house.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        「タイトル未定2」
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        映画「タイトル未定2」の上映ページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={() => { document.location.href = "/TimeTable" }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/assets/kandou_movie_eigakan.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        タイムテーブル
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        学校内で放映される映画のタイムテーブルです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <Paper elevation={1} className="links">
                    <div className="content-title">Links</div>
                    <div className="news-article">
                        <div className="article-body">
                            <a className="link" href="https://tsukukoma.bunkasai.info/">筑駒文化祭公式サイト</a>
                        </div>
                    </div>
                    <div className="news-article">
                        <div className="article-body">
                            <a className="link" href="https://twitter.com/3A2020_official">筑駒 3A 公式Twitter</a>
                        </div>
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Home;