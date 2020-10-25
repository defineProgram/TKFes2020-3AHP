import React from 'react'
import './Story2.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function Story2() {
    return (
        <div>
            <Header name="「15年越しの絆」" />
            <div className="story2-content">
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">あらすじ</div>
                    <div className="explain-contents">
                        これはとある男の話。男は子供と図書館が大好き。毎日ちびっこたちを集めてお話ししている。今日も子供たちは男の周りに集まってきた。
                    話をせがまれると彼は、<br /><br />
                    「するから、するから。そうだな、このオンボロ図書館は予算が足りなくてエアコンがついていないもんだから、今日みたいな暑い日にはたまったもんじゃない。臭くもなるからなぁ。
                    本当ならいつも通りここでやりたかったけど、ここは暑いから涼しい場所に移動しよう。」<br /><br />
                    どうやら移動するようだ。着いたらそこはとあるアパートで、彼はそこを「拠点」と呼んでいるらしい。子供たちは渋るが、彼はこう言った。<br /><br />
                    「安心して、『他に』変な人が来ても、指一本触れさせやしないから。」<br /><br />
                    そして、男は昔話、それも20年ほど前、とある学校がまだあった頃の話を語り出すのであった。<br /><br />
                    <b>なお、映画公開は10/30を予定しております。公開まで暫くお待ち下さい。</b>
                    </div>
                </Paper>
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">キャストから皆さんへ</div>
                    <div className="explain-contents">
                        フクワジュツ役の伊勢田です。この劇は頭のおかしな人しかでてこない恐ろしい劇です。見どころは…全部ですかねｗ<br /><br />ぜひご覧ください！
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Story2;