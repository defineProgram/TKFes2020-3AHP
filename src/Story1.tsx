import React from 'react'
import './Story1.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function Story1() {
    const youtube='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/s5oGsHTvOqY?list=PLuRgHMVjyJuvVU6H2MIPw-PrVmndAOoSf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    return (
        <div>
            <Header name="「パンデミックな彼女」" />
            <div className="story1-content">
                <Paper elevation={2} className="content-paper explain">
                    <div id="wrapper">
                        <div id="story-contents" dangerouslySetInnerHTML={{__html:youtube}}/>
                    </div>
                </Paper>
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">あらすじ</div>
                    <div className="explain-contents">
                        コロロ。今年の一月になってから大流行し始めたこの伝染病は、大変恐ろしい病気だ。<br /><br />何が恐ろしいかって？<br /><br />
                        コロロは『インスタバエ』という未知の昆虫を媒介とし、十代から二十代前半の若者を中心に感染する厄介な病だ。
                        コロロが謎の病ならば、その症状も謎で、感染したが最後身体がタピオカなどのスイーツしか受け付けなくなる、という地味だが厄介なものだ。<br /><br />
                        これだけならただ気を付けようで済む話、なのだが。困ったことにこの物語の主人公、ざのー丸の２歳上の姉が感染してしまったようだ。
                        最もこの姉の場合、飲むのはタピオカではなく、自家製ダルゴナコーヒーや自家製スムージーなどである。コロロウイルスの亜種だろう。<br /><br />
                        どちらにせよ、このまま放っておいたら年を越す前に糖尿病になってしまいそうだ。そこで、ざのー丸は万病に効く伝説の薬草「ドクダミ」を探す旅に出たのであった。<br /><br />
                    </div>
                </Paper>
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">キャストから皆さんへ</div>
                    <div className="explain-contents">
                        ざのー丸役の青木です！この劇は姉がとあるウイルスに感染してしまって治すための薬草を探すという劇です！<br /><br />
                        見どころは途中で出てくる神様との迫真のやり取りです。ぜひ見に来てください！
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Story1;