import React, { useState, useEffect } from 'react'
import './Header.css'

interface Props {
	name?: string;
}
function Header(props: Props) {
	const [nowWidth, setnowWidth] = useState(window.innerWidth);
	const [isOpen, setisOpen] = useState(window.innerWidth >= 1024);
	const [isHidden, setisHidden] = useState(false);
	const [pos1, setpos1] = useState(window.pageYOffset);
	const [pos2, setpos2] = useState(window.pageYOffset);
	const onScroll = (() => {
		if (isOpen) return;
		if (!isHidden && window.pageYOffset - pos1 >= 100 && window.pageYOffset >= 300) {
			setisHidden(true);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		} else if (!isHidden) {
			setpos1(Math.min(pos1, window.pageYOffset));
		}
		if (isHidden && pos2 - window.pageYOffset >= 100) {
			setisHidden(false);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		} else if (isHidden) {
			setpos2(Math.max(pos2, window.pageYOffset));
		}
	});
	const onResize = (() => {
		if (window.innerWidth >= 1024) {setisHidden(false);setisOpen(true);}
		if (nowWidth >= 1024 && window.innerWidth < 1024) setisOpen(false);
		setnowWidth(window.innerWidth);
	});
	const onKeyDown = (() => { if (isOpen && window.innerWidth < 1024) setisOpen(false) });
	useEffect(() => {
		document.title=props.name+" | 3年A組 ー今から皆さんは観客ですー"
		document.addEventListener("scroll", onScroll);
		document.addEventListener("click", onKeyDown);
		window.addEventListener("resize", onResize);
		return (): void => {
			document.removeEventListener("scroll", onScroll);
			document.removeEventListener("click", onKeyDown);
			window.removeEventListener("resize", onResize);
		}
	});
	const urllist=[['Home','/'],['About','/About'],['「パンデミックな彼女」','/Story1'],['「15年越しの絆」','/Story2'],['タイムテーブル（内部）','/TimeTable']];
	const listItems = urllist.map((name) =>
  		<li key={name[0]}><a href={name[1]} className={name[0]===props.name?"now":""}>{name[0]}</a></li>
	);
	return (
		<header className={(isHidden ? "hidden" : "tapu")}>
			<div className={"hideLayer " + (window.innerWidth < 1024 && isOpen ? "active" : "inactive")} />
			<div className={"humburger " + (isOpen ? "active" : "inactive")}
				onClick={() => setisOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={"globalMenuSp" + " " + (isOpen ? "active" : "inactive")}>
				<div className="decotitle">筑駒文化祭2020 3AHR</div>
				<div className="decosubtitle">ー今から皆さんは観客ですー</div>
				<ul>
					{listItems}
					<li><a href="https://twitter.com/3A2020_official" target="_blank" rel="noopener">Twitter <img src="assets/link.svg" className="ext-link" /></a></li>
				</ul>
			</nav>
			<div className="title"><span>{props.name}</span>
			</div>
		</header>
	);
}
export default Header;