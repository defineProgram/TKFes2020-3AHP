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
        width: 'calc((100vw - 350px) * 0.3)',
        margin: '15px 15px',
        height: 'auto',
        ['@media (max-width:1024px)']: {
            width: '40vw',
            margin: '10px 10px',
        },
        ['@media (max-width:550px)']: {
            width: '90vw',
            margin: '10px 0px',
        }
    },
    media: {
        height: '20vw',
        minHeight: 150,
        maxHeight: 300,
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
                <Paper elevation={1} className="content-paper">
                    <div className="content-title">News</div>
                    <div className="news-article">
                        <div className="article-date">2020/10/12</div>
                        <div className="article-body">
                            サイトを公開しました。
                        </div>
                    </div>
                    <div className="news-article">
                        <div className="article-date">2020/10/17</div>
                        <div className="article-body">
                            <a className="link" href="/About">About</a> と
                            <a className="link " href="/Story1">「パンデミックな彼女」紹介・上映ページ</a> を更新しました。
                        </div>
                    </div>
                </Paper>
                <Paper elevation={1} className="content-paper">
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
                        <a href="/About">
                            <Card className={classes.root}>
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
                        </a>
                        <a href="/Story1">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/assets/virus_corona.png"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            パンデミックな彼女
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            映画「パンデミックな彼女」の紹介・上映ページです。
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="/Story2">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/assets/bessou_log_house.png"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            15年越しの絆
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            映画「15年越しの絆」の紹介・上映ページです。
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="/TimeTable">
                            <Card className={classes.root}>
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
                        </a>
                    </div>
                </div>
                <Paper elevation={1} className="content-paper">
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