import React from 'react'
import './About.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function About() {
    return (
        <div>
            <Header name="About" />
            <div className="about-content">
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">About</div>
                    <div className="explain-contents">
                        今年度のHRデコは「パンデミックな彼女」、「15年越しの絆」の二本立てでお送りします。<br /><br />
                    これらの作品についてよりくわしくあらすじを見てみたいという方はこのHPにある、専用のページに詳しい紹介文が書いてありますのでそちらのほうをぜひともご覧になって下さい。<br /><br />
                    また、コロナウイルスの影響下にあることを考慮した上で劇という形ではなく、映画という形で皆さまにお届けします。<br />
                    こちらの映画は3-Aの教室だけではなくオンライン上でも視聴可能となっておりますので少しでも興味があれば是非、私どもの映画を見ていただけると幸いです。
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default About;